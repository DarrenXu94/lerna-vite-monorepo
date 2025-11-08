<template>
  <div>
    Header

    <DsButton text="Click Me" />
    <!-- Using MyButton component from ds-common package -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DsButton } from "ds-common"; // Importing DsButton from ds-common package

export default defineComponent({
  name: "DsHeader",
  components: { DsButton },
  data() {
    return {};
  },
});
</script>
