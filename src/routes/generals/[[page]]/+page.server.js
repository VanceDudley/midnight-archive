import { generalPosts } from '$lib/data/combined'
import { paginate } from '$lib/util'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let page = params.page ? parseInt(params.page) : 1
  let limit = 10

  const postsForPage = paginate(generalPosts, { limit, page })

  // if page doesn't exist, 404
  if (postsForPage.length === 0 && page > 1) {
    throw error(404, 'Page not found')
  }

  return {
    posts: postsForPage,
    page,
    limit
  }
}
