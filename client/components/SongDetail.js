import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import fetchSongDetail from '../queries/fetchSongDetail'

import LyricCreate from './LyricCreate'

class SongDetail extends Component {
  render() {
    const { song } = this.props.data

    if (!song) {
      // also possible to use this.props.data.loading
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>

        <LyricCreate />
      </div>
    )
  }
}

export default graphql(fetchSongDetail, {
  options: props => {
    return { variables: { id: props.params.id } }
  }
})(SongDetail)
