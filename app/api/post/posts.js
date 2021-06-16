
const baseURL = 'https://jsonplaceholder.typicode.com/todos'

export default ($axios) => ({
    posts: () => $axios.$get(baseURL),
    post: (id) => $axios.$get(`${baseURL}/${id}`)
})

