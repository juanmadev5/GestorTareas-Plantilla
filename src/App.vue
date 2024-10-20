<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg" style="background-color: #007bff;">
      <a href="/" class="navbar-brand" style="color: #ffffff;margin-left: 8px;">Gestor de Tareas</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/createtask">
              <i class="fas fa-plus" style="margin-right: 8px;"></i>
              <span class="nav-text">Agregar Tarea</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tasklist">
              <i class="fas fa-arrow-down" style="margin-right: 8px;"></i>
              <span class="nav-text">Extraer Tareas</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/combinedview">
              <i class="fas fa-th-list" style="margin-right: 8px;"></i>
              <span class="nav-text">Vista Combinada</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view :tasks="fetchedTasks" :userTasks="userTasks" @add-task="addTask" @update-task="updateTask"
      @delete-task="deleteTask" @fetched-tasks="setFetchedTasks" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fetchedTasks: [],
      userTasks: [],
    };
  },
  methods: {
    addTask(newTask) {
      this.userTasks.push(newTask);
    },
    updateTask(updatedTask) {
      const index = this.userTasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        this.userTasks[index].completed = !this.userTasks[index].completed;
      }
    },
    deleteTask(taskId) {
      this.userTasks = this.userTasks.filter(task => task.id !== taskId);
    },
    setFetchedTasks(tasks) {
      this.fetchedTasks = tasks;
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
}

.navbar {
  margin-bottom: 20px;
}

.navbar-nav .nav-link {
  color: #ffffff;
}

.navbar-nav .nav-link:hover {
  color: #dcdcdc;
}
</style>
