# Curso Node Js, Gracias Trainer

## Que es, para que y porque usamos Node Js?

Es un tiempo de ejecucion de JavaScript que esta construido en el motor de codigo abierto V8 de JS de Google. 

Se utiliza principalmente para desarrollar aplicaciones del lado del servidor, lo que significa que se ejecutan en el servidor en lugar de en el navegador web del usuario. 

Es perfecto para construir rapidas y escalables aplicaciones de datos intensivos, usando API's con bases de datos, preferiblemente NoSQL, de tal forma que se pueden hacer Plataforma de trasnmision de datos como Youtube, Chats en tiempo real, aplicaciones del lado del servidor donde es todo generado directamente del servidor.

## Empezamos Documentacion

Para empezar a escribir codigo de Node, colocamos en la terminal: 

```bash
  node
```

Ya que como ya lo instalamos previamente nos permitira hacer sus funcionas. Esto abrira el Node REPL que es bucle de lectura-evaluacion-impresion. En otras palabras podemos escribir codigo de JavaScript como en una terminal normal. 

Por ejemplo definir variables, hacer calculo matematicos, y mas. Para salirse de esta terminal con node, podemos:

1. Hacer ".exit"
2. Darle al Ctrl + D. 

En la parte de hacer calculos matematicos como mencione anteriormente, cuando hacemos un calculo y queremos retomar el resultado anterior para juntarlo con otro numero colocamos el raya piso "_" y la operacion a realizar, de esta forma, tomara el dato que teniamos en operacion anterior y se junta a la nueva operacion a realizar.

Si queremos ver los comandos que podemos usar en la terminal con node, le damos al Tabulador (Tab) y nos arrojara los posibles comandos que podemos usar como ejemplo (String, Number, JSON, math, etc).

