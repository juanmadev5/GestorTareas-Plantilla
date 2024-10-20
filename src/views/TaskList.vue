<template>
    <div class="task-list-container">
        <h1>Lista de Tareas</h1>
        <button @click="fetchTasks" class="fetch-button">Cargar Tareas</button>

        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>

        <div v-if="tasks.length > 0" class="task-list">
            <div v-for="task in tasks" :key="task.id" class="task-card">
                <div class="task-content">
                    <p>{{ task.todo }}</p>
                    <button @click="addTaskToUser(task)" class="add-task-button">Añadir Tarea</button>
                </div>
            </div>
        </div>
        <div v-else class="no-tasks">No hay tareas disponibles</div>
    </div>
</template>

<script>
export default {
    name: "TaskList",
    props: {
        tasks: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            successMessage: ''
        };
    },
    methods: {
        fetchTasks() {
            fetch('https://dummyjson.com/todos')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    this.$emit('fetched-tasks', data.todos);
                })
                .catch(error => {
                    console.error('Error fetching tasks:', error);
                });
        },
        addTaskToUser(task) {
            const newTask = {
                ...task,
                id: Date.now()
            };
            this.$emit('add-task', newTask);
            this.showSuccessMessage();
        },
        showSuccessMessage() {
            this.successMessage = '¡Tarea agregada exitosamente!';
            setTimeout(() => {
                this.successMessage = '';
            }, 3000);
        }
    }
};
</script>

<style scoped>
.task-list-container {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
}

.fetch-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
}

.fetch-button:hover {
    background-color: #0056b3;
}

.task-card {
    background-color: #f8f9fa;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task-content {
    flex-grow: 1;
}

.add-task-button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.add-task-button:hover {
    background-color: #218838;
}

.no-tasks {
    text-align: center;
    color: #999;
}

.success-message {
    color: green;
    margin-bottom: 10px;
}
</style>
