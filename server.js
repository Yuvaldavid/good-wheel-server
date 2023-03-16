
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 2500

app.use(bodyParser.json)

const data = 
[
    {
        id:"0",
        driver:"Ed shiran",
        passenger: "Shaul Shauli",
        from: "Ben Zion St.12 Tel Aviv",
        to: "Weizmann St. 6 Ramat Gan",
        status: "Pending"
    },

    {
        id:"1",
        driver:"Miky Jannet",
        passenger: "Simcha Stern",
        from: "Ben Zion St.12 Tel Aviv",
        to: "Weizmann St. 6 Ramat Gan",
        status: "Rolling"

    },

    {
        id:"2",
        driver:"Tamir Abutbul",
        passenger: "Bar Cohen",
        from: "Ben Zion St.12 Tel Aviv",
        to: "Weizmann St. 6 Ramat Gan",
        status: "Complete"
    },

    {
        id:"3",
        driver:"Adi Unger",
        passenger: "Shaul Hanavi",
        from: "Ben Zion St.12 Tel Aviv",
        to: "Weizmann St. 6 Ramat Gan",
        status: "Pending"
    },

    {
        id:"4",
        driver:"Yuval David",
        passenger: "Israel Israeli ",
        from: "Ben Zion St.12 Tel Aviv",
        to: "Weizmann St. 6 Ramat Gan",
        status: "Rolling"
    },

    
    {
        id:"5",
        driver:"Noa Kirel",
        passenger: "Yona Shauli",
        from: "Ben Zion St.12 Tel Aviv",
        to: "Weizmann St. 6 Ramat Gan",
        status: "Complete"
    }
]



function updateStatus(obj) {
    const index = data.findIndex(object =>  object.id === obj.id )
    return index  
}

  

app.post('/update-status', (req, res) => {
    req.send( 
        {
            id:"5",
            driver:"Noa Kirel",
            passenger: "Yona Shauli",
            from: "Ben Zion St.12 Tel Aviv",
            to: "Weizmann St. 6 Ramat Gan",
            status: "Complete"
        })
    
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})