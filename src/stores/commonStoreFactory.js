import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * Extract json from result and set it to the store
 * @param data api call result
 * @param append append data or replace it
 * @returns {function(*): *}
 */
const setData = (data, append) => (r) => {
  return r.json().then((j) => {
    data.value = append ? [...data.value, ...j] : j
  })
}

/**
 * Factory to create stores that match common api and store signatures.
 * @param {object} api - object providing common rest services
 * @param {string}id - name of the store module
 * @param ttl - time till expire data
 * @returns {StoreDefinition}
 */
export const commonStoreFactory = (api, id, ttl = 0) => {
  const { search } = api
  return defineStore(id, () => {
    const data = ref([])
    const loading = ref(false)

    /**
     *
     * @param limit - number of records
     * @param page - requested page
     * @param searchTerm - search term if any
     * @param append - append or replace store data
     * @returns {*}
     */
    function fetchData({ limit = 15, page = 0, searchTerm = '', append = false }) {
      loading.value = true

      //
      return search({ limit: limit, page: page, searchTerm: searchTerm })
        .then(setData(data, append))
        .then(() => {
          loading.value = false
        })
        .catch(() => {
          data.value.meta = { error: 'fetchData failed' }
        })
    }

    //getters
    const getData = computed(() => data.value)
    const getLoading = computed(() => loading.value)

    return { data, fetchData, getData, getLoading }
  })
}
