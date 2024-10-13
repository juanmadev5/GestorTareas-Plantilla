<template>
    <!-- Contenedor principal del ítem de tarea -->
    <div class="todo-item">
      <!-- Contenedor del título y el estado de la tarea -->
      <div class="todo-header">
        <!-- Muestra el título de la tarea y aplica un estilo tachado si la tarea está completada -->
        <h5 :class="{ completed: completed }">{{ title }}</h5>
  
        <!-- Muestra si la tarea está Completada o Pendiente -->
        <span :class="{ 'status-completed': completed, 'status-pending': !completed }">
          {{ completed ? 'Completada' : 'Pendiente' }}
        </span>
      </div>
  
      <!-- Contenedor de botones de acción -->
      <div class="button-group">
        <!-- Botón para marcar la tarea como completada o pendiente -->
        <button @click="$emit('toggle-completion')" class="toggle-button" aria-label="Marcar como completada">
          <i class="fas" :class="completed ? 'fa-undo' : 'fa-check'"></i>
        </button>
  
        <!-- Botón para eliminar la tarea de la lista -->
        <button @click="$emit('delTodo')" class="delete-button" aria-label="Eliminar tarea">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Define el nombre del componente
    name: 'TodoItem',
  
    // Define las propiedades que este componente recibirá del componente padre
    props: {
      title: String,      // Título de la tarea
      completed: Boolean, // Estado de la tarea (completada o pendiente)
    }
  }
  </script>
  
  <style scoped>
  .todo-item {
    background-color: #ffffff; /* Fondo blanco para un buen contraste */
    border: 1px solid #e0e0e0; /* Borde sutil */
    border-radius: 8px; /* Bordes redondeados */
    padding: 15px; /* Espaciado interno */
    margin-bottom: 10px; /* Espaciado entre ítems */
    display: flex; /* Usar flexbox para disposición */
    justify-content: space-between; /* Espacio entre elementos */
    align-items: center; /* Centrar verticalmente */
    transition: all 0.3s; /* Animación suave en cambios de estado */
  }
  
  .todo-header {
    flex: 1; /* Permitir que el título ocupe el espacio disponible */
  }
  
  h5 {
    margin: 0; /* Sin margen para un diseño más limpio */
    font-size: 1.2em; /* Tamaño de fuente del título */
  }
  
  .completed {
    text-decoration: line-through; /* Tachar texto si está completada */
    color: gray; /* Color gris para tareas completadas */
  }
  
  .status-completed {
    color: #28a745; /* Verde para tareas completadas */
    font-weight: bold; /* Negrita para destacar */
  }
  
  .status-pending {
    color: #dc3545; /* Rojo para tareas pendientes */
    font-weight: bold; /* Negrita para destacar */
  }
  
  .button-group {
    display: flex; /* Usar flexbox para disposición de botones */
    gap: 10px; /* Espacio entre botones */
  }
  
  .toggle-button,
  .delete-button {
    padding: 10px; /* Espaciado interno para botones */
    border: none; /* Sin borde */
    border-radius: 5px; /* Bordes redondeados */
    cursor: pointer; /* Cambiar cursor al pasar por encima */
    transition: background-color 0.3s; /* Suave animación al pasar el mouse */
    background: none; /* Sin fondo */
  }
  
  .toggle-button:hover {
    background-color: rgba(0, 123, 255, 0.1); /* Fondo claro al pasar el mouse */
  }
  
  .delete-button:hover {
    background-color: rgba(220, 53, 69, 0.1); /* Fondo claro al pasar el mouse */
  }
  
  i {
    font-size: 1.2em; /* Tamaño del icono */
    color: #007bff; /* Color del icono */
  }
  
  .delete-button i {
    color: #dc3545; /* Color rojo para el icono de eliminar */
  }
  </style>
  