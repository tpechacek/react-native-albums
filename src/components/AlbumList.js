import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

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

  render() {
    console.log(this.state);

    return (
      <View>
        <Text>Album List!!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
