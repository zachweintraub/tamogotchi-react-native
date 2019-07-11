import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CreateTamagotchi from './components/CreateTamagotchi';
import ButtonPanel from './components/ButtonPanel';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      currentImage: images.happy,
      currentStatus: 'chilling',
      hunger: 100,
      boredom: 100,
      tiredness: 100,
      actionInProgress: false
    }
  }

  threshold = 90;

  giveCare = (action) => {
    let hunger = this.state.hunger;
    let boredom = this.state.boredom;
    let tiredness = this.state.tiredness;

    
    if(action == 'eating') {
      hunger = hunger + 10;
      boredom = boredom - 1;
      tiredness = tiredness - 2;
    }
    if(action == 'playing') {
      hunger = hunger - 2;
      boredom = boredom + 10;
      tiredness = tiredness - 4;
    }
    if(action == 'napping') {
      hunger = hunger - 5;
      boredom = boredom - 2;
      tiredness = tiredness + 10;
    }
    this.setState({
      hunger: hunger < 100 ? hunger : 100,
      boredom: boredom < 100 ? boredom : 100,
      tiredness: tiredness < 100 ? tiredness : 100
    });
    
    this.setState({actionInProgress: true, currentImage: images[action], currentStatus: action});
    setTimeout(() => {
      this.setState({actionInProgress: false,
        currentImage: this.setImage().image,
        currentStatus: this.setImage().status})
    }, 1000);
  
  }

  setName = (name) => {
    this.setState({name: name});
    this.decrementInterval = setInterval(() => {
      this.setState({
        hunger: this.state.hunger -= 1,
        boredom: this.state.boredom -=1,
        tiredness: this.state.tiredness -=1
      });
      if(!this.state.actionInProgress) {
        this.setState({
          currentImage: this.setImage().image,
          currentStatus: this.setImage().status
        });
      }
    }, 1000);
  }

  setImage = () => {
    let hunger = this.state.hunger;
    let boredom = this.state.boredom;
    let tiredness = this.state.tiredness;
    let threshold = this.threshold;

    if(hunger <= 0 || tiredness <= 0 || boredom <= 0) {
      clearInterval(this.decrementInterval);
      this.setState({actionInProgress: true});
      return {image: images.dead, status: 'dead'};
    }
    if(hunger >= threshold && tiredness >= threshold && boredom >= threshold) {
      return {image: images.happy, status: 'chilling'};
    }
    if(hunger < threshold && hunger < tiredness && hunger < boredom) {
      return {image: images.hungry, status: 'starving'};
    }
    if(boredom < threshold && boredom < hunger && boredom < tiredness) {
      return {image: images.bored, status: 'bored as hell'};
    }
    if(tiredness < threshold && tiredness < hunger && tiredness < boredom) {
      return {image: images.tired, status: 'tired af'};
    }
    return {image: images.multiple, status: 'all kinds of fucked up'};
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
        <View style={styles.container}>
          <Text>{this.state.name} is {this.state.currentStatus}!</Text>
          <Image style={styles.image} source={this.state.currentImage}/>
          <Text>Overall wellbeing: {Math.floor((this.state.boredom + this.state.hunger + this.state.tiredness) / 3)}</Text>
          <ButtonPanel giveCare={this.giveCare} name={this.state.name} actionInProgress={this.state.actionInProgress}/>
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
  image: {
    height: '60%',
    width: '100%'
  }
});

const images = {
  happy: require('./assets/img/happy.png'),
  bored: require('./assets/img/bored.png'),
  dead: require('./assets/img/dead.png'),
  eating: require('./assets/img/eating.png'),
  hungry: require('./assets/img/hungry.png'),
  multiple: require('./assets/img/multiple.png'),
  napping: require('./assets/img/sleeping.png'),
  tired: require('./assets/img/tired.png'),
  playing: require('./assets/img/playing.png')
}
