<script>
  import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
  import PostsList from '$lib/components/PostsList.svelte'
  import SocialLinks from '$lib/components/SocialLinks.svelte'
  import { avatar, bio, name } from '$lib/info.js'

  /** @type {import('./$types').PageData} */
  export let data
</script>

<svelte:head>
  <title>{name}</title>
  <meta name="description" content={bio} />
</svelte:head>

<div class="flex flex-col flex-grow gap-8 pb-16">
  <!-- bio -->
  <section class="flex flex-col items-center gap-16 pt-8 pb-16">
    <div class="flex flex-col items-center w-full gap-6 rounded-lg">
      <img src={avatar} alt={name} class="mx-auto rounded-full w-36 h-36 ring-2 ring-zinc-700" />
      <div class="flex gap-6">
        <SocialLinks />
      </div>
      <p class="text-base text-zinc-400">
        {bio}
      </p>
    </div>
  </section>
  <section class="w-full">
    <div class="flex items-center justify-between gap-4 mb-8">
      <h2 class="text-sm font-semibold sm:text-base text-zinc-400">Recently Published</h2>
      <a
        href="/combined"
        class="flex items-center gap-1 text-sm font-semibold text-violet-500 px-2 py-1 hover:bg-zinc-800/50 rounded-md transition-colors duration-150 ease-in-out"
        >View All <ArrowRightIcon class="w-4 h-4" /></a
      >
    </div>
    <PostsList posts={data.posts} />
  </section>
</div>
