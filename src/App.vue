<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-white p-2 m-4 rounded border">
    <div>
      <h2 class="text-blue">Brewery Search</h2>
      <div class="container-fluid m-0 p-0">
        <RouterView />
      </div>
    </div>
  </div>
</template>
