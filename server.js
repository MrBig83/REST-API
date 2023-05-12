//const http = require("http");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");
//const router = express.Router();

app.listen(port, () => console.log("Testet lyssnar på localhost:3000"));


//Verb

app.get("/", (req, res) =>{
        fs.readFile("products.json", function(err, data){
            if(err){
                console.log(err);
            }
            const products = JSON.parse(data)
            res.send(products)
            return;
        })    

    });


app.post("/", (req, res) => {
    res.status(201).json({
        message: "POST is done"
    })
})

app.patch("/:productID", (req, res) => {
    res.status(200).json({
        message: "Uppdated product!"
    });
});

app.delete("/:productID", (req, res) => {
    res.status(200).json({
        message: "Deleted product!"
    });
});


//Express static -> html filer i en public-mapp. 