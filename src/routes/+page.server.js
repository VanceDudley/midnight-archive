import { posts } from '$lib/data/posts'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    console.log(posts.component)
    return {
        posts: posts.slice(0, 5) // Exclude `component`
      };
}
