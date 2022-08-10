 class Servicios1 {

     constructor(id, tipobus, precio) {
         this.id = id;
         this.tipobus = tipobus;
         this.precio = precio;

     }

 }

 class Servicios2 {

     constructor(id, tipobus, precio) {
         this.id = id;
         this.tipobus = tipobus;
         this.precio = precio;

     }

 }

 const servicios1 = []
 const servicios2 = []



 function servicioDeBuses() {

     let tipoServicio = parseInt(prompt("¿Que tipo de servicio necesita?(INGRESAR EL NÚMERO)"))
     while (tipoServicio != 1 && tipoServicio != 2) {
         tipoServicio = parseInt(prompt("¿Que tipo de servicio necesita?(INGRESAR EL NÚMERO)"))
     }

     if (tipoServicio === 1) {
         listadobuses()
         console.table(servicios1)
     } else {
         listadobuses()
         console.table(servicios2)
     }
 }


 function listadobuses() {
     servicios1.push(new Servicios1(1, "Bus", 1400));
     servicios1.push(new Servicios1(2, "MiniBus", 800));
     servicios1.push(new Servicios1(3, "BusDosPisos", 2500));
     servicios1.push(new Servicios1(4, "BusLarge", 2000));
     servicios2.push(new Servicios2(5, "Bus", 1600));
     servicios2.push(new Servicios2(6, "MiniBus", 1000));
     servicios2.push(new Servicios2(7, "BusDosPisos", 2800));
     servicios2.push(new Servicios2(8, "BusLarge", 2300));
 }



 servicioDeBuses();


 const carrito = []