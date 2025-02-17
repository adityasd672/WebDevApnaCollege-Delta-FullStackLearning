const express = require("express");
const app = express();
const port = 8080;
const path = require("path")
const {v4 : uuidv4} = require("uuid");
const methodOverride = require("method-override");
const multer = require("multer");
const fs = require("fs");
const { error } = require("console");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: (req,file, cb ) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }    
});

const upload = multer({storage: storage});

app.use(express.urlencoded({extended : true}))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'))

let posts = [
    {
        id: uuidv4(),
        username: "adityasd5u2",
        imgSrc: "",
        caption: "live laugh code",
        comments: ["wow", "nice", "lol"]
    }
]

app.get("/posts", (req,res) => {
    res.render("index.ejs", {posts});
})

app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
})

app.post("/posts", upload.single("image"), (req,res) => {
    const {username, caption} = req.body;
    const imgSrc = `/uploads/${req.file.filename}`;

    posts.push({
        id: uuidv4(), 
        username, 
        imgSrc, 
        caption
    })

    res.redirect("/posts");
})

app.get("/posts/:id", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
})

app.get("/posts/:id/edit", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post})
})

app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newCaption = req.body.caption;
    let post = posts.find((p) => id === p.id);
    post.caption = newCaption;
    console.log(post);

    res.redirect("/posts");
    
})

app.delete("/posts/:id", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);

    if(post) {
        const imagePath = path.join(__dirname, "public", post.imgSrc);

        fs.unlink(imagePath, (err) => {
            if(err) {
                console.error("Failed to delete image: ", err);
            }else{
                console.log("Image deleted: ", imagePath);                
            }
        });

        posts = posts.filter((p) => p.id !== id);
    }

    res.redirect("/posts");
})



app.listen(port, () => {
    console.log(`listening to port : ${port}`);
})