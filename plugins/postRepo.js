import postRepository from "~/app/api/post/PostRepository"

export default (ctx, inject) => {
    inject('postRepo', postRepository(ctx.$axios))
}

// export default ({ app }, inject) => {
//     // Inject $hello(msg) in Vue, context and store.
//     inject('hello', msg => console.log(`Hello ${msg}!`))
//   }
  
  