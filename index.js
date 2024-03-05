var express = require('express')

const path = require('path')

const app = express()

const publicDrectoryPath = path.join(__dirname, 'public')

app.use(express.static(publicDrectoryPath))

app.listen(5000, ()=> {
	console.log('Server is up on port 5000')
})