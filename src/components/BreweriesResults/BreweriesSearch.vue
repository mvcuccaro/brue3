<template>
  <div class="p-2 pt-4 pb-4" id="search">
    <div class="row">
      <div class="col-xs-12 col-sm-6 text-end pe-4">
        <div class="row">
          <div class="col-xs-12  col-sm-8 p-2">
            <input type="text" v-model="searchTerm" @keyup.enter="handleUpdate" class="form-control"/>
          </div>
          <div class="col-xs-12 p-2 col-sm-4 text-start">
            <button class="btn btn-primary" style="width:100%" @click="handleUpdate">Search</button>
          </div>
        </div>
      </div>
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
