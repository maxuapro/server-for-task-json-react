const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

const data = {
    data: [
        {
            name: "Plant",
            children: [
                {
                    name: "Tree",
                    children: [
                        {
                            name: "Oak",
                            children: []
                        }

                    ]
                },
                {
                    name: "Flower",
                    children: [
                        {
                            name: "Tulip",
                            children: []
                        },
                        {
                            name: "Rose",
                            children: []
                        }

                    ]
                },

            ]
        },
        {
            name: "Animal",
            children: [
                {
                    name: "Crustacean",
                    children: [
                        {
                            name: "Crab",
                            children: [
                                {
                                    name: "Spider-Crab",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "Shrimp",
                            children: []
                        }
                    ]
                }
            ]
        }
    ]
}


app.get('/', (req, res) => {
    res.json(data)
})

app.listen(port, () => console.log(`listening on ${port}`))