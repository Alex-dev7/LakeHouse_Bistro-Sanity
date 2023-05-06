const menu = {
    name: 'menu',
    title: 'Menu',
    type: 'document',

    fields: [
         {
            name: 'title',
            title: 'Title', 
            type: 'string',
            
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ]
}

export default menu