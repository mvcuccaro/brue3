<template>
  <div class="row no-gutter p-1 ps-2 pt-3" @click.prevent="handleClick">
    <div class="col-sm-4">{{ item.name }}</div>
    <div class="col-sm-4">{{ item.city }}</div>
    <div class="col">{{ item.state }}</div>
    <div class="col text-end">
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="3" stroke="#33363F" stroke-width="2" />
        <path
          d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z"
          stroke="#33363F"
          stroke-width="2"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
const emit = defineEmits(['click'])
const props = defineProps({
  item: Object
})

const { item } = toRefs(props)

/**
 * emit the clicked item to parent
 */
function handleClick() {
  emit('click', item)
}
</script>
