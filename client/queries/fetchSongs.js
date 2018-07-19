import gql from 'graphql-tag' // helper to write queries inside the component file

export default gql`
  {
    songs {
      id
      title
    }
  }
`
