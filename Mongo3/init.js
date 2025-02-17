const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

const allChats = [{
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "preeti",
        msg: "teach me JS callbacks",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "send me your maths notes",
        created_at: new Date()
    },
    {
        from: "amit",
        to: "manpreet",
        msg: "lalalallala",
        created_at: new Date()
    },
    {
        from: "preeti",
        to: "neha",
        msg: "NOOOOOOOOOOOOOOOOOOO",
        created_at: new Date()
    },
    {
        from: "lucifer",
        to: "babaAditya",
        msg: "GTA 5",
        created_at: new Date()
    },

];

Chat.insertMany(allChats);


