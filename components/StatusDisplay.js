import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default function StatusDisplay(props) {
    return(
        <View>
            <Text>Hunger: {props.status.hunger} Boredom: {props.status.boredom} Tiredness: {props.status.tiredness}</Text>
        </View>
    );
}

StatusDisplay.propTypes = {
    status: PropTypes.object
};