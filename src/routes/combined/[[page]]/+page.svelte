<script>
  import { name } from '$lib/info.js'
  import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte'
  import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
  import PostsList from '$lib/components/PostsList.svelte'

  /** @type {import('./$types').PageData} */
  export let data

  $: isFirstPage = data.page === 1
  $: hasNextPage = data.posts[data.posts.length - 1]?.previous
</script>

<svelte:head>
  <title>{name} | Poems</title>
</svelte:head>

<div class="flex flex-col flex-grow">
  <header class="pt-4">
    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
      Everything published on the Midnight Archive
    </h1>
    <p class="mt-6">A collection of all my published content from the Midnight Archive</p>
  </header>

  <div class="mt-16 sm:mt-20">
    <PostsList posts={data.posts} />
  </div>

  <!-- pagination -->
  <div class="flex items-center justify-between pt-16 pb-8">
    {#if !isFirstPage}
      <a
        href={`/${data.subdir.substring(0, data.subdir.length - 1)}/${data.page - 1}`}
        data-sveltekit-prefetch
      >
        <ArrowLeftIcon class="w-4 h-4" />
        Previous
      </a>
    {:else}
      <div></div>
    {/if}

    {#if hasNextPage}
      <a
        href={`/${data.subdir.substring(0, data.subdir.length - 1)}/${data.page + 1}`}
        data-sveltekit-prefetch
        >Next
        <ArrowRightIcon class="w-4 h-4" />
      </a>
    {/if}
  </div>
</div>

<style>
  @import 'tailwindcss';

  a {
    @apply flex items-center gap-2 font-semibold text-zinc-300;
  }
</style>
