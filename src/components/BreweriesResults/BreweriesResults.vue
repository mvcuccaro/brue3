<template>
  <div id="brewery_results" class="m-4" @scroll="onScroll">
    <div class="p-0 pe-2">
      <div class="row no-gutter rowheader">
        <div class="col-sm-4">Name</div>
        <div class="col-sm-4">City</div>
        <div class="col">State</div>
        <div class="col text-end">View</div>
      </div>
    </div>
    <div v-for="item in items" class="border-bottom highlight">
      <brewery-row :item="item" @click="handleRowClick" />
    </div>
  </div>
  <div class="modal" tabindex="-1" ref="myModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ currentItem.name }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <ul>
            <li v-for="item in Object.keys(currentItem).filter((i) => !['id'].includes(i))">
              {{ prettyName(item) }} : {{ currentItem[item] || 'N/A' }}
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Modal } from 'bootstrap'
import { BreweryRow } from '@/components/BreweriesResults'
import { toRefs, ref } from 'vue'
const props = defineProps({
  items: Array
})
const emit = defineEmits(['loadMore'])
const { items } = toRefs(props)
const currentItem = ref({})
const myModal = ref(null) //reference to modal dialog

/**
 * emit load more event at scroll bottom.
 * @param e
 */
function onScroll({ target: e }) {
  if (e.scrollTop + e.clientHeight >= e.scrollHeight) {
    console.log('more')
    emit('loadMore')
  }
}

/**
 * display modal for clicked item
 * @param e
 */
function handleRowClick(e) {
  currentItem.value = e.value
  const x = new Modal(myModal.value)
  x.show()
}

/**
 * make the key a prettier name
 * @param {string } name
 * @returns {*}
 */
function prettyName(name) {
  return name
    .split('_')
    .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
    .join(' ')
}
</script>

<style scoped>
#brewery_results {
  height: 50vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

.rowheader {
  font-weight: bold;
  font-size: 20px;
}

.highlight:hover {
  background-color: yellow;
  cursor: pointer;
}
</style>
