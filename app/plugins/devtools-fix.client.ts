export default defineNuxtPlugin(() => {
  const LOG_FIX = import.meta.dev || Boolean(process.env.DEBUG_FIX)

  if (LOG_FIX) {
    console.log('[FIX] Devtools component inspector disabled to avoid VueElement style warning.')
  }
})
