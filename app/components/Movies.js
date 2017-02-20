import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ListView} from 'react-native';

let Movies = ({data, flag, getMovies}) => {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {flag ? <View>
                <Text>{data.title}</Text>
                <Text>{data.description}</Text>
                <ListView
                    dataSource={ds.cloneWithRows(data.movies)}
                    renderRow={(rowData) => <View>
                        <Text>{rowData.title}</Text>
                        <Text>{rowData.releaseYear}</Text>
                    </View>}/>
            </View> :
                <Text>{'暂无信息'}</Text>}
            <TouchableOpacity onPress={getMovies} style={styles.button}>
                <Text>get movies</Text>
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

export default Movies;