const precios = [101, 22, 50, 5, 75, 80, 42, 33, 55, 100];

function calcIva(lista) {
    let lista2 = [];
    for (const valor of lista) {
        // Calculamos el valor con IVA y lo redondeamos a 2 decimales
        const nuevo = (valor * 1.21).toFixed(2);
        lista2.push(nuevo); // Agregamos el valor a la nueva lista
    }
    return lista2;
}

const listaNueva = calcIva(precios);

// Imprimimos cada precio individualmente con un mensaje claro
console.log(`Los precios con IVA incluido son:`);
listaNueva.forEach((precio, index) => {
    console.log(`Producto ${index + 1}: $${precio}`);
});