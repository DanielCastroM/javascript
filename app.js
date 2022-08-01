debugger

let nota = parseInt(prompt("Ingresar la nota"))

if (nota > 10 && nota < 20) {

    alert("Estas aprobado");

} else if (nota > 17 && nota < 20) {

    alert("Alumno destacado");

} else if (nota < 10 && nota < 20) {
    alert("Estas desaprobado");

} else {
    alert("Ingresar nota correctamente");

}