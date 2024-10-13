<template>
    <div class="add-task-container">
        <h1>Añadir Tarea</h1>
        <div class="input-group">
            <input 
                v-model="newTask" 
                @keyup.enter="addTask" 
                placeholder="Añadir nueva tarea" 
                class="task-input"
            />
            <button @click="addTask" class="add-button">Añadir</button>
        </div>

        <div v-if="tasks.length > 0" class="task-list">
            <div v-for="task in tasks" :key="task.id" class="task-item">
                <span :class="{ completed: task.completed }">{{ task.todo }}</span>
                <div>
                    <button @click="toggleTaskCompletion(task)" class="toggle-button">
                        {{ task.completed ? 'Desmarcar' : 'Completar' }}
                    </button>
                    <button @click="deleteTask(task)" class="delete-button">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddTask",
    props: {
        tasks: Array,
    },
    data() {
        return {
            newTask: "",
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() === "") return;

            const newTask = {
                todo: this.newTask,
                completed: false,
                id: Date.now(),
            };
            this.$emit('add-task', newTask);
            this.newTask = "";
        },
    },
};
</script>

<style scoped>
.add-task-container {
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #343a40;
    margin-bottom: 20px;
}

.input-group {
    display: flex;
    gap: 10px; /* Espacio entre los elementos */
}

.task-input {
    flex-grow: 1;
    padding: 12px;
    border: 2px solid #007bff;
    border-radius: 5px;
    transition: border-color 0.3s ease;
}

.task-input:focus {
    outline: none;
    border-color: #0056b3; /* Cambia el borde al enfocar */
}

.add-button {
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-button:hover {
    background-color: #0056b3; /* Color al pasar el mouse */
}

.task-list {
    margin-top: 20px;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: #ffffff;
    transition: box-shadow 0.3s ease;
}

.task-item:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.completed {
    text-decoration: line-through;
    color: gray;
}

.toggle-button, .delete-button {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

.toggle-button {
    background-color: #28a745; /* Color para Completar */
    color: white;
    margin-right: 5px;
    transition: background-color 0.3s ease;
}

.toggle-button:hover {
    background-color: #218838; /* Color al pasar el mouse */
}

.delete-button {
    background-color: #dc3545; /* Color para Eliminar */
    color: white;
    transition: background-color 0.3s ease;
}

.delete-button:hover {
    background-color: #c82333; /* Color al pasar el mouse */
}
</style>
