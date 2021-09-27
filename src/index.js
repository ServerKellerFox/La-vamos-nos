const express = require('express');
const app = express();

app.listen(8080);

app.get("/couses", (req, res) => {
    return res.json([
        "Curso 1", "Curso 2 ", "Curso 3"
    ]);
});


app.post("/couses", (req, res)=>{
    return res.json(["Curso 1", "Curso 2 ", "Curso 3", "Curso 4"]);
});

app.put("/couses/:id", (req, res)=>{
    return res.json(["Curso 6", "Curso 2 ", "Curso 3", "Curso 4"]);
});

app.put("/couses/:id", (req, res)=>{
    return res.json(["Curso 1", "Curso 7 ", "Curso 3", "Curso 4"]);
})

app.delete("/couses/:id", (req, res) =>{
    return res.json(["Curso 1", "Curso 2 ", "Curso 4"]);

})