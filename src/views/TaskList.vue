<template>
    <div class="task-list-container">
        <h1>Lista de Tareas</h1>
        <button @click="fetchTasks" class="fetch-button">Cargar Tareas</button>
        <div v-if="tasks.length > 0" class="task-list">
            <div v-for="task in tasks" :key="task.id" class="task-item-wrapper">
                <TodoItem :title="task.todo" :completed="task.completed" @toggle-completion="toggleTaskCompletion(task)"
                    @delTodo="deleteTask(task)" />
            </div>
        </div>
        <div v-else class="no-tasks">No hay tareas disponibles</div>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
    name: "TaskList",
    components: {
        TodoItem
    },
    data() {
        return {
            tasks: [],
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
                    this.tasks = data.todos;
                })
                .catch(error => {
                    console.error('Error fetching tasks:', error);
                });
        },
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
    },
    created() {
        this.fetchTasks();
    }
};
</script>

<style scoped>
.task-list-container {
    padding: 20px;
    max-width: 600px;
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

.fetch-button {
    display: block;
    margin: 0 auto 20px;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.fetch-button:hover {
    background-color: #0056b3;
}

.task-list {
    margin-top: 20px;
}

.task-item-wrapper {
    margin-bottom: 10px;
}

.no-tasks {
    text-align: center;
    color: gray;
    font-size: 1.2em;
}
</style>
