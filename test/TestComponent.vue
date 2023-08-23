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

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    };

    const decrement = () => {
      count.value--;
    };

    return {
      count,
      increment,
      decrement,
    };
  },
};
</script>

<style scoped>
.counter {
  text-align: center;
  margin: 20px;
}
</style>
