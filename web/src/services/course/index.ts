import { createFetch } from '@vueuse/core'

export const useCourseFetch = createFetch({
  baseUrl: 'http://localhost:3000/api/courses',
  fetchOptions: {
    mode: 'cors'
  }
})

export default useCourseFetch
