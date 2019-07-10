import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CreateTamagotchi from './components/CreateTamagotchi';

export default class App extends Component {
  constructor(props) {
    this.setName = this.setName.bind(this);
    super(props);
    this.state = {
      name: null,
      hunger: 100,
      boredom: 100,
      tiredness: 100
    }
  }

  setName(name) {
    this.setState({name: name});
  }

  render() {
    if(!this.state.name) {
      return (
        <View style={styles.container}>
          <CreateTamagotchi setName={this.setName}/>
        </View>
      );
    } else {
      return (
        <View>
          <Text>{this.state.name}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
