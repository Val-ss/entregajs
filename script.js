function pedirGasto() {
    let gastos = [];
    for(let i = 0; i < 7 ; i++) {
        let ingreso = parseFloat(prompt(`Ingresá tu gasto del día: ${i+ 1 }`));
        if (!isNaN(ingreso)) {
            gastos.push(ingreso);
        } else  {
            alert("Ingresa un valor válido")
        }
    }
    alert("Gracias por ingresar los datos!")
    return gastos;
}



function calcularGastos(gastos) {
    let total = 0;
    for (let i = 0; i < gastos.length; i++){
        total += gastos[i];

    }
    alert(`El total de los gastos semanales es: $ ${total}`)
    return total;
}

function mostrarResumen (total) {
    if (total < 10000) {
        alert ("Muy bien! No pasaste el presupuesto!")
    } else {
        alert("Cuidado! te pasaste del presupuesto!")
    }
}

let gastoSemana = pedirGasto();
let totalGasto = calcularGastos(gastoSemana);
mostrarResumen(totalGasto);


