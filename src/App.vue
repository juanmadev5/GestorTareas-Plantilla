<template>
  <div id="app">
    <!-- Barra de navegación con enlaces a diferentes rutas -->
    <nav class="navbar navbar-expand-lg" style="background-color: #007bff;">
      <a class="navbar-brand" style="color: #ffffff;">Gestor de Tareas</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="fas fa-home"></i>
              <span class="nav-text">Inicio</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/addtask">
              <i class="fas fa-plus"></i>
              <span class="nav-text">Agregar Tarea</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">
              <i class="fas fa-info-circle"></i>
              <span class="nav-text">Acerca de</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="mobile-menu">
      <router-link to="/">
        <i class="fas fa-home"></i>
      </router-link>
      <router-link to="/addtask">
        <i class="fas fa-plus"></i>
      </router-link>
      <router-link to="/about">
        <i class="fas fa-info-circle"></i>
      </router-link>
    </div>

    <!-- Aquí se cargará el componente correspondiente a la ruta seleccionada -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f9fa;
  min-height: 100vh;
}

nav {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  font-size: 1.8em;
  color: #ffffff;
  margin-left: 20px;
}

.navbar-nav {
  display: flex;
}

.nav-link {
  font-weight: normal;
  color: #ffffff !important;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

nav a .fas {
  margin-right: 8px;
  font-size: 1.5em;
  color: #ffffff;
}

nav a .nav-text {
  display: inline;
}

@media (max-width: 768px) {
  nav a .nav-text {
    display: none;
  }

  .mobile-menu {
    display: block;
  }
}

.mobile-menu {
  display: none;
  padding: 10px;
  text-align: center;
}

.mobile-menu i {
  margin-right: 24px;
  font-size: 1.5em;
  color: #007bff;
}

@media (max-width: 768px) {
  .mobile-menu {
    display: block;
  }
}
</style>
