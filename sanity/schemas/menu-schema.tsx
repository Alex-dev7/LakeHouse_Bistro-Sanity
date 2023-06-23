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
            name: 'file',
            title: 'File',
            type: 'file',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        }
    ]
}

export default menu