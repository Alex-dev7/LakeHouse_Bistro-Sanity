const gallery = {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',

    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
         {
            name: 'caption',
            title: 'Caption', 
            type: 'string',
            
        }
        
    ]
}

export default gallery