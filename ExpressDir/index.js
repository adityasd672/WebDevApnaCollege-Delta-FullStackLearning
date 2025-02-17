const express = require("express");
const app = express();

// console.dir(app);

let port = 8080; // 3000
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);    
});

app.get('/', (req, res) =>{
    res.send("Hello I am root")
})

app.get('/:username/:id', (req,res) =>{
    let {username, id} = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}</h1>`
    res.send(htmlStr);
    
})

app.get("/search", (req, res) =>{
    let { q} = req.query;
    if(!q){
        res.send("<h1> nothing searched </h1>")
    }
    res.send(`<h1>search results for query: ${q}</h1>`)
    
})

// app.use((req,res) =>{
//     // console.log(req);
    
//     console.log("new incoming request"); 
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>"
//     res.send(code); 
// })