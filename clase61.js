//API DOM JavaScript
//DOM (Document Object Model). Viene a ser una especie de representacion de todos los elementos que existen en html y el css. Lo que hacemos desde JS es modificar esta representacion y luego el navegador se encarga de renderizar estas modificaciones. 
//DOM (modelo de objeto del documento). Todo el documento html y todos los elementos que hay dentro de un documento estan modelados, representados, en un objeto de js. En ese objeto de JS van a estar todos los elementos representados dentro de este modelo. A partir de un elemento vamos a tener la posibilidad de, no solo buscar y obtener cada una de las cosas que existen dentro de la pagina web, sino que vamos a poder tambien modificarlo. 
//Es un objeto de JS. Todo el HTML esta representado en un objeto de js. Toda la informacion de cada uno de los elementos y como esos elementos se organizan dentro del html esta representada en el objeto document. 
//Este document es una propiedad del objeto global que se llama Window. Window es la variable mas global que existe. Es la variable que contiene a todas las demas variables globales.Es la variable que contiene absolutamente a todo. Esta variable no es algo propio del lenguaje js, hay otras tecnologias que utilizan js (ej nodejs) que no tienen window. Es una variable de entorno, la crea el propio navegador cuando construye, a traves del codigo html y css. 
//Window es una variable que contiene informacion no solo de los elementos de la pagina web, sino tambien de la ventana del navegador. Tiene tambien informacion sobre el scroll, sobre la url. La informacion no esta limitada exclusivamente a los elementos del html. 
//Document es parte de Window. Window tiene informacion sobre el navegador, y document sobre la pagina en si.


//DOM se compone de nodos y eventos

//NODOS: 
//Lo que hace el navegador cuando construye el objeto DOM es ir tomando cada uno de los elementos del html y va construyendo una especie de arbol. Cada uno de los puntos del arbol, a partir del cual pueden salir las ramas, es un nodo. Va construyendo un objeto anidado, donde cada elemento del html es un nodo.

const document = {
    html: {
        head: {},
        body: {
            div: {
                ul: {
                    li: {
                        a
                    }
                }
            }
        }
    }
}

//cada uno de estos nodos no es solamente el elemento, contiene toda la informacion sobre el elemento(clases, atributos, estilos, otros elementos que contiene, etc)
//En consola si ponemos directamente un elemento nos da la representacion visual. Ej document.body
//Si queremos ver el objeto como informacion tenemos que poner console.dir(body)
//Cuando inspeccionamos en consola el codigo un elemento nos tira el codigo del elemento. Ej $0. console.dir($0)

//Metodos para seleccionar elementos del DOM. 
// * Por ID
document.getElementById("count")//nos devuelve un elemento especifico que tenga un id en particular. Devuelve el nodo, objeto, que contenga toda la informacion sobre el elemento. Si quiero trabajar con eso tengo que guardarlo en una variable. De esta forma agilizamos el procesamiento de la pagina porque no tiene que buscarlo cada vez que lo necesite. 
//Las operaciones de DOM son las que mas carga de procesamiento requieren
const countLabel = document.getElementById('count')

// * Por nombre de Clase - puede devolver mas de un elemento
document.getElementsByClassName("title")

// * Por nombre de etiqueta - puede devolver mas de uno. Devuelve un array, por lo tanto hay que acceder al indice para modificarlo
document.getElementByTagName("h1")

//* Query Selector. Utilizan un selector de CSS
document.querySelector('.title')//devuelve el primer elemento que coincida con este selector
document.querySelectorAll('.title')//devuelve un array de elementos

//Una vez que accedemos a un elemento podemos modificar el contenido o los estilos. 
//Los estilos se acceden en la propiedad del elemento style. Se escriben igual que en css pero en camelCase. Para modificar los valores asignamos nuevos pero como si fueran strings (entre comillas)

const h2 = document.querySelector("h2")
h2.style//accedo a todas las propiedades de css del elemento
h2.style.color = "blue"
h2.style.fontSize = "100px"

//Cuando queremos leer los estilos que un elemento tiene
//La informacion de los estilos no esta dentro del nodo sino en un archivo aparte (css) 
window.getComputedStyle(h2).color
window.getComputedStyle(h2).fontSize//para acceder a los valores de las propiedades de CSS, ya sea que las tenga asignadas el elemento o los herede


