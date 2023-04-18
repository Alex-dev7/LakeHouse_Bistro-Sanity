const hours = {
    name: 'hours',
    title: 'Hours of Operation',
    type: 'document',

    fields: [
        {
           name: 'weekday',
           title: 'Weekday',
           type: 'string', 
        },
        {
            name: 'open',
            title: 'Opening Time',
            type: 'string', 
        },
        {
            name: 'close',
            title: 'Closing Time',
            type: 'string', 
         }
    ]
}

export default hours