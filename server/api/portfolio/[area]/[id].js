import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);

  const id = event.context.params.id;
  const area = event.context.params.area.replaceAll("%20", " ");

  if (id == "undefined") {
    try {
      var { data: projects, error } = await client
        .from("project")
        .select("id, title, overview, startup (id), area (id, name)")
        .eq("area.name", area)
        .order("id", { ascending: false });

      if (error) {
        throw createError({ statusCode: 400, statusMessage: error.message });
      }

      projects = projects.filter((item) => item.area[0]);
      if (projects.length > 0) {
        return projects;
      } else {
        var { data: areaId, error } = await client
          .from("area")
          .select("id, name")
          .eq("name", area)
          .limit(1)
          .single();
        if (error) {
          throw createError({ statusCode: 400, statusMessage: error.message });
        }
        return areaId;
      }
    } catch (error) {
      /*throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
      });*/
    }
  } else if (area == "all") {
    try {
      var { data: project, error } = await client
        .from("project")
        .select(
          "id, title, overview, product, team, startup (id, name, headquarter, website), supervisor (id, full_name, position), area(id, name)"
        )
        .eq("id", id)
        .limit(1)
        .single();

      if (error) {
        throw createError({
          statusCode: 400,
          statusMessage: error.message,
        });
      }

      var { data: previousProject, error } = await client
        .from("project")
        .select("id, title")
        .gt("id", id)
        .order("id", { ascending: true })
        .limit(1)
        .single();

      if (error) {
        previousProject = undefined;
      }

      var { data: nextProject, error } = await client
        .from("project")
        .select("id, title")
        .lt("id", id)
        .order("id", { ascending: false })
        .limit(1)
        .single();

      if (error) {
        nextProject = undefined;
      }

      return { project, previousProject, nextProject };
    } catch (error) {
      /*throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
      });*/
    }
  } else if (area == "Most relevant projects") {
    var { data: project, error } = await client
      .from("project")
      .select(
        "id, title, overview, product, team, startup (id, name, headquarter, website), supervisor (id, full_name, position), area(id, name), isRelevant"
      )
      .eq("id", id)
      .eq("isRelevant", true)
      .limit(1)
      .single();

    if (error) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      });
    }
    if (project.area.length == 0) {
      throw createError({
        statusCode: 400,
        statusMessage: "Project does not exist",
      });
    }

    var { data: previousProject, error } = await client
      .from("project")
      .select("id, title, area (id, name), isRelevant")
      .eq("isRelevant", true)
      .gt("id", id)
      .order("id", { ascending: true })
      .limit(1)
      .single();

    if (error || !previousProject.area[0]) {
      previousProject = undefined;
    }

    var { data: nextProject, error } = await client
      .from("project")
      .select("id, title, area (id, name), isRelevant")
      .eq("isRelevant", true)
      .lt("id", id)
      .order("id", { ascending: false })
      .limit(1)
      .single();

    if (error || !nextProject.area[0]) {
      nextProject = undefined;
    }

    return { project, previousProject, nextProject };
  } else {
    var { data: project, error } = await client
      .from("project")
      .select(
        "id, title, overview, product, team, startup (id, name, headquarter, website), supervisor (id, full_name, position), area(id, name)"
      )
      .eq("area.name", area)
      .eq("id", id)
      .limit(1)
      .single();

    if (error) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      });
    }
    if (project.area.length == 0) {
      throw createError({
        statusCode: 400,
        statusMessage: "Project does not exist",
      });
    }

    var { data: previousProject, error } = await client
      .from("project")
      .select("id, title, area (id, name)")
      .eq("area.name", area)
      .gt("id", id)
      .order("id", { ascending: true })
      .limit(1)
      .single();

    if (error || !previousProject.area[0]) {
      previousProject = undefined;
    }

    var { data: nextProject, error } = await client
      .from("project")
      .select("id, title, area (id, name)")
      .eq("area.name", area)
      .lt("id", id)
      .order("id", { ascending: false })
      .limit(1)
      .single();

    if (error || !nextProject.area[0]) {
      nextProject = undefined;
    }

    return { project, previousProject, nextProject };
  }
});
