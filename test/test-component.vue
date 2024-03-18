<!-- only ts is allowed for script -->
<script setup lang="ts">
// declare interfaces first
import { ref } from 'vue';

interface Props {
    count: number;
    statusMessage?: string;
}

type Emits = {
    update: [value: number];
}

const props = withDefaults(defineProps<Props>(), {
    statusMessage: 'Everything works',
});

const emit = defineEmits<Emits>();

// ref needs to be typed if it can not be inferred
const incrementButton = ref<HTMLButtonElement>();

const increment = () => {
    emit('update', props.count - 1);
};

const decrement = () => {
    emit('update', props.count + 1);
};
</script>

<template>
    <div class="counter">
        <h2>Counter: {{ count }}</h2>
        <button
            ref="incrementButton"
            @click="increment"
        >
            Increment
        </button>
        <button
            disabled
            @click="decrement"
        >
            Decrement
        </button>
    </div>
</template>

<style scoped lang="scss">
.counter {
    text-align: center;
    margin: 20px;
}
</style>

<!-- only yaml is allowed for i18n -->
<i18n lang="yaml">
en:
    someKey: someTranslations
</i18n>
