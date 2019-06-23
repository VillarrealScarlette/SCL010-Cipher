# IDEA

## SAFE
### Tu tranquilidad nos importa

![caeser-cipher](src/logo.jpg)

> [Demo SAFE](https://villarrealscarlette.github.io/SCL010-Cipher/src/index.html)

**Safe** es una aplicación que permitirá a nuestros usuarios recibir y gestionar la información de retiro (fecha, direccion surcursal, horario, entre otro) correspondiente al servicio de transporte de valores con sus clientes, de forma segura a través de mensajes codificados, manteniendo la **confidencialidad** de los datos logísticos.  

## Cliente Safe

Empresas prestadoras de servicio de recaudación y traslado de valores, suministro de cambio y gestión de depósitos en instituciones financieras.

### Usuarios
Se identifican 2 tipos de usuarios
- En una empresa prestadora de servicio: Personal encargado de la gestión de requisitos efectuados por sus clientes
- En una empresa contratadora de servicio: Personal encargado de la gestión de requerimiento del servicio de retiro de valores

#### Objetivos de Usuario
- Para una empresa contratadora de servicio: Codificar la información referida a un requerimiento de retiro de valores, para luego enviarla de forma segura (a través de e-mail) a su proveedor de servicio
- Para una empresa prestadora de servicio: Descrifrar la información enviada por su cliente (a través de e-mail) para iniciar un requisito de servicio logistico
####
Safe es una aplicación que permite fortalecer la relación y seguridad entre empresas prestadoras de servicio de transporte de valores y sus clientes, empresas contratadoras del servicio que necesitan 

## ¿Por qué nace Safe?
Safe nace a partir de la necesidad de resguardar la información especifica referida al retiro de valores de una empresa con su proveedor de servicio, con la finalidad de proteger la confidencialidad de los datos y restringuir el manejo de la información, además de evitar su maluso 

### Visión
Entregar una aplicación que permita aumentar el valor de sus clientes a través de la prestación de un servicio seguro y confiable para sus relaciones comerciales.

### Misión
Trabajar en conjunto con sus clientes para realizar optimizaciones a la aplicación en base a sus necesidades, desarrollando tecnologia de altos estandares en seguridad sumado a la entrega de soporte y capacitación constante.

# Resumen del Proyecto

Safe utiliza una de las técnicas más simples para cifrar un mensaje: El [Cifrado Cesar](https://en.wikipedia.org/wiki/Caesar_cipher). Este es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

## Planificación
Fue realizada a través de la plataforma Trello, haciendo el uso de tableros, los cuales contuvieron las tareas a llevar a cabo para la entrega del proyecto. Como también mediante _dailys_ diarios al inicio de cada jornada

## Prototipo
El prototipo indica el flujo de interacción del usuario con la aplicación
![prototipo](src/prototipo.JPG)
## Boceto
El boceto muestra el diseño inicial considerado para la aplicación
![boceto](src/boceto.JPG)

## Cómo usar la aplicación
- Acceder a la aplicación a través del [link](https://villarrealscarlette.github.io/SCL010-Cipher/src/index.html)
- Seleccionar el tipo de acceso a la aplicación
- Ingresar el RUT de Cliente Empresa (aquí se identifica al cliente que emite un requerimiento de servicio)
- Igresar información referida al requerimiento (para codificar o decodificar)
- Clickear boton para "Codificar" (clientes) o "Decodificar" (trabajador Safe)
- Clickear el boton "Copiar" para copiar la información obtenida
- *Opcionalmente clickear boton "Limpiar" para borrar la información ingresada
- Clickear boton "Inicio" para terminar 
