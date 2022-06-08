const express = require('express')
const app = express()
const PORT = 9000
const cors = require('cors')
const { response } = require('express')

app.use(cors())

const visitBeach = {
    "will rogers": {
        'dog': 'No',
        'amenities': 'Bike Trail',
        'pier': 'No',
        'pit': 'No',
        'cleaniness': 'Clean',
        'grade': 'A'
    },
    "santa monica": {
        'dog': 'No',
        'amenities': 'Restaurants, Games, Rides',
        'pier': 'Yes',
        'pit': 'No',
        'cleaniness': 'Poor',
        'grade': 'F'
    },
    "venice": {
        'dog': 'No',
        'amenities': 'Outdoor Gym, Skate Park',
        'pier': 'Yes',
        'pit': 'No',
        'cleaniness': 'Fair',
        'grade': 'C'
    },
    "marina del rey": {
        'dog': 'No',
        'amenities': 'Barbecure Grills, Playground',
        'pier': 'No',
        'pit': 'No',
        'cleaniness': 'Poor',
        'grade': 'D'
    },
    "dockwheiler": {
        'dog': 'No',
        'amenities': 'RV parking, Youth Center, and Volleyball courts',
        'pier': 'No',
        'pit': 'Yes',
        'cleaniness': 'Clean',
        'grade': 'A'
    },
    "manhattan": {
        'dog': 'No',
        'amenities': 'Playground',
        'pier': 'Yes',
        'pit': 'No',
        'cleaniness': 'Clean',
        'grade': 'A'
    },
    "hermosa": {
        'dog': 'No',
        'amenities': 'Volleyball courts, tennis courts',
        'pier': 'Yes',
        'pit': 'No',
        'cleaniness': 'Clean',
        'grade': 'A'
    },
    "redondo": {
        'dog': 'No',
        'amenities': 'Restaurants and Shops on the Pier',
        'pier': 'Yes',
        'pit': 'No',
        'cleaniness': 'Clean',
        'grade': 'A'
    },
}



app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:beachName', (request, response) => {
    const beachNames = request.params.beachName.toLowerCase()
    if(visitBeach[beachNames]) { 
        response.json(visitBeach[beachNames]) //you put in a rapper we have you will get the object returned
    }else {
        response.json(visitBeach['redondo']) 
    }

})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The Server is running on port ${PORT}! You better go catch it`)
})