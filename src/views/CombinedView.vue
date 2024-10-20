<template>
    <div class="combined-view">
        <h1>Vista Combinada</h1>
        <div v-if="message" class="success-message">{{ message }}</div>
        <h2>Tareas del Usuario</h2>
        <div v-if="combinedTasks.length > 0">
            <div v-for="task in combinedTasks" :key="task.id" class="task-card">
                <TodoItem :title="task.todo" :completed="task.completed" @toggle-completion="updateTask(task)"
                    @delTodo="deleteTask(task.id)" />
            </div>
        </div>
        <AddTask @add-task="addNewTask" />
        <h2>Tareas Extraídas</h2>
        <button @click="fetchTasks" class="fetch-button">Cargar Tareas</button>
        <div v-if="tasks.length > 0">
            <div v-for="task in tasks" :key="task.id" class="task-card">
                <div class="task-content">
                    <p>{{ task.todo }}</p>
                    <button @click="addTaskFromApi(task)" class="add-task-button">Agregar Tarea</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddTask from "@/views/AddTask.vue";
import TodoItem from "@/components/TodoItem.vue";

export default {
    name: "CombinedView",
    components: {
        AddTask,
        TodoItem
    },
    data() {
        return {
            tasks: [],
            combinedTasks: [],
            message: '',
            tasksFetched: false
        };
    },
    props: {
        userTasks: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        fetchTasks() {
            if (!this.tasksFetched) {
                fetch('https://dummyjson.com/todos')
                    .then(response => response.json())
                    .then(data => {
                        this.tasks = data.todos;
                        this.$emit('fetched-tasks', data.todos);
                        this.tasksFetched = true;
                    })
                    .catch(error => {
                        console.error('Error fetching tasks:', error);
                    });
            }
        },
        addNewTask(newTask) {
            this.combinedTasks.push(newTask);
            this.message = "¡Tarea agregada exitosamente!";
            setTimeout(() => this.message = '', 3000);
        },
        addTaskFromApi(task) {
            const taskToAdd = { ...task, id: Date.now() };
            this.combinedTasks.push(taskToAdd);
            this.message = "¡Tarea de la API agregada exitosamente!";
            setTimeout(() => this.message = '', 3000);
        },
        updateTask(updatedTask) {
            const index = this.combinedTasks.findIndex(task => task.id === updatedTask.id);
            if (index !== -1) {
                this.combinedTasks[index].completed = !this.combinedTasks[index].completed;
            }
        },
        deleteTask(taskId) {
            this.combinedTasks = this.combinedTasks.filter(task => task.id !== taskId);
        }
    },
    created() {
        this.combinedTasks = [...this.userTasks];
    }
};
</script>

<style scoped>
.success-message {
    color: green;
    margin-bottom: 10px;
}

.combined-view {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
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
</style>