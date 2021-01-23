const express = require('express')
const app = express()
const PORT = 3000




const characters = [
    {
        name:'Yoda', 
        role:'Jedi Master', 
        forcePoints:100000, 
        age:900, 
        avatar: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcontent.money.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fbaby-yoda-toys-for-sale-1163281433.jpg%3Fquality%3D60%26w%3D800&imgrefurl=https%3A%2F%2Fmoney.com%2Fbaby-yoda-toys-t-shirt-mandalorian-disney-plus%2F&tbnid=1GDQbHUyE91j4M&vet=12ahUKEwja4rrtvrLuAhXFE80KHegvCcwQMygFegUIARC_Ag..i&docid=Ne7hJ01yV8_PdM&w=800&h=533&q=yoda%27&ved=2ahUKEwja4rrtvrLuAhXFE80KHegvCcwQMygFegUIARC_Ag', 
        routeName:'yoda'
    }, 

    {
        name:'Luke Skywalker', 
        role:'Jedi Master', 
        forcePoints:100000, 
        age:40, 
        avatar: 'http://images.wikia.com/starwars/images/5/57/Luke_Skywalker_SWGTCG.jpg', 
        routeName:'lukeskywalker'
    }, 
    {
        name:'Princess Leai', 
        role:'General Princess', 
        forcePoints:100, 
        age:40, 
        avatar: 'https://tse3.explicit.bing.net/th?id=OIP.ZQbuQ4Un_EI04XFOLJjIKQHaHZ&pid=Api&P=0&w=300&h=300', 
        routeName:'princessleai'
    }

]

app.get('/', (req , res)=>{
    res.send('may the force be with you')
})


// api/characters - show all charcter data
app.get('/api/characters' , (req , res) => {
    res.json(characters)
})

//api/character


app.listen(PORT , ()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})