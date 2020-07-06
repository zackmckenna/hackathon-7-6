import fetch from 'node-fetch'

export const getPhoto = async ({ keyword }) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos/?page=1&query=${keyword}&client_id=KaWo66JHcHiZXKiD9FcIWpMqOYSZRkSNVUb2aNi8iAs`
  )

  const json = await response.json()

  return {
    keyword,
    results: json.results,
  }
}
