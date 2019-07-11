import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


export default function ButtonPanel(props) {
    if(!props.actionInProgress) {
        return(
            <View style={styles.container}>
                <Button title="Feed" onPress={() => {props.giveCare('eating')}}/>
                <Button title="Play" onPress={() => {props.giveCare('playing')}}/>
                <Button title="Nap" onPress={() => {props.giveCare('napping')}}/>
            </View>
        );
    } else {
        return(
            <View style={styles.container}>
                <Button title="Feed" disabled/>
                <Button title="Play" disabled/>
                <Button title="Nap" disabled/>
            </View>
        );
    }
}

ButtonPanel.propTypes = {
    giveCare: PropTypes.func,
    name: PropTypes.string,
    actionInProgress: PropTypes.bool
};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
  });