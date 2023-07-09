import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas"




const config = defineConfig({

    projectId: 'yq1bqh12',
    dataset: 'production',
    title: "LakeHouse Bistro",
    apiVersion: "2023-04-17",
    basePath: "/admin",
    plugins: [deskTool()
        
    //     dashboardTool({
    //     widgets: [
    //         netlifyWidget({
    //             title: 'LakeHouse Bistro',
    //             sites: [
    //               {
    //                 title: 'Sanity Studio',
    //                 apiId: 'b6f3806c-89b4-47fc-9618-b01837ef00cf',
    //                 buildHookId: '649e357179a9e31d369ee717',
    //                 name: 'lakehousebistro',
    //               },
    //               {
    //                 title: 'LakeHouse',
    //                 apiId: 'b6f3806c-89b4-47fc-9618-b01837ef00cf',
    //                 buildHookId: '649e357179a9e31d369ee717',
    //                 name: 'lakehousebistro',
    //                 url: 'https://lakehousebistro.com',
    //               }
    //             ]
    //         })
    //       ]
    // })
  ],
    schema: { types: schemas }

})

export default config

// deskTool(),