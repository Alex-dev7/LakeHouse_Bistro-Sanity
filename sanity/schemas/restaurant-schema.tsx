const restaurant = {

    name: 'restaurant',
    title: 'Restaurant',
    type: 'document',

    fields: [
        {
            name: 'address',
            title: 'Address',
            type: 'string',

        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string', 
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'reserve',
            title: 'Reserve URL',
            type: 'url',   
        },
        {
            name: 'facebook',
            title: 'Facebook',
            type: 'url',
        },
        {
            name: 'instagram',
            title: 'Instagram',
            type: 'url',
        },
        {
            name: 'tiktok',
            title: 'TikTok',
            type: 'url',
        },

    ]
}

export default restaurant

