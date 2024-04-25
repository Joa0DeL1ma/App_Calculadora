import React from 'react';
import { 
    Text,
    StyleSheet,
    View,
 } from 'react-native';

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding:20,
        justifyContent: 'center',
        backgroundColor: '#afb0b3',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: '#ffffff'
    }
})

export default props => {
    return (<View style={styles.display}>
        <Text style={styles.displayValue} numberOfLines={1}>
            {props.value}
        </Text>
    </View>)
}