// api/src/graphql/photo.sdl.js

export const schema = gql`
  type Analysis {
    photoUrl: String!
    tags: [Tag!]
  }

  type Tag {
    confidence: Float!
  }

  type Query {
    getAnalysis(photoUrl: String!): Analysis!
  }
`
