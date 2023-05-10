
import { createClient, groq } from "next-sanity";
import clientConfig  from "./config/client-config"
import { Restaurant } from "@/types/Restaurant";
import { About } from "@/types/About";
import { Hours } from "@/types/Hours";
import Gallery from "@/types/Gallery";
import  Menu from "@/types/Menu";
import { Event } from "@/types/Event";



// fetch restaurant information
export async function getRestaurantInfo(): Promise<Restaurant[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "restaurant"]{
            _id,
            address,
            phone,
            email,
            reserve,
            facebook,
            instagram,
            tiktok
        }`
    )
}

// fetch event information
export async function getEvent(): Promise<Event[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "event"]{
            title,
            content,
            "image": image.asset->url
        }`
    )
}

// fetch about information
export async function getAbout(): Promise<About[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "about"]{
            title,
            content,
            "image": image.asset->url
        }`
    )
}

// fetch the opening hours
export async function getOpeningInfo(): Promise<Hours[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "hours"]{
            day,
            open,
            close
        }`
    )
}

// get the images
export async function getGallery(): Promise<Gallery[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "gallery"]{
            "image": image.asset->url,
            caption,
        }`, {next: "no-cache"}
    )
}

// get the menu
export async function getMenu(): Promise<Menu[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "menu"]{
            title,
            "image": image.asset->url,
        }`
    )
}