<script setup lang="ts">
interface Props {
  text: string;
}

const props = defineProps<Props>();
</script>

<template>
  <button>{{ props.text }}</button>
</template>
