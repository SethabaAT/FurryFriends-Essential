//Our node js server

const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bcrypt = require('bcrypt');
const port = 3000;

const app = express();


//Create connection
const db = mysql.createConnection({
    host:"localhost",
    user:"your_mysql_username",
    password:"your_mysql_password",
    database:"FurryFriends"    
});

//Connect
db.connect(err=>{
    if(err){
        throw err;
    }
    console.log("Connected to the database");
})

// Parse JSON data from the request body
app.use(express.urlencoded({ extended: true }));


// Set the path to the frontend's public directory
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'public')));

//The first page it will render in
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'public', 'index.html'));
});

// Register data
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    console.log('Received form data:', req.body);

    const query = 'INSERT INTO Users(Name, Email, Password) VALUES (?, ?, ?)';

    db.query(query, [username, email, password], (err, result) => {
        if (err) {
            console.error('Registration failed:', err);
            res.status(500).send('Registration failed');
        } else {
            console.log('Registration successful');
            res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'public', 'index2.html'));
        }
    });
});

//Handle login
app.post('/Login',(req,res)=>{
    const {email,password} = req.body;

    const query = 'SELECT * FROM Users Where Email = ?';

    db.query(query,[email],async (err,result)=>{
        if(err || result.length == 0){
            console.err('Login failed');
        }
        else{
            const user = result[0];//First value with the email

            if(user.Password === password){
                console.log('Login Succesful');
                res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'public', 'index2.html'));
            }else{
                console.error("Login failed");
                res.status(401).send("Login failed");
            }
        }
    })
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
