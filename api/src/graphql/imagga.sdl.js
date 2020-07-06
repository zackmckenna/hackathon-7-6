// api/src/graphql/photo.sdl.js

export const schema = gql`
  type Analysis {
    photoUrl: String!
    results : [Result!]
  }

  type Result {
    confidence: Int!
    tag: {
      en: String!
    }
  }

  type Query {
    getAnalysis(photoUrl: String!): Analysis!
  }
`
