const TMDB_API_URL = 'https://api.themoviedb.org/3'

export default defineEventHandler(async (event) => {
  const { TMDB_API_KEY } = useRuntimeConfig();

  if (!TMDB_API_KEY) {
    throw new Error('TMDB API key is not set')
  }

  const query = getQuery(event)

  try {
    return await $fetch(event.context.params!.path, {
      baseURL: TMDB_API_URL,
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        ...query,
      },
      headers: {
        Accept: 'application/json',
      },
    })
  } catch (e: any) {
    const status = e?.response?.status || 500
    setResponseStatus(event, status)
    return {
      error: String(e)?.replace(TMDB_API_KEY, '***'),
    }
  }
});
