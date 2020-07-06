// api/src/graphql/photo.sdl.js

export const schema = gql`
  type Analysis {
    photoUrl: String!
    tags: [Tag!]
  }

  type Tag {
    confidence: String!
  }

  type Query {
    getAnalysis(photoUrl: String!): Analysis!
  }
`
