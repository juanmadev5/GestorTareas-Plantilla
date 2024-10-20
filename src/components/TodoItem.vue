<template>
  <div class="todo-item">
    <div class="todo-header">
      <h5 :class="{ completed: completed }">{{ title }}</h5>
      <span :class="{ 'status-completed': completed, 'status-pending': !completed }">
        {{ completed ? 'Completada' : 'Pendiente' }}
      </span>
    </div>

    <div class="button-group">
      <button @click="$emit('toggle-completion')" class="toggle-button" aria-label="Marcar como completada">
        <i class="fas" :class="completed ? 'fa-undo' : 'fa-check'"></i>
      </button>
      <button @click="$emit('delTodo')" class="delete-button" aria-label="Eliminar tarea">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    title: String,
    completed: Boolean,
  }
}
</script>

<style scoped>
.todo-item {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
}

.todo-header {
  flex: 1;
}

h5 {
  margin: 0;
  font-size: 1.2em;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

.status-completed {
  color: #28a745;
  font-weight: bold;
}

.status-pending {
  color: #dc3545;
  font-weight: bold;
}

.button-group {
  display: flex;
  gap: 10px;
}

.toggle-button,
.delete-button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  background: none;
}

.toggle-button:hover {
  background-color: rgba(0, 123, 255, 0.1);
}

.delete-button:hover {
  background-color: rgba(220, 53, 69, 0.1);
}

i {
  font-size: 1.2em;
  color: #007bff;
}

.delete-button i {
  color: #dc3545;
}
</style>
