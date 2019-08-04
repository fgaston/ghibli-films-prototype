# Ghibli films

## Descripción
El problema que quise resolver consiste en la búsqueda de las peliculas de estudio Ghibli.
Para resolverlo utilicé el [API del studio Ghibli](https://ghibliapi.herokuapp.com/#) para cargar todas las peliculas cuando la aplicación se lanza y un buscador que filtra automaticamente la lista de las peliculas basado en el titulo de la pelicula.

## Arquitectura
Para implementar el prototipo decidí usar el boilerplate de Facebook ([Create React App](https://github.com/facebook/create-react-app)) y así concentrarme en temas de UX y la implementación de los componentes necesarios a la aplicación.
El código se encuentra a dentro de la carpeta de /src, los componentes de React se encuentran en la carpeta de /App y agregué un carpeta de utils que por el momento solo tiene la configuración del API con Axios.

## Mejoras
En el futuro se podría agregar un state manager como Redux o Mobx para evitar de pasar cada props entre los componentes. En mi caso como tengo un número de componentes limitado decidí usar el state de React directamente.
Del lado del CSS utilicé a Flexbox para armar el grid pero si se puede definir cual browsers se necesita soportar, se podría utilisar CSS grid por ejemplo (no está soportado en todos los browsers).
Para armar el build también se podría usar una configuración propia de Webpack en lugar de usar la configuración muy generica de create-react-app.

## Link al código
[En este componente esta la conexión al API y el filtro de las peliculas](https://github.com/fgaston/ghibli-films-prototype/blob/master/src/App/App.js#L8)

## Link a la aplicación
[https://ghilbi-films.firebaseapp.com/](https://ghilbi-films.firebaseapp.com/)