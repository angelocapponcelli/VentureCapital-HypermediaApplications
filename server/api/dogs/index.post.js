import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const body = await readBody(event);

    const { data, error }= await client.from('dogs').insert([
        {
            name: body.name,
            breed: body.breed,
            age: Math.floor(Math.random * 14),
            description: "THIS IS A DESCRIPTION...MAYBE",
            locationId: Math.floor(Math.random * 2),
        }
    ])
    
    if(error) {
        throw createError({statusCode: error.code, statusMessage: error.message})
    }

    return data
})