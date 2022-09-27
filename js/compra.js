const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');


cargarEventos();

function cargarEventos() {
    document.getElementById('DOMContentLoaded', compra.leerLocalStorageCompra());
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });
    compra.calcularTotal();
    procesarCompraBtn.addEventListener('click', procesarCompra);

}

function procesarCompra(e) {
    e.preventDefault();

    if (compra.obtenerProductosLocalStorage().length === 0) {

        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'No hay productos, selecciona alguno',
            timer: 1000,
            showConfirmButton: false
        }).then(function() {
            window.location = "index.html";
        });

    } else if (cliente.value === '' || correo.value === '') {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Ingresar campos requeridos',
            timer: 1000,
            showConfirmButton: false

        });

    } else {
        const cargandoGift = document.querySelector('#cargando');
        cargandoGift.style.display = 'block';

        const enviado = document.createElement('img');
        enviado.src = 'recursos/mail.gif';
        enviado.style.display = 'block';
        enviado.width = '150';

        setTimeout(() => {
            cargandoGift.style.display = 'none';
            document.querySelector('#loaders').appendChild(enviado);
            setTimeout(() => {
                enviado.remove();
                compra.vaciarLocalStorage();
                window.location = "index.html";
            }, 2000);
        }, 3000);

    }
}