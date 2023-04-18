import { createClient, groq } from "next-sanity";

export async function getRestaurantInfo() {
    const client = createClient({
        projectId: 'yq1bqh12',
        dataset: 'production',
        apiVersion: "2023-04-17",
    })

    return client.fetch(
        groq`*[_type == "restaurant"]{
            _id,
            address,
            phone,
            email,
            reserve,
            social
        }`
    )

}