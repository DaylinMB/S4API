# Sprint 4 Daylin Mejia

## Introduction

Este proyecto consiste en una página web que proporciona chistes aleatorios para ayudar a los empleados de una empresa a empezar el día con buen humor. Los chistes ofrecidos son de dos tipos: chistes normales y chistes sobre Chuck Norris. Además, los usuarios tienen la posibilidad de calificar cada chiste con una puntuación del 1 al 3.

En la parte superior de la pantalla, también se muestra la información meteorológica, lo cual puede ser útil para planificar el día desde primera hora.

## Ejecución del proyecto

Para visualizar los cambios o ejecutar en modo de observación (watch), utiliza el siguiente comando:
```bash
$ npx tsc index.ts -W O npm start
```
Este comando asegura que cualquier cambio en el archivo index.ts se compile automáticamente y que el proyecto se inicie correctamente con npm start.

## Detalles del Código

El código proporciona dos funciones asincrónicas para obtener chistes aleatorios desde diferentes fuentes (printJoke para chistes normales y jokesChuckNorris para chistes de Chuck Norris). Estas funciones se activan al hacer clic en un botón y muestran el chiste obtenido en el elemento jokesHere del DOM.

Además, hay funcionalidad para registrar la calificación de los chistes y mostrar la información meteorológica actual de Barcelona, incluyendo una representación gráfica del estado del cielo.
