// api/src/graphql/photo.sdl.js

export const schema = gql`
  type Photo {
    keyword: String!
    location: String!
    results: [UnsplashPhoto]
  }

  type Query {
    getPhoto(keyword: String!): Photo!
  }

  type UnsplashPhoto {
    id: String!
    width: Int!
    height: Int!
    alt_description: String!
    urls: Urls
  }

  type Urls {
    regular: String!
    small: String!
    thumb: String!
  }
`
