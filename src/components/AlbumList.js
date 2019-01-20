import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // Some initial state which is just an empty object.
  // Empty list of albums when we first load our component.
  state = { albums: [] };

  componentWillMount() {
    // console.log('componentWillMount in AlbumList');

    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    console.log(this.state);

    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
