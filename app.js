let welcome = alert("Bienvenidos Transportes Ecobus!");
let servicios = parseInt(prompt("Que Tipo de transporte necesita?: 1-Bus, 2-MiniBus, 3-Bus dos Pisos, 4-Bus Large"));
while (servicios != 1 && servicios != 2 && servicios != 3 && servicios != 4) {
    servicios = parseInt(prompt("Por favor escoja una opción válida. Ingresar solamente el número de la opción: 1-Bus, 2-MiniBus, 3-Bus dos Pisos, 4-Bus Large"));
}

let preciosMiniBus = 800;
let preciosMiniBus2 = 1000;
let preciosBus = 1400;
let preciosBus2 = 1600;
let preciosBusLarge = 2000;
let preciosBusLarge2 = 2300;
let preciosBusDosPisos = 2500;
let preciosBusDosPisos2 = 2800;

serviciosBuses();


function serviciosBuses() {

    switch (servicios) {
        case 1:
            let bus = parseInt(prompt("Que tipo de servicio necesita?(Ingresa solamente el número de la opción): 1-Transporte de Personal, 2-Servicios Turístico"));
            while (bus != 1 && bus != 2) {
                bus = parseInt(prompt("Que tipo de servicio necesita?(Ingresa solamente el número de la opción): 1-Transporte de Personal, 2-Servicios Turístico"));
            }
            if (bus === 1) {
                alert("El Valor del servicio es de" + preciosBus);
                let busTotal = parseInt(prompt("Cuantas unidades va a necesitar?"));
                let total = busTotal * preciosBus
                alert("El Valor total del servicio sería: " + total)


            } else if (bus === 2) {
                alert("El Valor del servicio es de" + preciosBus2);
                let busTotal = parseInt(prompt("Cuantas unidades va a necesitar?"));
                let total = busTotal * preciosBus2
                alert("El Valor total del servicio sería: " + total)

            }

            break;
        case 2:

            let miniBus = parseInt(prompt("Que tipo de servicio necesita?(Ingresa solamente el número de la opción): 1-Transporte de Personal, 2-Servicios Turístico"));
            while (miniBus != 1 && miniBus != 2) {
                miniBus = parseInt(prompt("Que tipo de servicio necesita?(Ingresa solamente el número de la opción): 1-Transporte de Personal, 2-Servicios Turístico"));
            }
            if (miniBus === 1) {
                alert("El Valor del servicio es de" + preciosMiniBus);
                let busTotal = parseInt(prompt("Cuantas unidades va a necesitar?"));
                let total = busTotal * preciosMiniBus
                alert("El Valor total del servicio sería: " + total)


            } else if (miniBus === 2) {
                alert("El Valor del servicio es de" + preciosMiniBus2);
                let busTotal = parseInt(prompt("Cuantas unidades va a necesitar?"));
                let total = busTotal * preciosMiniBus2
                alert("El Valor total del servicio sería: " + total)

            }

            break;

        case 3:

            let busDosPisos = parseInt(prompt("Que tipo de servicio necesita?(Ingresa solamente el número de la opción): 1-Transporte de Personal, 2-Servicios Turístico"));
            while (busDosPisos != 1 && busDosPisos != 2) {
                busDosPisos = parseInt(prompt("Que tipo de servicio necesita?(Ingresa solamente el número de la opción): 1-Transporte de Personal, 2-Servicios Turístico"));
            }
            if (busDosPisos === 1) {
                alert("El Valor del servicio es de" + preciosBusDosPisos);
                let busTotal = parseInt(prompt("Cuantas unidades va a necesitar?"));
                let total = busTotal * preciosBusDosPisos
                alert("El Valor total del servicio sería: " + total)


            } else if (busDosPisos === 2) {
                alert("El Valor del servicio es de" + preciosBusDosPisos2);
                let busTotal = parseInt(prompt("Cuantas unidades va a necesitar?"));
                let total = busTotal * preciosBusDosPisos2
                alert("El Valor total del servicio sería: " + total)

            }

            break;
        case 4:

            let busLarge = parseInt(prompt("Que tipo de servicio necesita?(Ingresa solamente el número de la opción): 1-Transporte de Personal, 2-Servicios Turístico"));
            while (busLarge != 1 && busLarge != 2) {
                busLarge = parseInt(prompt("Que tipo de servicio necesita?(Ingresa solamente el número de la opción): 1-Transporte de Personal, 2-Servicios Turístico"));
            }
            if (busLarge === 1) {
                alert("El Valor del servicio es de" + preciosBusLarge);
                let busTotal = parseInt(prompt("Cuantas unidades va a necesitar?"));
                let total = busTotal * preciosBusLarge
                alert("El Valor total del servicio sería: " + total)


            } else if (busLarge === 2) {
                alert("El Valor del servicio es de" + preciosBusLarge2);
                let busTotal = parseInt(prompt("Cuantas unidades va a necesitar?"));
                let total = busTotal * preciosBusLarge2
                alert("El Valor total del servicio sería: " + total)

            }

            break;
    }

}