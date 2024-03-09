const json_server=require('json-server')

const cors=require('cors')


// to create json server
const bookApp=json_server.create()

// create a middleware for json-js data conversion
const middleware=json_server.defaults()

// create route for connect json file with main file(index.js)
const route=json_server.router('book.json')

// apply cors
bookApp.use(cors())

// apply middleware as application specific middleware
bookApp.use(middleware)

// apply route
bookApp.use(route)

const PORT=8000
bookApp.listen(PORT,()=>{
    console.log(`Book server start at ${PORT}`);
})