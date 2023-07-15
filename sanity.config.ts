import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas"




const config = defineConfig({

    projectId: 'yq1bqh12',
    dataset: 'production',
    title: "LakeHouse Bistro",
    apiVersion: "2023-04-17",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }

})

export default config

