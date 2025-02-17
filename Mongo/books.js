const mongoose = require('mongoose');

main()
.then(() => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,  
        maxLength: 20   
    },
    author: {
        type: String
    },
    price: {
        type: Number, 
        min: [1,"price is too loww for Amaozon book selling"]
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String]
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("674c07c309127b2f68a29d02", {price: -100}, {runValidators: true}).then(
    (res)=> {
        console.log(res);
        
    }
)
.catch((err)=>{
    console.log(err.errors.price.properties.message);
    
})

// let book1 = new Book({
//     title: "Marvel Comics v2",
//     price: "500",
//     genre: ["comics", "superheroes","fiction"]
// });

// book1.save().then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })