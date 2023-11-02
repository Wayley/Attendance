import { createFetch } from '@vueuse/core'

export const useRecordFetch = createFetch({
  baseUrl: 'http://localhost:3000/api/records',
  fetchOptions: {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }
})

export default useRecordFetch
