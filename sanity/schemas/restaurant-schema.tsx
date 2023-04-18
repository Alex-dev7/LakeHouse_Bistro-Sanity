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
            name: 'social',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    name: 'facebook',
                    title: 'Facebook URL',
                    type: 'url',
                },
                {
                    name: 'tiktok',
                    title: 'TikTok URL',
                    type: 'url',
                },
                {
                    name: 'instagram',
                    title: 'Instagram URL',
                    type: 'url',
                }
            ]
        }
    ]
}

export default restaurant