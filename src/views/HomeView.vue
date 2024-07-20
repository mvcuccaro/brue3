<template>
  <div>
    <div class="row no-gutter">
      <div class="col">
        <breweries-search @update="handleSearchUpdate" />
      </div>
    </div>
    <div>
      <breweries-results :items="cBreweries" @loadMore="handleLoadMore" />
    </div>
    <div class="text-center">
      <div class="spinner-border" role="status" v-if="cLoading">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useBreweriesStore } from '@/stores/breweries.js'
import { storeToRefs } from 'pinia'
import BreweriesResults from '@/components/BreweriesResults'
import { BreweriesSearch } from '@/components/BreweriesResults/index.js'
const store = useBreweriesStore()
const { fetchData } = store
const { getData: cBreweries, getLoading: cLoading } = storeToRefs(store)

let page = 1 //start of data page
let searchTerm = '' //local search term

/**
 * Increment page and append data to store
 */
function handleLoadMore() {
  page++
  console.log(page)
  fetchData({ limit: 50, page: page, searchTerm: searchTerm, append: true })
}

/**
 * reset the page and get search results;
 * @param e EventData
 */
function handleSearchUpdate(e) {
  page = 1
  searchTerm = e
  fetchData({ limit: 50, page: page, searchTerm: searchTerm })
}

/**
 * fetch data on mount
 */
onMounted(() => {
  fetchData({ limit: 50, page: page })
})
</script>
