const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require('uuid');

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),      
      faker.internet.password(),
    ]
};

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Adityasd672@'
});



// HOME ROUTE
app.get("/", (req,res) => {
    let q = `SELECT count(*) FROM user`;
    try {
    connection.query(q, (err, result) => {
            if(err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", {count});
        }
    )
    
} catch (error) {
    console.log(error);
    res.send("some error in database")
}
});

// Show Route

app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
                if(err) throw err;
                res.render("showusers.ejs", {users})
            }
        )
        
    } catch (error) {
        console.log(error);
        res.send("some error in database")
    }
});


app.listen("8080", () => {
    console.log('server is listening to port 8080');
    
})

// Edit Route
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
                if(err) throw err;
                let user = result[0];
                res.render("edit.ejs", {user});
            }
        )
        
    } catch (error) {
        console.log(error);
        res.send("some error in database")
    }
})

// UPDATE (DB) Route

app.patch("/user/:id", (req,res) => {
    let {id} = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
                if(err) throw err;
                let user = result[0];
                if(formPass != user.password){
                    res.send("!Wrong password");
                }
                else{
                    let q2 = `UPDATE user SET username= '${newUsername}' WHERE id = '${id}'`;
                    connection.query(q2, (err,result) => {
                        if(err) throw err;
                        res.redirect("/user");
                    })
                }

            }
        )
        
    } catch (error) {
        console.log(error);
        res.send("some error in database")
    }
})

app.get("/user/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/user", (req, res) => {
    let {username, email, password} = req.body;
    let id = uuidv4();

    let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?,?) ";
    let user = [id, username, email, password];

    
    connection.query(q, user, (err, result) => {
        if (err) {
            // Check for duplicate email error (MySQL error code 1062)
            if (err.code === "ER_DUP_ENTRY") {
                console.error("Duplicate entry error:", err);
                res.status(400).send("Error: Email already exists. Please use a different email.");
                return;
            }

            // Other database errors
            console.error("Database error:", err);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.redirect("/user");
        }
    )
    


    
})

app.delete("/user/:id", (req, res) => {
    let {id} = req.params;

    let q = `DELETE FROM user WHERE id = ?`;

    try {
    connection.query(q,[id], (err, result) => {
            if(err) throw err;
            res.redirect("/user");
        }
    )
    
} catch (error) {
    console.log(error);
    
}



    

})




// try {
//     connection.query(q, [data], (err, result) => {
//             if(err) throw err;
//             console.log(result);
//         }
//     )
    
// } catch (error) {
//     console.log(error);
    
// }

// connection.end();





  