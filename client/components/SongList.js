import React, { Component } from 'react'
import gql from 'graphql-tag' // helper to write queries inside the component file
import { graphql } from 'react-apollo'

class SongList extends Component {
  render() {
    console.log(this.props)
    return <div>SongList</div>
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`

export default graphql(query)(SongList)
