const express=require ("express");
const app= express();
const path= require("path");


app.listen (process.env.PORT || 3000, function () {
    console.log ('Servidor corriendo en el puerto 3000');
});

app.use(express.static("public"));
app.use(express.static("views"));

app.get ("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/home.html"));
});
app.get ("/formulario.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/formulario.html"));
});
app.get ("/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/login.html"));
});

