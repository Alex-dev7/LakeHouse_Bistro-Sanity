import { createClient, groq } from "next-sanity";
import clientConfig  from "./config/client-config"


// fetch restaurant information
export async function getRestaurantInfo() {

    return createClient(clientConfig).fetch(
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

