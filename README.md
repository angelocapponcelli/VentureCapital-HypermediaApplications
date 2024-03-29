Link to the website: https://venture-capital.vercel.app/

# Venture capital website - WAMM

## Preliminary steps
As usual, the first things to do are:
- moving inside the folder with the terminal (or opening the project with VSCode) and then using:

      npm install

- To run the project you have to use:

      npm run dev

    or

      npm run dev -- -o
    
    to automatically open your project in a new tab of your browser.

## Configuration
To make the project work on GH-Pages there are a few steps to do:
- install gh-pages

      npm install @nuxtjs/supabase --save-dev

- add the module to the nuxt.config.ts file:

      export default defineNuxtConfig({
        modules: ['@nuxtjs/supabase'],
      })

- add SUPABASE_URL and SUPABASE_KEY to the .env (for local use):

      SUPABASE_URL="<Supabase URL>"
      SUPABASE_KEY="<Supabase API Key>"

## Deployment
Vercel is connected to your repository. Any time you push something on the main/master branch, Vercel will automatically retrieve the project, build it and deploy it.
This is why it's better to have two branches:
- one for deployment
- one for development

In general, the command to build the "ready to deploy" project is:
   
    npm run build
