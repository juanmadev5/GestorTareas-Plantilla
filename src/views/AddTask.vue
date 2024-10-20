<template>
    <div class="add-task-container">
        <h1>Añadir Tarea</h1>
        <div class="input-group">
            <input v-model="newTask" @keyup.enter="addTask" placeholder="Añadir nueva tarea" class="task-input" />
            <button @click="addTask" class="add-button">Añadir</button>
        </div>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </div>
</template>

<script>
export default {
    name: "AddTask",
    data() {
        return {
            newTask: "",
            successMessage: "",
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
            this.successMessage = "Tarea creada exitosamente";
            setTimeout(() => {
                this.successMessage = "";
            }, 3000);
        }
    }
};
</script>

<style scoped>
.add-task-container {
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
}

.input-group {
    display: flex;
    margin-bottom: 20px;
}

.task-input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.add-button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-left: 10px;
    border-radius: 4px;
    cursor: pointer;
}

.add-button:hover {
    background-color: #218838;
}

.success-message {
    color: green;
    font-weight: bold;
}
</style>