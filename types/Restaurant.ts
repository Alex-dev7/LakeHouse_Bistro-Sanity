export type Restaurant = {
    _id: string;
    address: string;
    phone: string;
    email: string;
    reserve: string;
    social: Array<{
        facebook: string;
        instagram: string;
        tiktok: string;
    }>
}