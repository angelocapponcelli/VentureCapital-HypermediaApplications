import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = serverSupabaseClient(event)

    //const { data, error }= await client.from('person').select("*").eq('id', id).limit(1).single()
    
    try {
        var { data: person, error } = await client.from('person').select("*").eq('id', id).limit(1).single()

        if (error) {
            throw createError({
            statusCode: 400,
            statusMessage: error.message,
            });
        }

        var { data: nextPerson, error } = await client
        .from('person')
        .select("id")
        .gt('id', id)
        .limit(1)
        .single()

        if (error) {
            nextPerson = undefined;
        }

        return { person, nextPerson };
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Internal Server Error",
        });
    }
})