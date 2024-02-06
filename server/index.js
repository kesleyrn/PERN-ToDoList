        const express = require("express");
        const app = express();
        const cors = require("cors");
        const pool = ("./db");

        // middleware
        app.use(cors());
        app.use(express.json());

        //Routes

        //create todo

        app.post("./todo",async (req,res) =>{
            try {
               const { description } = req.body;
               const newTodo =await pool.query(
                "INSERT INTO todo (description) VALUES ($1) RETURNING *",
                 [ description ]
               );
              res.json(newTodo.rows[0]);
            } catch (error) {
                console.error(err.message);
            }
        })

        //get all  todos

        //update a todo

        //delete a todo

        app.listen(5000 ,() =>{
            console.log ("server has started on port 5000")
        })