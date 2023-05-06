const event = {
    name: 'event',
    title: 'Event',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        }
    ]
}

export default event