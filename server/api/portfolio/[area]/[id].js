import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);

  const id = event.context.params.id;
  const area = event.context.params.area.replaceAll("%20", " ");

  if (id == "undefined") {
    // get the data for the areas page
    try {
      var { data: projects, error } = await client
        .from("project")
        .select("id, title, overview, startup (id), area (id, name)")
        .eq("area.name", area)
        .order("title", { ascending: true });

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
      throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
      });
    }
  } else if (area == "all") {
    // get the data for the project page coming from the portfolio
    try {
      var { data: project, error } = await client
        .from("project")
        .select(
          "id, title, overview, product, team, gallery, startup (id, name, headquarter, website), supervisor (id, full_name, position, image), area(id, name)"
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
        .lt("title", project.title)
        .order("title", { ascending: false })
        .limit(1)
        .single();

      if (error) {
        previousProject = undefined;
      }

      var { data: nextProject, error } = await client
        .from("project")
        .select("id, title")
        .gt("title", project.title)
        .order("title", { ascending: true })
        .limit(1)
        .single();

      if (error) {
        nextProject = undefined;
      }

      return { project, previousProject, nextProject };
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
      });
    }
  } else if (area == "person") {
    // get the related projects to the specific person
    try {
      var { data: projects, error } = await client
        .from("project")
        .select("id, title, overview, startup (id)")
        .eq("supervisor", id)
        .limit(3);

      if (error) {
        throw createError({
          statusCode: 400,
          statusMessage: error.message,
        });
      }

      return { projects };
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
      });
    }
  } else if (area == "Most relevant projects") {
    // get the data for the project page coming from the page of most relevant projects
    var { data: project, error } = await client
      .from("project")
      .select(
        "id, title, overview, product, team, gallery, startup (id, name, headquarter, website), supervisor (id, full_name, position, image), area(id, name), isRelevant"
      )
      .eq("id", id)
      .eq("isRelevant", true)
      .order("title", { ascending: true })
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
      .select("id, title, area (id, name), isRelevant")
      .eq("isRelevant", true)
      .lt("title", project.title)
      .order("title", { ascending: false })
      .limit(1)
      .single();

    if (error) {
      previousProject = undefined;
    }

    var { data: nextProject, error } = await client
      .from("project")
      .select("id, title, area (id, name), isRelevant")
      .eq("isRelevant", true)
      .gt("title", project.title)
      .order("title", { ascending: true })
      .limit(1)
      .single();

    if (error) {
      nextProject = undefined;
    }

    return { project, previousProject, nextProject };
  } else {
    //get the data for the project page coming from the page of a specific area
    var { data: project, error } = await client
      .from("project")
      .select(
        "id, title, overview, product, team, gallery, startup (id, name, headquarter, website), supervisor (id, full_name, position, image), area(id, name), gallery"
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
      .select("id, title, area!inner (id, name)")
      .eq("area.name", area)
      .order("title", { ascending: false })
      .lt("title", project.title)
      .limit(1)
      .single();

    if (error || !previousProject.area[0]) {
      previousProject = undefined;
    }

    var { data: nextProject, error } = await client
      .from("project")
      .select("id, title, area!inner (id, name)")
      .eq("area.name", area)
      .order("title", { ascending: true })
      .gt("title", project.title)
      .limit(1)
      .single();

    if (error || !nextProject.area[0]) {
      nextProject = undefined;
    }

    return { project, previousProject, nextProject };
  }
});
