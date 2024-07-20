/**
 * get a search query string if there is one.
 * @param s
 * @returns {string|string}
 */
const getQuery = (s) => (s ? `&query=${s}` : '')

const api = {
  createSearch:
    /**
     * take a record type and build a rest get out of it.
     * @param dataset
     * @returns {function({limit?: number, page?: number, searchTerm?: string}): Promise<Response>}
     */

      ({ dataset }) =>
      ({ limit = 15, page = 0, searchTerm = '' }) =>
        fetch(
          `https://api.openbrewerydb.org/v1/${dataset}${searchTerm ? '/search' : ''}?per_page=${limit}&page=${page}${getQuery(searchTerm)}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
}

export const { createSearch } = api
export default api
