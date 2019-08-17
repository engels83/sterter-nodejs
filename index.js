/*console.log("Hola desde la navaja suiza");
console.table([1,2,4,"hola"]);*/


//import
const suma = require("./modulos/suma");
const resta = require("./modulos/resta");
const multiplicacion = require("./modulos/multiplicacion");
const division = require("./modulos/division");
const path = require("path");
const bodyParser = require("body-parser");

/*console.log(suma(50, 60));
console.log(resta(80, 60));
console.log(multiplicacion(50, 60));
console.log(division(500, 50));*/

// 1. primer paso importar la libreria express
const express = require("express");

// 2. instanciar un objeto de tipo server / aplicacion a partir de express
const app = express();

// 3. declarar una variable que guard eel puerto
const port = 8080;


// establecer un midleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// 4. crear una ruta http (opcional)
app.get("/",(req,resp)=> {
    //resp.send("Hola Mundo");
    resp.sendFile(path.join(__dirname,"./views/index.html"));
});

app.get("/suma/:numeroA/:numeroB", (req,res)=>{//(ruta, callback function)
    console.log(req.params.numeroA);

    //get parametros
    let numA= parseFloat(req.params.numeroA);
    let numB = parseFloat(req.params.numeroB);

    //calcula la suma
    let result = suma(numA,numB);
    
    //console.log(result);


    //envia el response status code: 200 y data en json

    res.status(200).json(result);



});

app.post("/sumar",(req, res)=>{
    console.log(req.body.a);
    console.log(req.body.b);

    let a= parseFloat(req.body.a);
    let b = parseFloat(req.body.b);

    let result2= suma(a,b);
    res.status(200).json(result2);


});
// 5. inicializar el listener del servidor

app.listen(port,()=>{
    console.log("Servidor inicializado en http://localhost:"+port);

});