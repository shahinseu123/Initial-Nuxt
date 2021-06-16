import posts from "@/app/api/post/posts"


export default ($axios) => ({
    posts: posts($axios)
})

