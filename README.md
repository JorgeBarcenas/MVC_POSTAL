<H1 align="center"> MVC_POSTAL </H1>

*En el presente repositorio, se encuentra el código correspondiente al proyecto MVC_Postal, donde de igual manera, se encuentra el archivo MD, **MVC_Postal**, el cual contiene, la documentación pertienente del proyecto.*

<hr>

<H1> Prerequisitos </H1>
<H2> Creación de Cuenta MongoDB Atlas </H2>

Para comenzar, se tendrá que acceder a la página oficial de **MongoDB Atlas**, en la que se tendrá que registrar una nueva cuenta. <a href="https://cloud.mongodb.com/"> Dar clic para dirigirse a página oficial Mongo DB Atlas </a>

Donde una vez creada la cuenta, se accederá a ella y se realizaran, los pasos guía, que se nos despliegan, al entrar por primera vez a nuestra cuenta. Donde una vez realizado los primeros pasos, nos ubicará en la página de nuestro primer proyecto.

![Página_Proyecto](https://raw.githubusercontent.com/JorgeBarcenas/MVC/master/Git/Ambientacion/Usuario.PNG)

Donde nos dirigeremos a la pestaña **Security**, donde en la parte superior derecho, abra un botón verde, qel cual dirá **Add new user**, donde se dará clic en el y se creará un usuario con privilegios de **Administrador**. En este caso se crea usuario administrador, con su respectiva contraseña, donde dicho administrador, cuenta con los permisos de poder editar cualquier colección de cualquier base de datos que almacene Cloud.

![Contraseña](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Ambientacion/Usuariocreado.png)

<hr>

<H2> Creación de BD </H2>

Dentro de la página principal de nuestro proyecto en Atlas, se dará clic, sobre el botón **Collections**,el cual nos dirigirá a una nueva ventana, en la que se dará clic sobre el botón **Add Database**, donde nos desplegará una ventana, en la que tendremos que colocar el nombre de nuestra base de datos.

![add_DB](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Ambientacion/BD.png)

<hr>

<H2> Importar Colecciones </H2>

Una vez creada la base de datos dentro de nuestro proyecto Atlas, este no contiene ninguna colección, por lo que no cuenta con ningún tipo de información, por lo que se procede con la importación de nuestras colecciones almacenadas dentro de nuestro equipo.

![Info_Atlas](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Ambientacion/Infoatlas.png)

Dentro de la página de Atlas, se pueden conocer los comandos a ejecutar para la importación de colecciones, donde se utiliza el comano **mongo import**, seguido de las especificaciones, las cuales son:

En la primera parte del código, se agregan, las direcciones y el nombre de los servidores, que pertenecen en nuestro Cloud, (Podría funcionar con solo un servidor, sin embargo, es preferible anexar los otros dos, en caso de que el servidor principal colapse o caiga).

**Cluster0-shard-0/cluster0-shard-00-00-e5wzw.mongodb.net:27017, cluster0-shard-00-01-e5wzw.mongodb.net:27017, cluster0-shard-00-02-e5wzw.mongodb.net:27017**

Posteriormente se especifica, el nombre de la base de datos **learning_mongo** donde se anexará la colección, así como el correspondiente nombre, que tendrá nuestra colección **tour**, y la ubicación dentro de nuestro equipo, en el que se encuentra el archivo correspondiente a importar.
**--db learning_mongo --collection tour --type json --file C:\Users\hp\Desktop\Mongo\tours.json --jsonArray**

Por último, se agregan las credenciales del administrador, con las cuales se tendrá acceso a Cloud

**--authenticationDatabase admin --ssl --username root --password toor**

Dicho código se ejecutará en una ventana CMD, en la ubicación en la que se encuentra la configuración de nuestro MongoDB, este comando se ejecutara para cada uno de los archivos que contienen nuestras colecciones, que se importaran a la base de datos dentro de lanube.

![cmd1](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Ambientacion/CMD1.png)

![cmd2](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Ambientacion/CMD2.png)

![cmd3](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Ambientacion/CMD3.png)

Por lo que una vez, ejecutado el comando, dentro de nuestro Cloud, deberá de aparecer las colecciones que se importaron.

![Evidencia](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Ambientacion/Evidencia.png)

<hr>

<H2> Instalación de Drivers </H2>

Una vez teniendo las bases de datos en la nube, se procede a la instalación de las librerías, que nos permitirán, realizar las peticiones, dentro de nuestros archivos JS.
Para ello, se abrirá Visual Studio Code, y se abrirá una línea de comandos, y se establecerá en la ubicación en la que se tengan almacenada la carpeta con los archivos JS, para poder ejecutar el comando 
**npm install -nombre de librería-**

![Install1](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Ambientacion/Install1.png)

![Install2](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Ambientacion/Install2.png)

![Install3](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Ambientacion/Install3.png)

Donde una vez instalado, los drivers, se comienza con la edición de los programas JS, para que la consulta resulte exitosa, para ello se tiene que configurar el archivo Key.JS, el cual nos permitirá, realizar una conexión con la Nube, para el acceso a la base de datos.

<hr>

<H1 align="center"> MVC_POSTAL </H1>

<H2> Configuración Key </H2>

La configuración del siguiente proyecto, es similar al proyecto **MVC_TOUR** previamente presentado, en el que se, tiene que tiene que tener configurado, el archivo Key, el cual nos permite, ingresar a nuestra base de datos Atlas, en la que se encuentran nuestras colecciones.
El cual consta de el usuario y contraseña de nuestro administrador, de nuestra nube, así como las tres conexiones que disponemos, con su respectivo puerto y nombre. De igual manera, se especifica la base de datos a la que se accederá.

![Key](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Key_Confg/Key.png)

<hr>

<H2> Comando Node </H2>

Una vez realizado la configuración correspondiente, se continuará abriendo una terminal dentro la aplicación Visual Studio Code, en el que se posicionará dentro de la carpeta en la que se encuentra, nuestros archivos correspondientes al proyecto Postal y se escribirá el siguiente comando para la compilación del archivo:
**Node app.js**

![Node](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Key_Confg/Node.png)

En el que comenzara con la conexión a la base de datos, para poder así realizar pruebas de los siguientes servicios Web (GET, POST, PUT DELETE). Mediante la aplicación de Postman.

<hr>

<H2> Consulta Postal </H2>

<ul>
 <li type="circle"> Configuración de URL en Postman </li>
 <li type="circle"> Archivo App.js </li>
 <li type="circle"> Archivo Admin.js </li>
 <li type="circle"> Archivo Postal.js </li>
 <li type="circle"> Resultado </li>
</ul> 

<h3> <b> Configurción de URl en Postman </b> </h3>

Una vez realizado la conexión con la base de datos, se comenzará con la realización de la primera prueba, la cual consta, de una búsqueda de toda la colección Postal.
Por lo que se abrirá la aplicación Postman, en la que, dentro del apartado de URL, se escribirá lo siguiente:
**localhost:3000/api/postales/**
La cual consiste en **localhost** nombre de nuestro servidor, seguido de **3000** el cual es el puerto por el que se transmite información dentro de la aplicación Postman, **api/postales** el cual es el nombre con el que se manda a llamar las instrucciones de la consulta, la cual realizara una conexión general a la base de datos.


![URL](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Postal/URL.png)

<h3> <b> Archivo App.js </b> </h3>

Donde posterior se continuará con él envió de la petición, conforme la URL, solicitada dentro de la URL.
La cual la petición pasa por el archivo App.js, el cual, identifica el nombre de la petición, que esta previamente definida dentro del archivo, para así enviarlo al siguiente archivo js, para la búsqueda de instrucciones.

![App](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Postal/App.png)

<h3> <b> Archivo Admin.js </b> </h3>

Donde lo redirige a el archivo Admin.js, en el cual contiene la consulta y las instrucciones que realizara dicha petición.

![Admin](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Postal/Admin.png)

<h3> <b> Archivo Postal.js </b> </h3>

Para ello pasa por el archivo Postal.js, en la que se especifica un modelo de la base de datos, para hacer más efectiva la búsqueda dentro de la base de datos, con el uso de la librería Mongoose, de igual manera se especifica, la colecciona a la que realizara la conexión y obtención de información.

![Postal](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Postal/Postal.png)

<h3> <b> Resultado </b> </h3>

Donde una vez conociendo las instrucciones de la petición a realizar, se conecta a la base de datos de nuestra nube, en la que ejecutará la consulta definida dentro del archivo Admin.js, donde una vez obtenida la información la despliega al usuario, dentro del programa Postman. El cual realiza una consulta general de todos los datos dentro de la colección Postal.
**Db.postal.find()**

![Evidencia](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20Postal/Evidencia.png)

<hr>

<H2> Consulta PostaById </H2>

<ul>
 <li type="circle"> Configuración de URL en Postman </li>
 <li type="circle"> Archivo App.js </li>
 <li type="circle"> Archivo Admin.js </li>
 <li type="circle"> Archivo Postal.js </li>
 <li type="circle"> Resultado </li>
</ul> 

<h3> <b> Configuración de URL en Postman</b> </h3>

En la siguiente consulta, se realizará una búsqueda con condición, en la que, en este caso, mostrará los objetos, que contengan, el Id, que sea introducido por el usuario dentro del apartado de URL en la aplicación Postman. 
Para el siguiente ejemplo de tomar la siguiente ID: **5cbf9f4d5476ba2a647b6ab0**. Para ello se tendrá que escribir lo siguiente dentro del apartado de la URL:
**localhost:3000/api/postales/5cbf9f4d5476ba2a647b6ab0**
Que consiste en **localhost** nombre de nuestro servidor, seguido de **3000** el cual es el puerto por el que se transmite información dentro de la aplicación Postman, **api/postales5cbf9f4d5476ba2a647b6ab0** el cual es el nombre con el que se manda a llamar las instrucciones de la consulta, la cual consiste en una busqueda especifica por una condición.


![Url](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostID/Url.png)

<h3> <b> Archivo App.js </b> </h3>

Donde posterior, la información pasa por el archivo App.js, donde se encuentra con el nombre correspondiente, previamente definido, para conectarlo con el siguiente archivo.

![App](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostID/App.png)

<h3> <b> Archivo Admin.js </b> </h3>

Donde una vez identificado, el nombre lo enlaza con el archivo Admin.js, en el que se encuentran definidas las consultas e instrucciones de cada uno de los nombres, en este caso se hará uso del siguiente:

![Admin](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostID/Admin.png)

<h3> <b> Archivo Postal.js </b> </h3>

El cual tendrá que pasar por el archivo, Posta.js, en el cual se encuentra el modelo, de la base de datos, para la identificación de las colecciones y documentos, dentro de la nube.

![Postal](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostID/Postal.png)

<h3> <b> Resultado </b> </h3>

Para posteriormente, regresar con la información y desplegarla a usuario dentro de la aplicación Postman. El cual realizo el comando
**Db.postal.find({_id: 5cbf9f4d5476ba2a647b6ab0})**

![Evidencia](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostID/Evidencia.png)

<hr>

<H2> Consulta PostalByCode </H2>

<ul>
 <li type="circle"> Configuración de URL en Postman </li>
 <li type="circle"> Archivo App.js </li>
 <li type="circle"> Archivo Admin.js </li>
 <li type="circle"> Archivo Postal.js </li>
 <li type="circle"> Resultado </li>
</ul> 


<h3> <b> Configuración de URL en Postman </b> </h3>

La siguiente consulta, tiene por fin, realizar una consulta, mediante una condición, la cual es desplegar, aquellos objetos que tengan por igual, mismo código postal, ingresado por el usuario, para este ejemplo, tomaremos el siguiente código postal:**50994**, donde dentro del apartado de URL, se introducirá lo siguiente:
**localhost:3000/api/postales/ciudades/50994**
La cual consiste en **localhost** nombre de nuestro servidor, seguido de **3000** el cual es el puerto por el que se transmite información dentro de la aplicación Postman, **api/postales/ciuadades/50994** el cual es el nombre con el que se manda a llamar las instrucciones de la consulta, en la que se pretende encontrar las ciudades con el mismo codico postal, la cual es una consulta con condición.

![Url](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostCodCity/Url.png)

<h3> <b> Archivo App.js </b> </h3>

Donde pasará por el archivo App.js, para la búsqueda del nombre, con el que fue especificado previamente.

![App](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostCodCity/App.png)

<h3> <b> Archivo Admin.js </b> </h3>

Para posteriormente, dirigirse al archivo, Admin.js, en el que se especificaran las instrucciones de la consulta, que se realiará.

![Admin](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostCodCity/Admin.png)

<h3> <b> Archivo Postal </b> </h3>

Posteriormente se dirigirá al archivo Postal.js, en el que encuentra, el modelo de la base de datos, conforme a las necesidades de las consultas que realizaremos, dentro de nuestras colecciones.

![Postal](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostCodCity/Postal.png)

<h3> <b> Resultado </b> </h3>

Finalmente, retornara con la información encontrada, para su despliegue con el usuario dentro de la aplicación Postman, mediante el comando:
**Db.postal.find({d_codigo:50994})**

![Evidencia](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostCodCity/Evidencia.png)

<hr>

<H2> Consulta PostalCity </H2>

<ul>
 <li type="circle"> Configuración de URL en Postman </li>
 <li type="circle"> Archivo App.js </li>
 <li type="circle"> Archivo Admin.js </li>
 <li type="circle"> Archivo Postal.js </li>
 <li type="circle"> Resultado </li>
</ul> 

<h3> <b> Configuración de URL en Postman </b> </h3>

En la siguiente consulta, se realizará una consulta, en la que se pretende listar, las ciudades que se encuentran registradas dentro de nuestra colección Postal,
Para ello dentro de la URL, en la aplicación Postman, se escribirá la siguiente línea:
**localhost:3000/api/ciudades**
La cual consiste en **localhost** nombre de nuestro servidor, seguido de **3000** el cual es el puerto por el que se transmite información dentro de la aplicación Postman, **api/ciudades** el cual es el nombre con el que se manda a llamar las instrucciones de la consulta, la cual realizara una busqueda en lista de todas las ciudades que se encuentran registradas dentro de nuestra colección Postales, sin repetir, las ciudades.

![Url](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostCity/Url.png)

<h3> <b> Archivo App.js</b> </h3>

Donde pasará por el archivo App.js, en el que buscará, el mismo nombre con el que fue insertado por el usuario.

![App](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostCity/App.png)

<h3> <b> Archivo Admin.js </b> </h3>

Una vez encontrado, el nombre lo redirigirá al archivo Admin.js, en el que se encontrará con las instrucciones que realizará dentro de la base de datos.

![Admin](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostCity/Admin.png)

<h3> <b> Archivo Postal.js </b> </h3>

Posteriormente, se conecta con el archivo Postal.js, para obtener la información de modelo, en el que se basará para la obtención de la información, así como la colección a la que accederá.

![Postal](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostCity/Postal.png)

<h3> <b> Resultado </b> </h3>

Una vez realizado, se dirige ala base de datos, en la que, obtiene la información de la colección correspondiente, y posterior regresa, para el despliegue al usuario dentro de la aplicación Postman.

![Evidencia](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Consulta%20PostCity/Evidencia.png)

<hr>
