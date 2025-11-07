<template>
  <div>
    header
    <Button></Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "vite-common";

export default defineComponent({
  name: "Header",
  components: { Button },
  data() {
    return {};
  },
});
</script>
