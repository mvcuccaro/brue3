<template>
  <div class="p-0 pt-4 pb-4" id="search">
    <div class="col-sm-12 text-end pe-4">
      Quick Search:
      <input type="text" v-model="searchTerm" @keyup.enter="handleUpdate" />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['update'])
import { ref } from 'vue'
const searchTerm = ref('')

/**
 * Emit the current search term to the parent
 */
function handleUpdate() {
  emit('update', searchTerm.value)
}
</script>

<style scoped>
#search {
  background-color: whitesmoke;
}
</style>
