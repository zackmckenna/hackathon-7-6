import fetch from 'node-fetch'

// const apiKey = 'acc_ff7310559602a71'
// const apiSecret = 'acb37d4460c05a1bacd64e7fe56e3796'

export const getAnalysis = async ({ photoUrl }) => {
  const response = await fetch(
    'https://api.imagga.com/v2/tags?image_url=https://docs.imagga.com/static/images/docs/sample/japan-605234_1280.jpg',
    {
      headers: {
        Authorization:
          'Basic YWNjX2ZmNzMxMDU1OTYwMmE3MTphY2IzN2Q0NDYwYzA1YTFiYWNkNjRlN2ZlNTZlMzc5Ng==',
      },
    }
  )

  const json = response.json()

  return {
    photoUrl,
    results: json.results,
  }
}
