<H1 align="center"> MVC_POSTAL </H1>
<H1 align="center"> Ciencia de Datos </H1>

*En el presente repositorio, se encuentra el código correspondiente al proyecto MVC_Tour, donde de igual manera, se encuentra el archivo MD, **MVC_Tour**, el cual contiene, la documentación pertienente del proyecto.*

<hr>

<H2> Creación de Cuenta MongoDB Atlas </H2>

Para comenzar, se tendrá que acceder a la página oficial de **MongoDB Atlas**, en la que se tendrá que registrar una nueva cuenta. <a href="https://cloud.mongodb.com/"> Dar clic para dirigirse a página oficial Mongo DB Atlas </a>

Donde una vez creada la cuenta, se accederá a ella y se realizaran, los pasos guía, que se nos despliegan, al entrar por primera vez a nuestra cuenta. Donde una vez realizado los primeros pasos, nos ubicará en la página de nuestro primer proyecto.

![Página_Proyecto](https://raw.githubusercontent.com/JorgeBarcenas/MVC/master/Git/Ambientacion/Usuario.PNG)

Donde nos dirigeremos a la pestaña **Security**, donde en la parte superior derecho, abra un botón verde, qel cual dirá **Add new user**, donde se dará clic en el y se creará un usuario con privilegios de **Administrador**. En este caso se crea usuario administrador “ROOT”, con su respectiva contraseña “TOOR”, donde dicho administrador, cuenta con los permisos de poder editar cualquier colección de cualquier base de datos que almacene Cloud.

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

<h1 align="center"> MVC TOUR PROYECT </H1>

<H2> Comando Node </H2>
Una vez configurado la conexión a la API, dentro de la aplicación Visual Studio Code, se abre una terminal, donde se ejecutará el comando, Node junto con el nombre del archivo que ejecutará **APP.JS**.

![Comando Node](https://raw.githubusercontent.com/JorgeBarcenas/Data-Mining-and-Data-Warehousing/master/Git/Comando%20Node/comando%20node.png)

Una vez ejecutado dicho comando, nos despliega un mensaje la terminal, que nos indica que sea ah realizado la conexion al servidor exitosamente, por lo que se puede proseguir con la ejecución de las pruebas.

<hr>
