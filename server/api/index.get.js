import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  try {
    var { data: projects, error } = await client
      .from("project")
      .select("id, startup (id)")
      .limit(6);

    if (error) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      });
    }

    var { data: people, error } = await client
      .from("person")
      .select("id, image")
      .limit(8);

    if (error) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      });
    }

    var { data: areas, error } = await client
      .from("area")
      .select("id, name, description")
      .limit(3)
      .order("id", { ascending: false });

    if (error) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      });
    }

    return { projects, people, areas };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
