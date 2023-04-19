import { createClient, groq } from "next-sanity";
import clientConfig  from "./config/client-config"
import { Restaurant } from "@/types/Restaurant";


// fetch restaurant information
export async function getRestaurantInfo(): Promise<Restaurant[]> {

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

