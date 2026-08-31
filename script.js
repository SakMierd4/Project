const anioCocina =
    document.querySelector("#anio-cocina");

anioCocina.textContent =
    new Date().getFullYear();


const platosPollo = [

    {
        nombrePlato: "Pollo a la Brasa",

        descripcionPlato:
            "Pollo asado acompañado de papas y ensalada.",

        precioPlato: 28000,

        imagenPlato:
            "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80"
    },

    {
        nombrePlato: "Pollo Familiar",

        descripcionPlato:
            "Pollo completo ideal para compartir en familia.",

        precioPlato: 45000,

        imagenPlato:
            "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80"
    },

    {
        nombrePlato: "Alitas BBQ",

        descripcionPlato:
            "Alitas de pollo acompañadas con salsa BBQ.",

        precioPlato: 22000,

        imagenPlato:
            "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80"
    },

    {
        nombrePlato: "Combo Personal",

        descripcionPlato:
            "Pollo, papas, ensalada y bebida.",

        precioPlato: 20000,

        imagenPlato:
            "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=600&q=80"
    }

];


const menuPollos =
    document.querySelector("#menu-pollos");


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


        informacionPollo.appendChild(
            nombrePlato
        );

        informacionPollo.appendChild(
            descripcionPlato
        );

        informacionPollo.appendChild(
            precioPlato
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


mostrarPlatosPollo(platosPollo);
