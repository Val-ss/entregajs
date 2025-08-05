
// Identificacion de los elmentos que voy a manipular
const dato = document.getElementById("dato") // input - acá localizo el elemento en el DOM para poder usarlo luego
const boton = document.getElementById("boton"); // boton - acá localizo el elemento en el DOM para poder usarlo luego


const gastos = []; // array para acumular los datos



// Agrego eventos a los elementos. Este evento es para que el programa sepa cuando el usuario hizo click en el boton.
// dentro coloco el tipo de evento y una funcion con el codigo que quiero ejecutar cuando hago click.


// evento para escuchar el click del boton.Agregar gasto
boton.addEventListener("click", (event) => {
    event.preventDefault();
    const valor = parseFloat(dato.value); // captura y convierte el valor

    if(!isNaN(valor)) {                         // validar que sí sea un numero
        gastos.push(valor)                      // voy agregando los valores al array
        localStorage.setItem("gastos",JSON.stringify(gastos));
        actualizarLista();  // muestro la lista actualizada
        dato.value = ""; // limpio campo de entrada una vez que envie el dato
    } else {
        alert("Ingresa un numero válido");      // si me da un error
    }

});


// creo una lista para poder ver los gastos agregados
// Actualizar la lista 

const listaGastos = document.getElementById("lista-gastos");

function actualizarLista() {
    listaGastos.innerHTML = ""; // vaciar la lista
    
    for(let i = 0; i<gastos.length; i++){
        const li = document.createElement("li");
        li.textContent = `Día ${i + 1}: $${gastos[i].toFixed(2)}`;
        listaGastos.appendChild(li); // agrego el li al ul
    }
}


// guardo y actualizo
const gastosGuardados = JSON.parse(localStorage.getItem("gastos"));
if(gastosGuardados) {
    gastos.push(...gastosGuardados);
    actualizarLista();
}


// Calcular total
const botonCalculoGastos = document.getElementById("botonCalcular");
const resultado = document.getElementById("resultado");


botonCalculoGastos.addEventListener("click", (event) => {
    event.preventDefault();

    let total = 0;
    
    for(let i = 0; i <gastos.length; i++){
       total += gastos[i]; // a total le sumo gastos[i] y lo actualizo
    } 


    const presupuesto = 10000; // presupuesto maximo
    resultado.textContent = `El resultado total es: $${total}` // calculo la suma total del gasto diario


    if(total <= presupuesto){  // condicional para evaluar si se pasa de presupuesto
        resultado.textContent = `Bien! No pasaste tu presupuesto, el total es $${total}`
    } else {
        const diferencia = total - presupuesto;
        resultado.textContent = `Cuidado! Pasaste tu presupuesto por $${diferencia}, el total es: $${total}`// uso textContent para modificar el conetnido del nodo
    }
});


//Borrar lista
// creo una funcion ny un boton para borrar la lista
const botonBorrar = document.getElementById("botonBorrar");

botonBorrar.addEventListener("click", () => { // evento llamador que con un click en el boton se desencadena la accion de borrar los datos
    gastos.length = 0; 
    localStorage.removeItem("gastos"); //  También borra del LocalStorage
    listaGastos.innerHTML = "";
    resultado.textContent = "";
});
