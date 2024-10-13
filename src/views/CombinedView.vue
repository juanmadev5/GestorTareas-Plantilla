<template>
    <div>
        <AddTask @add-task="addNewTask" />
        <TaskList :tasks="tasks" @update-task="updateTask" />
    </div>
</template>

<script>
import TaskList from '@/views/TaskList.vue';
import AddTask from '@/views/AddTask.vue';

export default {
    name: "CombinedView",
    components: {
        TaskList,
        AddTask,
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
        addNewTask(newTask) {
            this.tasks.unshift(newTask);
        },
        updateTask(task) {
            const index = this.tasks.findIndex(t => t.id === task.id);
            if (index !== -1) {
                this.tasks[index] = task;
            }
        },
    },
    created() {
        this.fetchTasks();
    },
};
</script>

<style scoped>
/* Aquí pueden agregar estilos personalizados para el componente. */
.combined-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.add-task {
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
}

.task-list {
    width: 100%;

    max-width: 600px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}
</style>
