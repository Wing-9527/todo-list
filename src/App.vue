<template>
  <div class="container">
    <header>
      <h1>Todo List</h1>
    </header>
    <main>
      <input type="text" v-model="inputValue" @keydown.enter="insertTodoItem">
      <ul>
        <li v-for="item in todoList" :key="item.id" class="todo-list__item">
          {{ item.todo }}
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  let inputValue = ref<string>('')
  let todoList = reactive<TodoListItem[]>([])

  /** @func 添加待办事项 */
  function insertTodoItem(event: KeyboardEvent) {
    console.log(event);
    let value = (event.target as HTMLInputElement).value
    let item: TodoListItem = {
      id: Date.now(),
      todo: value
    }
    todoList.push(item)
    inputValue.value = ''
  }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .todo-list__item {
    width: 100px;
  }
</style>
