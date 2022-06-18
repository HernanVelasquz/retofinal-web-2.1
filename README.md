# Repositorio de trabajo de Proyecto final
## _Cursor Web 2.1 Sofka_

Autor.

- Hernan David Velasquez Meriño
- Ciclo 3 del Trinnig
- ✨Sofka U ✨

## Requisitos basicos para ejecutar el proyecto
El presente proyecto esta desarrollado con el lenguaje de programacion Java, haciendo uso de su framework SprintBoot para el desarrollo de API. El front end se desarrollo usando el lenguaje de demarcado HTML, el framework de css Bootstrap 5 y el lenguaje JavaScript para el manejo dinamico de los eventos. Para abrir el proyecto y consumirlo debe tener intalado en su equipo los siguientes requisitos:

- JDK (Java Development Kit) en su version 17
- Servidor de bases de datos, recomendamos XAMPP
- El entorno de desarrollo IntellijIDEA 2022
- El editor de codigo Visual Studio Code
    - Una extension para correr el documento html, la cual se llama live server.
- Git para hacer un clonado del repositorio

Links de descargas:
- [ JDK ](https://docs.microsoft.com/en-us/java/openjdk/download)
- [ Server XAMPP ]( https://www.apachefriends.org/es/index.html )
- [ IntellijIDEA 2022 Version Community ](https://www.jetbrains.com/es-es/idea/download/#section=windows)
- [ Visual Studio Code ](https://code.visualstudio.com/)
    - [ Live Server ](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 
- [ Git ](https://git-scm.com/downloads)

Con todas las intalaciones mencionadas con anterioridad se puede realizar se puede tener claro que tiene todas las instalaciones para poder empezar a ejecutar el proyecto sin generar problemas.

## Configuraciones
Para el que el back-end, pueda funcionar de manera correcta, se debe realiar unas configuraciones con anterioridad. Para ello, se deben haber realizado las intalaciones mencionadas con anterioridad.
1. Se debe habe clonar el presente repositorio con el comando git clone y la presente url. 
2. Despues se deben modificar las credenciales de las bases de datos, para ello se debe rigir a la siguiente ruta  `backend\src\main\resources` y buscar el archivo `application.properties`, el cual contiene la informacion el nombre de la base de datos y las credenciales. 
    - En mi caso, la base de datos a la cual me conecto tiene como nombre `tareas` y el usuario  administrador de la base de datos es `root` y el espacio de la contraseña lo tengo vacio ya que no tengo contraseña estipulada.
3. Despues debemos iniciar los servicio de Apache y Mysql e ir al `http://localhost/phpmyadmin/` y creamos la base de datos con el nombre `tareas`. Despues de esto, pasamos a ejecutar el proyecto.

## Video
El video de sustentacion se encuentra [aquí](https://studio.youtube.com/video/4cjVzxhDFrQ/edit) 