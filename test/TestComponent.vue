<script lang="ts">
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
</script>

<template>
    <div class="counter">
        <h2>Counter: {{ count }}</h2>
        <button
            @click="increment"
        >
            Increment
        </button>
        <button
            @click="decrement"
        >
            Decrement
        </button>
    </div>
</template>

<style scoped>
.counter {
  text-align: center;
  margin: 20px;
}
</style>
