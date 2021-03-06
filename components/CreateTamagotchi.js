import React from 'react';
import {View, Button, TextInput, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

export default function CreateTamagotchi(props) {
    let _name = null;
    return(
        <View>
            <Text>Meet your new (and very needy) little buddy!</Text>
            <Image source={require('../assets/img/happy.png')}/>
            <TextInput placeholder='Enter a name...' onChangeText={(text) => {_name = text;}}></TextInput>
            <Button title="Let's go!" onPress={() => {props.setName(_name)}}/>
        </View>
    );
}

CreateTamagotchi.propTypes = {
    setName: PropTypes.func
};