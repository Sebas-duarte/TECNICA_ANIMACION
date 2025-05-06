let nombre, saludo, contador, funcion, movimiento = 0;

function Mostrar_Saludo()
{
    nombre = document.getElementById("nombre").value.trim();
    saludo = document.getElementById("saludo");
    const dibujo = document.getElementById("dibujo");
    const musica = document.getElementById("musica");

    if (nombre === "") {
        saludo.textContent = "";
        saludo.style.visibility = "hidden";
        dibujo.style.display = "none";
        musica.pause();
        musica.currentTime = 0;
        return;
    }
    saludo.textContent = "BienvenIdo " + nombre + " a la rumba";
    saludo.style.visibility = "visible";
    dibujo.style.display = "block";
    musica.play();
    contador = 0;
    movimiento = 0;
    funcion = setInterval(function() {
        if (contador >=6) {
            clearInterval(funcion);
            saludo.style.visibility = "visible";
            return;
        }
        saludo.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
        movimiento += 10; 
        saludo.style.transform = "translateX(" + movimiento + "px)";
        saludo.style.visibility = saludo.style.visibility === "hidden" ? "visible" : "hidden";
        contador++;
    }, 300);
    document.getElementById("nombre").value = " ";
    }