![App Screenshot](https://snipboard.io/3URlmh.jpg)

 De igual forma en cualquier comando si le damos a Tab por ejemplo en String, nos arrojara los subcomandos que tiene String en su seccion.

## Core Modules

Creemos un index.js en nuestra ruta principal y hagamos una variable de saludo con Hello world.
 Para ejecutar el comando, no usaremos un navegador sino que lo haremos desde la misma instancia de Node, colocando el comando en la terminal node pero indicando el nombre del archivo que en este caso en index.js.

![App Screenshot](https://snipboard.io/uKzEWx.jpg)

Pero no estamos aca para hacer cosas tan simples verdad? Ahora usaremos un modulo de Node. Dado que Node se basa en concepto de modulos donde todas las funciones adicionales se almacenan en modulos.

En este caso en el modulo FS se usa la lectura de archivos. Puesto que fs significa file system o en español sistema de archivos. Ahora para abrir estos modulos o usarlos instanciamos en nuestro codigo.

![App Screenshot](https://snipboard.io/gy0Qu9.jpg)

En donde cuando requerimos el module de fs guardara todo su poder en la constante fs.

## Reading and Writing Files

Borramos el codigo del Hello world y solamente son quedamos con la const fs y empezaremos a usarla.

Usamos a fs con un . para llamar las funcionas que tiene en un interior, en este caso a readFileSync (Sync significa sincronico), donde toma dos argumentos, el primero es el path que leemos y luego el caracter codificado. 

En este caso usaremos la carpeta txt, el archivo de nombre "input.txt", entonces en nuestro codigo especificamos la ruta del archivo al que vamos a referenciar, en el segunto argumento indicamos el codificador de caractares que es por lo general utf-8.

Ahora llamamos a esta funcion que leera el archivo y nos lo devolvera, por lo que lo colocamos en una variable y lo mandamos al console.log

![App Screenshot](https://snipboard.io/UBXybo.jpg)

Ya sabemos como leer archivos, ahora veremos como escribir en archivos. Por lo que creamos una nueva variable, donde escribiremos un texto el cual luego lo insertaremos en la constante que leyo el texto de input.txt.

Ahora usaremos la funcion writeFileSync de fs, donde instanciamos primero el path del archivo, y le indicamos el nombre del archivo al que vamos a dirigir la nueva informacion y de segundo argumento el texto de Salida que queremos ver en el nuevo archivo.

![App Screenshot](https://snipboard.io/RgqQlj.jpg)

De tal forma que con un console.log miramos si lo que hicimos en indexjs quedo guardado y lo muestra.

![App Screenshot](https://snipboard.io/MiltK4.jpg)

## Blocking and Non-Blocking: Asynchronous Nature

Synchronous: Se procesa basicamente una tras otra, linea por linea, tambien se le conoce como codigo de bloqueo porque nuevamente solo se ejecuta una operacion determinada solo despues de que la anterior haya terminado.

Asynchronous: Cargamos trabajo pesado para basicamente en segundo plano. Y luego una vez que realiza ese trabajo, se llama a una funcion de devolucion de llamada que registramos antes de manejar el resultado. 

## Reading and Writing Files Asynchronously

Haremos lo mismo que hicimos en el ejercicio anterior pero de forma asincrona de tal forma que en vez de usar readFileSync, sera solo readFile, dado que aca ya no tenemos que especificar la codificacion del archivo, y en el segundo parametro sera una funcion de devolucion de llamada.

En el callback, llamamos dos argumentos, el error y la data, por lo general el argumento del error siempre va primero, por este caso seguiremos especificando la codificacion de archivo, en este caso 'utf8'.

![App Screenshot](https://snipboard.io/gPuzF9.jpg)

Tras ejecutar esta funcion, comenzara a leer este archivo en segundo plano sin bloquear el resto del codigo, por ejemplo si tenemos un log abajo de la funcion, leera primero el log y luego la funcion ya que no esta obligado a detener el codigo para leer primero la funcion, sino que sigue un orden que no afecta el orden.

![App Screenshot](https://snipboard.io/muWi53.jpg)

En este caso ahora haremos que un callback depende de otro callback, llamando el primero por data1 que tomara el dato del primer archivo "start.txt" y lo que arroje ese archivo sera registrado en data1 que luego recibira la informacion de data1 en el path del segundo callback y despues de leer la informacion del start.txt que seria read-this, lo leera el segundo callback que mandara la informacion que tiene "read-this.txt".

Ahora, ademas de leer la informacion de "read-this.txt" leera otro callback que leera el archivo de "append.txt"

![App Screenshot](https://snipboard.io/lq5CF4.jpg)

Ahora, despues del 3er callback en vez leer un archivo, creamos un archivo que contenga informacion. Entonces depues del callback de data3, creamos un FileWrite que este sera el dado de forma asincrona, de primer argumento mandamos el path que creamos para que guarde la informacion, pero como aun no tiene informacio que reciba para guardar, por lo que el segundo argumento seran los datos que reciba este path, que seran los resultados de data2 y data3, de tercer dato la codificacion del archivo (utf8) y de cuarto y ultimo argumento, sera el callback que referencie a un error, en caso que lo haya, y se envia un console.log que informe que el archivo fue creado.

![App Screenshot](https://snipboard.io/XNFj6m.jpg)

![App Screenshot](https://snipboard.io/SV45HA.jpg)

![App Screenshot](https://snipboard.io/OvhTqU.jpg)

## Creating a Simple Web Server

Llamamos al modulo http de node, requiriendolo de uno de los modulos de node, este nos brinda capacidades de red como construir un servidor http.

Para crear un servidor tenemos que hacer 2 cosas:
1. Crear el server
2. Iniciar el server
Para que podamos escuchar las solicitudes entrantes.
Usaremos el modulo http, al igual que antes hicimos con el modulo fs. 

Y usamos la funcion createServer, que aceptara un callback que se activara cada vez que llegue una nueva solicitud a nuestro servidor. y este callback tendra acceso a dos variables fundamentales y muy importantes. Las cuales son las variables de la request y la response (req, res) y deberemos de enviar una response al cliente y lo hacemos con res.

De tal forma, que al final guardaremos el servidor creador en una variable que lo escuche en un puerto determinado o elegido por el usuario.

Y lo pondremos a correr en este caso en el puerto 8000 y colocamos un console.log que nos confirme que esta recibiendo peticiones nuestro server.

Analizando bien todo, en una constante llamada server, llamamos al modulo http, donde creamos un server gracias a una funcion de http, donde recibe peticiones y da respuestas dadas en el callback, y mandamos un mensaje de prueba por la response en el que el server saluda, para luego esta constante server, ser escuchada en el puerto 8000 de forma local (127.0.0.1) y un callback que tenga un mensaje para saber si el server esta funcionando.

![App Screenshot](https://snipboard.io/a2kBGh.jpg)

## Routing

Primero llamaremos un modulo de Node llamado URL (const url = require('url')).

Ahora para poder observar las rutas que estamos siguiendo en nuestro Server, en el server se hace un log, de la peticion por la url console.log(req.url), de tal forma cuando recarguemos nuestro servidor y pagina, veremos las rutas que nos arroja por defecto la pagina las cuales serian la raiz (/) y la ruta por favicon (/favicon.ico).

EL modulo URL nos ayudara a hacer basicamente analisis de los parametros que llegan y valores en un objeto con un formato agradable. Asi que el modulo URL no lo usaremos por ahora, era para hacer un testeo de como se ven las rutas en nuestro servidor.

La req.url la colocamos en una constante para que podamos revisar constantemente a cual ruta nos quiere llevar el servidor, que si es igual a una ruta instanciada, lo llevara a esa ruta, pero que pasa si colocamos una ruta erronea, recibe una ruta que no existe, por lo que trata de enviar una respuesta, pero realmente no puede, por lo que el servidor no sabe que hacer, ya no que hay respaldo en caso que se presente un caso asi.

Para este caso se indica en un condicional que si la ruta no es reconocible, no existe esa pagina y gestionara un 404 para que el usuario sepa que esta mal. tambien en el header que se envia el 404, se podria colocar un texto para que sea mas practico indicar al usuario que esta mal la ruta.

## Building a (VERY) Simple API

Las API'S son un servicio al que podemos solicitar algunos datos, en este caso, los datos que el usuario quiere solicitar son sobre el producto en esta granja de node, en este caso son los JSON, que son un formato de texto muy simple que se parece mucho a un objeto de JavaScript.

Creamos un PathName que si es /api se referira a la ruta donde esta nuestra API de la granja.
En vez de usar el ./ como en casos anteriores, usaremos a __dirname que se refiere al nivel de carpeta actual, dentro del ReadFile que como ya sabemos, trabaja de forma asincrona, especificamos el codificador del archivo, y luego la funcion de callback.

Como los datos estan en JSON, por lo que JavaScript, tenemos algo llamado JSON. entonces lo parseamos que lo convertira automaticamente a JavaScript por lo que en este caso sera un objeto o matriz de JavaScript.

Esa informacion (data) se manda al .end para que se muestre en nuestro server para comprobar que funciona, al igual en los headers, como estamos usando JSON se debe enviar un Content-Type de tipo application/json.

Ahora entendiendo que la parte de la informacion de la Api es esencial, la sacamos del condicion y la mandamos al comienzo de nuestro servidor y que funcione de forma sincronica, ya que apesar de ser sincronica (Ya habiendo entendido que de forma sincronica es blocking, esto es fundamental asi que si o si debe ir encabezado en el server, sin importar la ruta que este, puesto que para eso ya tenemos los rutas que necesitamos).

## HTML Templating: Building the Templates

De las dos plantillas que tenemos, tanto de product como overview, de comienzo a fin, se debe hacer dinamicos los titulos, textos e imagenes para cuando usemos la API con las plantillas sea mas facil y dinamico instanciar los textos puestos en la API.

## HTML Templating: Filling the Templates

En el servidor lo primero que debemos hacer es cargar la descripcion general de la plantilla, para cada vez que haya una nueva solicitud para la ruta que se haga sea leer la informacion en este caso en overview, es la descripcion general de la plantilla.

Para ello los templates que leemos los repetiremos 3 veces pero con diferentes nombres y lo referenciamos a sus respectivas carpetas. Esto se ejecuta una sola vez justo al principio cuando cargamos esta aplicacion. Entonces no podriamos hacer esto dentro de esta funcion de callback, porque se llama cada vez que hay una nueva solicitud.

Tras haber explicado eso, en la ruta respectiva se cambia el dato que va en el .end por su respectiva variable.

Ahora la siguiente tarea ahora es reemplazar este marcador de posicion con las tarjetas reales, lo hacemos con el dataObject, ya que hay esta un array de todos los objetos. Entonces creamos una constante que guarde y recorra todos los datos del array y reemplace en donde se indico en el template-overview, con los elementos del array.

Ahora esta funcion que reemplazara en el Template, pedira de argumentos el temp y el product, donde en una constante, el temp se reemplazara el valor dado de forma global, {%PRODUCTNAME%} se cambie por el dato como esta en la API, esto se tendra que hacer con todos los elementos de la API. Luego al final del array lo unimos con una cadena vacia y ahora en una constante en el template del Overview reemplazamos el texto de {%PRODUCT_CARDS%} por los datos ya en el html y se envia al .end

## Parsing Variables from URL's

Aqui ya usaremos el modulo que exportamos anteriormente, llamado URL, para poder analizar en variables las url's, por lo que primero vamos a registrar en consola, las rutas que nos aparecen por la req.url, al igual que crearemos una constante llamada consulta que parseara la peticion de url y la tornara a true para poder analizar lo que contiene. Asi para cuando se busque a un producto por la id, le permita el paso y no se genere que esa ruta no existe.

Ahora en la ruta de producto creamos una constante del array de los datos de la busqueda en la posicion del id, ahora en una constante salida se reemplaza el template por la funcion replaceTemplate donde reemplaza el template de los productos, con los productos que son.

## Using Modules 2: Our own Modules

Entonces, por ejemplo, si tenemos un monton de archivos de JavaScript diferentes en los que usamos esta la funcion replaceTemplate, en este caso lo estamos usando en index.js.

![App Screenshot](https://snipboard.io/kg780v.jpg)

Lo usamos dos veces, pero si quisieramos usar esta misma funcion en diferentes archivos, como hariamos? Lo que podriamos hacer es crear un nuevo modulo y exportar esa funcion y luego importarla aqui, por lo que creamos una carpeta en la carpeta raiz llamada modules donde creamos un archivo llamado replaceTemplate.js, donde tomaremos nuestra funcion y la pasaremos a este nuevo archivo.

![App Screenshot](https://snipboard.io/a81VZg.jpg)

Ahora para exportar esta funcion, usaremos una funcion de modulo que permite exportar los archivos de forma sencilla desde la cabecera del codigo. Para importarla en el codigo, vamos a index.js en la parte superior que es donde se sugiere colocar las importaciones y modulos, colocamos un require de la carpeta donde ahora esta la funcion y la unimos a una constante que sera la que tendra el poder de la funcion, la llamaremos replaceTemplate (igual que la funcion).

![App Screenshot](https://snipboard.io/J4ZBAr.jpg)

## Introduction to NPM and the package.json File

Es una aplicacion de interfaz de linea de comandos que viene incluida automaticamente con Node.js en la que usamos para instalar y administrar paquetes de codigo abierto. Ahora estos paquetes que se mencionan, generalmente provienen del repositorio de paquetes que es tambien es npm.

Entonces npm es en realidad tanto la aplicacion de interfaz de linea de comandos que usamos para administrar los paquetes como el repositorio en si. Y de hecho es el registro de software mas grande del mundo, sin importar el idioma que estemos hablando.

Npm es un software que usamos basicamente para administrar los paquetes de codigo abierto de terceros que elegimos incluir y usar en nuestro proyecto. Y lo primero que suelen hacer cada vez que iniciamos nuestro proyecto, es comenzar con npm init.

```bash
  npm init
```

 Y esto basicamente creara un paquete de archivos de JSON. Asi que npm init nos esta haciendo un monton de preguntas como se observa

![App Screenshot](https://snipboard.io/jp3NuI.jpg)

## Types of Packages and Installs

Las dependencias simples o regulares son practicamente paquetes que contienen algun codigo que incluiremos en nuestro propio codigo. Entonces el codigo sobre el cual construimos nuestra propia aplicacion, y es por eso que en realidad los llamamos dependencias, porque nuestro proyecto y nuestro codigo dependen de ellos para que funcionen correctamente.

Por ejemplo, Express, que es, nuevamente, el marco de Node que usaremos. Por ahora el paquete que instalaremos se llama Slugify, que es una pequeña herramienta que podemos usar para hacer URL mas legibles. Por ejemplo nombres de productos similares en el caso de nuestro ejemplo de formulario de node. 

Entonces para instalar una dependencia simple en npm, todo lo que tenemos que hacer es decir

 ```bash
    npm install slugify
 ```

 En versiones anteriores, tambien tendria:

 ```bash
  npm install slugify --save
```

Pero esta forma ya no es necesaria, una vez ya se ha instalado, podremos observar en nuestro package.json que se ha actualizado y se ha ingresado el dato de slugify con su respectiva version actual. De tal forma que en el apartado de dependencies, se creo un nuevo campo para slugify.

![App Screenshot](https://snipboard.io/p1dxGm.jpg)

Asi como hay dependencias regulares, hay dependencias de desarrollador, como por ejemplo Webpack, una herramienta de depuracion o una biblioteca de pruebas. Entonces son dependencias de desarrollo. No necesariamente para la produccion, por lo que nuestro codigo realmente no depende de ellos, simplemente los usamos para desarrollar nuestras aplicaciones.

Para instalar nodemon es:

 ```bash
  npm install nodemon --save-dev
```

Nodemon es una herramienta muy agradable que nos ayuda a desarrollar aplicaciones Node.js al reiniciar automaticamente la aplicacion Node cada vez que cambiamos algunos archivos en nuestro directorio de trabajo. Asi que recuerde que en el proyecto, en realidad cerraba el servidor todo el tiempo, para luego reiniciarlo cada vez que se cambiaba el codigo. Pero con esta herrameinta, eso ya no es necesario. Por lo tanto, reiniciara automaticamente el servidor cada vez que hagamos un cambio.

Ahora, hablemos tambien de los 2 tipos de instalaciones de estos paquetes, porque ahora todo lo que hicimos fue instalar estos paquetes localmente, por lo que solo funciona en este proyecto, todo gracias a node_modules, aqui ademas de instalarse las dependencias que indicamos, se instalan las subdependencias de estas mismas, por eso son tantas.

Ahora haremos instalaciones globales: Podemos usar install de forma abreviada, tambien:

 ```bash
  npm i nodemon --global
```

Otra cosa que podemos usar gracias a Package.json es crear scripts que nos seran utiles, en este caso para habilitar nodemon en una sola palabra "start" que habilitara nodemon con el index.js

## Using modules 3: 3rd Party Modules

Requerir un modulo que ya instalamos desde NPM es realmente simple, asi que nuevamente hacemos todo lo requerido en la parte superior y generalmente requerimos los modulos centrales primero, luego los modulos de terceros y luego los nuestros que vienen de nuestro sistema de archivos locales como replaceTemplate.

Crearemos un array basado en los datos de nuestro array de nuestros productos, dado que en cada iteracion tomaremos el elemento y haremos un slug en base a eso. Al final nos arrojara los 5 nombres de los productos que tenemos en nuestra API.

## Package Versioning and Updating

Lo primero de lo que hablara es sobre la version de los paquetes. La mayoria de los paquetes de npm siguen la denominada notacion de version semantica, lo que quiere decir que sus numeros de version siempre se expresan con 3 numeros. 
1. Version Principal -> Nueva version que contiene cambios importantes
2. Version Menor -> Algunas caracteristicas nuevas, nada importante
3. Version de Parche -> Destinada a corregir errores 

Para comprobar paquetes desactualizados:

 ```bash
  npm outdated
```

Para instalar una version especifica: Por ejemplo:

 ```bash
  npm install slugify@1.0.0
```

Para comprobar paquetes desactualizados:

 ```bash
  npm outdated
```

Ahora instalar Express:

 ```bash
  npm install express
```

Desintalar Express:

 ```bash
  npm uninstall express
```

Ahora, una pieza importante de este rompecabezas es el archivo package-lock.json. Si lo abrimos obtenemos una lista de todas las versiones de todos los paquetes que estamos usando. Eso incluye las dependencias de nuestras dependencias. Tanto package.json y package-lock.json son completamente necesarios en caso que comparta su proyecto para que el otro desarrollador luego reconstruya basicamente la carpeta de node_modules.

## Setting up Prettier in VS Code

## Autor 

-[@TotixT](https://github.com/TotixT)

## Agradecimientos

- [Trainer Vermen](https://www.youtube.com/watch?v=rwnUSuajgR4&list=PLivNrn-FjWK4n-ETw2sJ-Ayhwjb8yR9Gg&index=3)

