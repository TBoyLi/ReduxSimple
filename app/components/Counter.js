import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';


let Counter = ({count, increment, decrement}) => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{count}</Text>
            <TouchableOpacity onPress={increment} style={styles.button}>
                <Text>up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={decrement} style={styles.button}>
                <Text>down</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    }
})

export default Counter;