//Metodos para modificar Clases
//Se puede acceder a la lista de clases que un elemento tiene y modificarla
//Para acceder a las clases de un elemento tengo que acceder a la propiedad classList. Devuelve un array y puedo acceder a cada una por el indice
$0.classList

//Para agregar una clase
$0.classList.add("disabled")

//Para agregar varias clases 
$0.classList.add("claseA", "claseB")

//Para eliminar clases
$0.classList.remove("claseA", "claseB")

//Para Reemplazar clases
$0.classList.replace("disabled", "enabled")

//Para chequear si hay una clase 
$0.classList.contains("enabled")

//Para ver todas las clases como string
$0.className

//Para modificar todo el conjunto
$0.className = "dasda"

//con toggle si la clase existe la elimina y si no existe la agrega
document.body.classList.toggle('dark-mode')

//Podemos modificar lo que un elemento contiene. Todo lo que este dentro de dos etiquetas se denomina innerHTML. Es el html interno que esa etiqueta tiene. Permite modificar dinamicamente el HTML
$0.innerHTML = "<p>Holaaa</p>"//reemplaza todo el html interno que habia entre la etiqueta de apertura y cierre, incluso la etiqueta. 
$0.innerHTML = "Modo oscuro!"

//Se puede tambien acceder a los atributos de una etiqueta y modificarlos.



//EVENTOS
//Los eventos son las acciones que puede realizar un usuario dentro de una pagina.

// * event handler. Es una funcion que es un callback.

// * event listener

//Hay dos formas de agregar eventos. Una es acceder a las propiedades del evento y asignarle una funcion
document.body.onclick = () => { alert("click!")} // este callback se llama handler. Es una funcion que la estoy declarando y la estoy guardando en la propiedad onclick
//Otra forma de hacer lo mismo
const showAlert =()=>{alert("click!")}
document.body.onclick = showAlert

//Event Listener
//Tiene dos parametros: el primero es el evento que queremos escuchar y el segundo es el handler(callback que queremos que se ejecute cuando se produce el evento sobre el elemento)
document.body.addEventListener("click", showAlert)

//La ventaja del event listener sobre el handler es que onclick es una propiedad por lo tanto se le puede agregar una sola funcion. Con eventListener se pueden agregar varias funciones sobre el mismo elemento y al mismo evento. La otra ventaja es que con un eventListener puedo suscribirme y desuscribirme cuando me interesa. Agrega funcionalidades que con el handler estan mucho mas limitado
const showMessage = () =>{alert("Hola")}
document.body.addEventListener("click", showAlert)
document.body.addEventListener("click", showMessage)
document.body.removeEventListener("click", showAlert)

//Ejemplo
const toggleDarkMode = () =>{
    document.body.classList.toggle('dark-mode')
}
document.body.addEventListener('click', toggleDarkMode)

//Ejemplo
const title = document.querySelector('h1')
const toggleDarkMode = ()=>{
    document.body.classList.toggle('dark-mode')
    if(title.classList.contains('dark-mode')){
        title.innerHTML = "modo claro"
    } else{
        title.innerHTML = "modo oscuro"
    }
}
document.body.addEventListener('click', toggleDarkMode)

//Suele suceder, cuando se trabaja con eventos, que se produzca un error dado que el script se carga antes que los elementos del html. Para evitar mover el script al final de la pagina utilizamos el evento onload
const init = () =>{
    document.body.addEventListener('click', toggleDarkMode)
}
window.onload = init

//Eventos de teclado
//Cuando queremos utilizar eventos de teclado
//Change solo va a funcionar cuando saco el foco del input
//keypress es otro evento de teclado y se ejecuta cada vez que se presiona una tecla. 
//keydown o keyup 

const keyDownHandler = (event) =>{
    console.log(AudioProcessingEvent)
    console.log("hola")
}

const input = document.querySelector('input')

input.addEventListener('keydown', keyDownHandler)

//para saber que tecla se apreto.
//Todos los eventHandler pueden tener un parametro, que es el evento que va a ocurrir. Este parametro se llena con informacion sobre el evento. Cuando el evento es con una tecla podemos obtener informacion de la tecla presionada keyboardEvent

//Cada evento tiene un target sobre el que ocurre y puedo acceder a esa informacion. 
title.innerHTML = event.target.value
//Los input no tienen innerHTML sino que tienen value. De esta forma accedemos al valor que contienen

