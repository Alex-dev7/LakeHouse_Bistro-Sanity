import { PortableTextBlock } from "sanity";

export type Event  = {
    title: string;
    content: PortableTextBlock[];
    image: string;
}