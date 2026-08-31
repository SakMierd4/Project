const anioCocina = document.querySelector("#anio-cocina");

anioCocina.textContent = new Date().getFullYear();


const platosPollo = [
    {
        nombrePlato: "Pollo a la Brasa",
        descripcionPlato: "Pollo asado acompañado de papas y ensalada.",
        precioPlato: 28000,
        imagenPlato: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80"
    },

    {
        nombrePlato: "Pollo Familiar",
        descripcionPlato: "Pollo completo ideal para compartir en familia.",
        precioPlato: 45000,
        imagenPlato: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80"
    },

    {
        nombrePlato: "Alitas BBQ",
        descripcionPlato: "Alitas de pollo acompañadas con salsa BBQ.",
        precioPlato: 22000,
        imagenPlato: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80"
    },

    {
        nombrePlato: "Combo Personal",
        descripcionPlato: "Pollo, papas, ensalada y bebida.",
        precioPlato: 20000,
        imagenPlato: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=600&q=80"
    }
];


const menuPollos = document.querySelector("#menu-pollos");

const buscarPollo = document.querySelector("#buscar-pollo");

const formularioPollo = document.querySelector("#formulario-pollo");

const mensajeCocina = document.querySelector("#mensaje-cocina");

let pedidoPollo = [];

let totalPollo = 0;


function mostrarPlatosPollo(listaPlatos) {

    menuPollos.textContent = "";

    listaPlatos.forEach(function(platoPollo) {

        const tarjetaPollo =
            document.createElement("article");

        tarjetaPollo.classList.add(
            "tarjeta-pollo"
        );


        const imagenPollo =
            document.createElement("img");

        imagenPollo.src =
            platoPollo.imagenPlato;

        imagenPollo.alt =
            "Imagen de " +
            platoPollo.nombrePlato;


        const informacionPollo =
            document.createElement("div");

        informacionPollo.classList.add(
            "informacion-pollo"
        );


        const nombrePlato =
            document.createElement("h3");

        nombrePlato.textContent =
            platoPollo.nombrePlato;


        const descripcionPlato =
            document.createElement("p");

        descripcionPlato.textContent =
            platoPollo.descripcionPlato;


        const precioPlato =
            document.createElement("p");

        precioPlato.classList.add(
            "precio-pollo"
        );

        precioPlato.textContent =
            "$" +
            platoPollo.precioPlato
                .toLocaleString("es-CO");


        const botonPollo =
            document.createElement("button");

        botonPollo.type = "button";

        botonPollo.textContent =
            "Agregar al pedido";

        botonPollo.classList.add(
            "boton",
            "boton-principal"
        );


        botonPollo.dataset.nombre =
            platoPollo.nombrePlato;

        botonPollo.dataset.precio =
            platoPollo.precioPlato;


        botonPollo.addEventListener(
            "click",
            function() {

                agregarPolloAlPedido(
                    platoPollo
                );

            }
        );


        informacionPollo.appendChild(
            nombrePlato
        );

        informacionPollo.appendChild(
            descripcionPlato
        );

        informacionPollo.appendChild(
            precioPlato
        );

        informacionPollo.appendChild(
            botonPollo
        );


        tarjetaPollo.appendChild(
            imagenPollo
        );

        tarjetaPollo.appendChild(
            informacionPollo
        );


        menuPollos.appendChild(
            tarjetaPollo
        );

    });
}


function agregarPolloAlPedido(platoPollo) {

    pedidoPollo.push(
        platoPollo
    );

    totalPollo =
        totalPollo +
        platoPollo.precioPlato;


    let listaPedidoCocina =
        document.querySelector(
            "#lista-pedido-cocina"
        );


    if (listaPedidoCocina === null) {

        const cajaPedido =
            document.createElement("article");

        cajaPedido.classList.add(
            "pedido-cocina"
        );


        const tituloPedido =
            document.createElement("h3");

        tituloPedido.textContent =
            "Mi pedido";


        listaPedidoCocina =
            document.createElement("ul");

        listaPedidoCocina.id =
            "lista-pedido-cocina";


        const totalPedidoPollo =
            document.createElement("p");

        totalPedidoPollo.id =
            "total-pedido-pollo";

        totalPedidoPollo.classList.add(
            "total-pollo"
        );


        cajaPedido.appendChild(
            tituloPedido
        );

        cajaPedido.appendChild(
            listaPedidoCocina
        );

        cajaPedido.appendChild(
            totalPedidoPollo
        );


        document
            .querySelector("#menu")
            .appendChild(
                cajaPedido
            );
    }


    const polloEnLista =
        document.createElement("li");

    polloEnLista.textContent =
        platoPollo.nombrePlato +
        " - $" +
        platoPollo.precioPlato
            .toLocaleString("es-CO");


    listaPedidoCocina.appendChild(
        polloEnLista
    );


    const totalPedidoPollo =
        document.querySelector(
            "#total-pedido-pollo"
        );

    totalPedidoPollo.textContent =
        "Total: $" +
        totalPollo
            .toLocaleString("es-CO");
}


buscarPollo.addEventListener(
    "input",
    function() {

        const textoPollo =
            buscarPollo.value.toLowerCase();


        const platosFiltrados =
            platosPollo.filter(
                function(platoPollo) {

                    return platoPollo.nombrePlato
                        .toLowerCase()
                        .includes(textoPollo);

                }
            );


        mostrarPlatosPollo(
            platosFiltrados
        );

    }
);


formularioPollo.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const nombreCliente =
            document.querySelector(
                "#nombre-cliente"
            ).value.trim();


        const correoCliente =
            document.querySelector(
                "#correo-cliente"
            ).value.trim();


        const telefonoCliente =
            document.querySelector(
                "#telefono-cliente"
            ).value.trim();


        const fechaPedido =
            document.querySelector(
                "#fecha-pedido"
            ).value;


        const tipoPedido =
            document.querySelector(
                "#tipo-pedido"
            ).value;


        const confirmarPedido =
            document.querySelector(
                "#confirmar-pedido"
            ).checked;


        if (
            nombreCliente === "" ||
            correoCliente === "" ||
            telefonoCliente === "" ||
            fechaPedido === "" ||
            tipoPedido === "" ||
            confirmarPedido === false
        ) {

            mensajeCocina.textContent =
                "Por favor, completa todos los campos.";

            mensajeCocina.style.color =
                "red";

            return;
        }


        const datosPedidoPollo = {

            nombreCliente:
                nombreCliente,

            correoCliente:
                correoCliente,

            telefonoCliente:
                telefonoCliente,

            fechaPedido:
                fechaPedido,

            tipoPedido:
                tipoPedido,

            platosPedido:
                pedidoPollo,

            totalPedido:
                totalPollo

        };


        localStorage.setItem(
            "ultimoPedidoPollo",
            JSON.stringify(
                datosPedidoPollo
            )
        );


        mensajeCocina.textContent =
            "¡Gracias " +
            nombreCliente +
            "! Tu pedido fue registrado correctamente.";

        mensajeCocina.style.color =
            "green";


        formularioPollo.reset();

    }
);


mostrarPlatosPollo(
    platosPollo
);