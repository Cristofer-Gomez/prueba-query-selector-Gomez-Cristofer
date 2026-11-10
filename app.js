console.log("El titulo de esta pagina es:", document.title);

let titulo = document.querySelector("#titulo-principal");

console.log(titulo);

//extraer y editar propiedades
console.log(titulo.textContent);
titulo.textContent = "Editado desde JavaScript";
titulo.style.color = "peru";
titulo.style.backgroundColor = "green";
titulo.style.fontSize = "1.5rem";

titulo.textContent = titulo.textContent + "texto nuevo";
titulo.textContent += "Otro texto nuevo";

let parrafo = document.querySelector("#parrafo-principal");
parrafo.innerHTML += "Nuevo texto <i> pero este texto esta en cursiva";

let caja1 = document.querySelector("#caja1");

caja1.innerHTML += "<p> Producto muestra: $1200 </p>";

/*
let presupuesto = prompt("Introduce tu presupuesto:");

if(presupuesto >= 1200) {
    caja1.classList.add("aprobado");
} else {
    caja1.classList.add("no-aprobado");
}
*/

const bodega = [
    {nombre:"Producto 1", precio:100, stock:3},
    {nombre:"Producto 2", precio:100, stock:4},
    {nombre:"Producto 3", precio:100, stock:0},
    {nombre:"Producto 4", precio:100, stock:2},
    {nombre:"Producto 5", precio:100, stock:1}
];

let caja = document.querySelector(".caja-vacia");

bodega.forEach( item => {

    let claseColor = ""

    if(item.stock > 0) {
        claseColor = "aprobado";
    } else {
        claseColor = "no-aprobado";
    }

    caja.innerHTML +=  `
    <div class = "caja-producto" ${claseColor}>
    <h2> ${item.nombre}</h2>
    <p> Precio: $${item.precio}</P>
    <p> Stock: ${item.stock}</P>
    </div>
    `;

});