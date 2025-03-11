<script>
  import { afterNavigate } from '$app/navigation'
  import ArrowLeftIcon from './ArrowLeftIcon.svelte'

  // if we came from posts, we will use history to go back to preserve
  // posts pagination
  let canGoBack = false
  afterNavigate(({ from }) => {
    if (
      (from && from.url.pathname.startsWith('/poem')) ||
      from.url.pathname.startsWith('/review') ||
      from.url.pathname.startsWith('/writing') ||
      from.url.pathname.startsWith('/combined')
    ) {
      canGoBack = true
    }
  })

  function goBack() {
    if (canGoBack) {
      history.back()
    }
  }

  export let target
</script>

<div class="hidden lg:block pt-8">
  <div class="sticky top-0 w-full flex justify-end pt-11 pr-8">
    <svelte:element
      this={canGoBack ? 'button' : 'a'}
      role="button"
      tabindex="0"
      class="items-center justify-center hidden w-10 h-10 mb-8 transition rounded-full shadow-md -top-1 -left-16 lg:flex group shadow-zinc-800/5 border border-zinc-700/50 bg-zinc-800 ring-0 focus-visible:ring-2 ring-white/10 hover:border-zinc-700 hover:ring-white/20"
      href={canGoBack ? undefined : target}
      aria-label="Go back"
      on:click={goBack}
      on:keydown={goBack}
    >
      <ArrowLeftIcon class="w-4 h-4 transition stroke-zinc-500 group-hover:stroke-zinc-400" />
    </svelte:element>
  </div>
</div>
