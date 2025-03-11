<script>
  import '../app.css'
  import '../prism.css'
  import { browser } from '$app/environment'
  import { name } from '$lib/info'
  import { page } from '$app/stores'

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  import { onMount, onDestroy } from 'svelte'
  import { afterNavigate, onNavigate } from '$app/navigation'

  let canvas
  let ctx
  let stars = []
  const numStars = 100

  function initializeStars() {
    stars = Array.from({ length: numStars }, () => ({
      x_offset: Math.random() * canvas.width,
      y_offset: Math.random() * canvas.height,
      size: Math.random() * 2,
      vert_speed: Math.random() * 0.1 + 0.015,
      horz_speed: Math.random() * 0.2 + 0.05
    }))
  }

  function animate() {
    canvas.height = document.documentElement.offsetHeight
    ctx.fillStyle = ctx.createLinearGradient(0, 0, 0, canvas.height)
    ctx.fillStyle.addColorStop(0, '#000000')
    ctx.fillStyle.addColorStop(1, '#060a13')
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = 'white'
    stars.forEach((star) => {
      ctx.beginPath()
      ctx.arc(
        star.x_offset % canvas.width,
        star.y_offset % canvas.height,
        star.size,
        0,
        Math.PI * 2
      )
      ctx.fill()
    })

    stars.forEach((star) => {
      star.x_offset += star.horz_speed
      star.y_offset += star.vert_speed
    })
    requestAnimationFrame(animate)
  }

  function resizeCanvas() {
    if (!browser) return
    canvas.width = window.innerWidth
    canvas.height = document.documentElement.offsetHeight
    initializeStars()
  }

  onMount(() => {
    if (!browser) return
    ctx = canvas.getContext('2d')
    resizeCanvas()
    animate()
    window.addEventListener('resize', resizeCanvas)
  })

  onDestroy(() => {
    if (!browser) return
    window.removeEventListener('resize', resizeCanvas)
  })
</script>

<div class="flex flex-col min-h-screen">
  <div class="flex flex-col flex-grow w-full px-4 py-2">
    <header class="flex items-center justify-between w-full max-w-2xl py-4 mx-auto lg:pb-8">
      <a
        class="text-lg font-bold sm:text-2xl !text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-400"
        href="/"
      >
        {name}
      </a>
    </header>
    <main
      class="flex flex-col flex-grow w-full mx-auto"
      class:max-w-2xl={!$page.data.layout?.fullWidth}
    >
      <slot />
    </main>
  </div>
  <canvas
    class="absolute -z-10 top-0 h-full w-screen bg-gradient-to-b from-black to-[#060a13]"
    bind:this={canvas}
  ></canvas>
</div>
