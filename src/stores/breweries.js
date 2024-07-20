import { commonStoreFactory } from './commonStoreFactory.js'
import { createSearch } from '@/api'

/**
 * Create an api for breweries
 * @type {{search: *}}
 */
const api = {
  search: createSearch({ dataset: 'breweries' })
}

//create and export a store for breweries
export const useBreweriesStore = commonStoreFactory(api, 'breweries', 60)
