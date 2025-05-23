import { generalPosts } from '$lib/data/combined'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { slug } = params

  // get post with metadata
  const post = generalPosts.find((post) => slug === post.slug)

  if (!post) {
    throw error(404, 'Post not found')
  }

  return {
    post
  }
}
