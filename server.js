const { SSL_OP_CISCO_ANYCONNECT } = require('constants');
const http = require('http');
const app = require('./app')
require('dotenv').config();
const sequelize = require('./connection/database')
const port = process.env.PORT | process.env.PORT_ACCESS

app.set(port)
const server = http.createServer(app);

//--------check connection------
sequelize.authenticate()
.then(()=>{
    console.log('connection to database success!')
})
.catch((err)=>{
    console.log('failed connection: '+ err)
})
    



server.listen(port, ()=>{
    console.log('server listening on port: '+port)
})