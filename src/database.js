/* eslint-disable no-undef */
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection(
{user : "root",
host: "localhost",
password: "",
database:"meeting"
}
)

app.post('/register',(req,res)=>
{
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    con.query("INSERT INTO userlog(email,name,password)Values(?,?,?)", (email,username,password),(err,result)=>{
        if(result)
        {
            res.send(result);
        }
        else
        {
            res.send("incrroct");
        }
    })
}
)

app.post('/login',(req,res)=>
{
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    con.query("Select * FROM userlog WHERE username = ? AND PASSWORD = ? ",[username,password],(err,result)=>{
        if(err)
        {
            req.setEncoding({err:err});
        }
        else if(result.lenght > 0 )
        {
            res.send(result);
        }
        else
        {
            res.send("incrroct");
        }
    })
}
)
app.listen(3001,()=>{
    console.log("runing beckend")
})

export default database;
