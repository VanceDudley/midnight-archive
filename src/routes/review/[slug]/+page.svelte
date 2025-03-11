<script>
  import PostRender from '$lib/components/PostRender.svelte'

  /** @type {import('./$types').PageData} */
  export let data
</script>

<PostRender {data} target={'/reviews'} />
