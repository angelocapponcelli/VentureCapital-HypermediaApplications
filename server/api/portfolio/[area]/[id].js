import { serverSupabaseClient } from "#supabase/server";

/*
 *   This page is responsible for taking project data for the portfolio pages (which are of 3 types: 'All projects',
 *   'Most relevant projects', '[area] projects'; for the individual project page; and for the people page for data
 *   regarding related projects. Different data are returned depending on the parameters received.
 *
 *   The parameters received are 'id' and 'area'
 */
export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);

  // Parameter parsing
  const id = event.context.params.id;
  const area = event.context.params.area.replaceAll("%20", " ");

  //Case recognition according to parameters:
  /*  Case 1: id = undefined, area = [area.name]
   *   Get the data for the portfolio page of a specific area
   *   Returns data on projects in a specific area useful for the overview in portfolio cards
   */
  if (id == "undefined") {
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
      //If there is at least one project
      if (projects.length > 0) {
        return projects;
      }
      //If there are no projects checks whether the area received as a parameter exists
      else {
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
    /*  Case 2: id = [specific project id], area = 'all'
     *  Get the data for the specific project page coming from the portfolio
     *  Returns data on project with the id equal to the one specified, and returns the data of the previous and next project
     */
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

      //If the project was not found it could mean that it does not exist so set the variable to undefined
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

      //If the project was not found it could mean that it does not exist so set the variable to undefined
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
    /*  Case 3: id = [specific project id], area = 'Most relevant projects'
     *  Get the data for the specific project page coming from the 'Most relevant projects' page
     *  Returns data on project with the id equal to the one specified, and returns the data of the previous and next project
     */
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

    //If the project was not found it could mean that it does not exist so set the variable to undefined
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

    //If the project was not found it could mean that it does not exist so set the variable to undefined
    if (error) {
      nextProject = undefined;
    }

    return { project, previousProject, nextProject };
  } else {
    /*  Case 4: id = [specific project id], area = '[area.name]'
     *  Get the data for the specific project page coming from a specific area portfolio page
     *  Returns data on project with the id equal to the one specified, and returns the data of the previous and next project
     */
    var { data: project, error } = await client
      .from("project")
      .select(
        "id, title, overview, product, team, gallery, startup (id, name, headquarter, website), supervisor (id, full_name, position, image), area(id, name), gallery"
      )
      .eq("id", id)
      .limit(1)
      .single();

    if (error) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      });
    } else if (project.area.length == 0) {
      throw createError({
        statusCode: 400,
        statusMessage: "Project does not exist",
      });
    } else {
      let areas = project.area.map((a) => a.name);
      if (!areas.includes(area)) {
        throw createError({
          statusCode: 400,
          statusMessage: "Project not related to the area",
        });
      }
    }

    var { data: previousProject, error } = await client
      .from("project")
      .select("id, title, area!inner (id, name)")
      .eq("area.name", area)
      .order("title", { ascending: false })
      .lt("title", project.title)
      .limit(1)
      .single();

    //If the project was not found it could mean that it does not exist so set the variable to undefined
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

    //If the project was not found it could mean that it does not exist so set the variable to undefined
    if (error || !nextProject.area[0]) {
      nextProject = undefined;
    }

    return { project, previousProject, nextProject };
  }
});
