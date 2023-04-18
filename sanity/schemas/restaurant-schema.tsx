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
            type: 'object',
            name: 'social',
            fields: [
                {
                    name: 'facebook',
                    type: "url",
                },
                {
                    name: 'instagram',
                    type: "url",
                },
                {
                    name: 'tiktok',
                    type: "url",
                },
            ]
        }
    ]
}

export default restaurant

