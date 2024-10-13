<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p class="description">
      Este es un proyecto de gestión de tareas utilizando Vue.js. Aquí puedes añadir, completar y eliminar tareas de forma sencilla.
    </p>
    <h3>Plugins de CLI Instalados</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Enlaces Esenciales</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Documentación Principal</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Foro</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Chat de la Comunidad</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">Noticias</a></li>
    </ul>
    <h3>Ecosistema</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello {
  padding: 20px;
  max-width: 800px; /* Ancho máximo para una mejor presentación */
  margin: 0 auto; /* Centrar el contenedor */
  background-color: #f8f9fa; /* Fondo claro */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra */
}

h1 {
  color: #343a40; /* Color del título */
  text-align: center;
}

.description {
  text-align: center;
  margin: 10px 0 20px; /* Espaciado */
  color: #6c757d; /* Color del texto de la descripción */
}

h3 {
  margin: 30px 0 10px; /* Espaciado */
}

ul {
  list-style-type: none; /* Sin viñetas */
  padding: 0;
  display: flex;
  flex-wrap: wrap; /* Asegura que los elementos se ajusten en diferentes pantallas */
  justify-content: center; /* Centrar los enlaces */
}

li {
  margin: 5px 15px; /* Espaciado entre elementos */
}

a {
  color: #007bff; /* Color del enlace */
  text-decoration: none; /* Sin subrayado */
}

a:hover {
  text-decoration: underline; /* Subrayado al pasar el mouse */
}
</style>
