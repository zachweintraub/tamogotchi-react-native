import React from 'react';
import {View, Button, TextInput, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

export default function CreateTamagotchi(props) {
    return(
        <View>
            <Text>Meet your new little buddy!</Text>
            <Image source={require('../assets/img/happy.png')}/>
            <TextInput placeholder='Enter a name...'></TextInput>
            {/* <Button title="Let's go!" onPress={props.setName('john')}/> */}
        </View>
    );
}

CreateTamagotchi.propTypes = {
    setName: PropTypes.func
};