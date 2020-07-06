export const QUERY = gql`
  query($keyword: String!) {
    photo: getPhoto(keyword: $keyword) {
      keyword
      results {
        id
        alt_description
        urls {
          regular
          thumb
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ photo }) => {
  return photo.results.map((pho) => {
    return (
      <>
        <img key={pho.id} src={pho.urls.thumb}></img>
        <button className="bg-blue-200">ANALYZE</button>
      </>
    )
  })
}
