import React, { Component } from 'react';
import { SafeAreaView, StatusBar, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';

import * as Constants from '../constants'
import * as Colors from '../constants/ColorEnum'

import {
    Screen,
    ScreenWidth,
    ScreenHeight,
    isIOS,
    isAndroid,
  } from "@freakycoder/react-native-helpers";
  import Spinner from 'react-native-loading-spinner-overlay';

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cityWhileEditing: '',
            isLoading: false,
        }
    }

    onPressSearch () {
        this.setState({
            isLoading: true
        }, () => {
            console.log('cityWhileEditing : ', this.state.cityWhileEditing, this.state.isLoading);
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.screenBackgroundStyle}>
                <Spinner visible={this.state.isLoading} />
                <View style={styles.searchViewStyle}>
                    <TextInput style={styles.textInputStyle} 
                        keyboardType="default"
                        returnKeyType="search"
                        onChangeText={(cityWhileEditing) => this.setState({cityWhileEditing})}
                        onSubmitEditing={() => {this.onPressSearch()}}
                        placeholder="Enter city..."/>
                    <View style={styles.searchButtonStyle}>
                        <Button
                        title="Search"
                        onPress={() => this.onPressSearch()}
                        />
                    </View>
                </View>
            </SafeAreaView>
            
        );
    }
}

const styles = {
    screenBackgroundStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchViewStyle: {
        flexDirection: 'row', 
        flex: 1, 
        width: ScreenWidth
    },
    textInputStyle: { 
        borderColor: Colors.pinkishGrey,
         borderWidth: 1, 
         margin: 8, 
         marginRight: 0, 
         padding: 8, 
         width: ScreenWidth - 94, 
         height: 40
    },
    searchButtonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40, 
        margin: 8, 
        width: 70
    }
  };
  
export default HomeScreen;