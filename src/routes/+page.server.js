import { combinedPosts } from '$lib/data/combined'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        posts: combinedPosts.slice(0, 5)
      };
}
