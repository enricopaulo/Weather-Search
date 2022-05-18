import React, { Component } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, Alert } from 'react-native';

import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { connect} from 'react-redux';

import * as Colors from '../constants/ColorEnum'
import WeatherItem from '../components/WeatherItem';
import { fetchWeather, clearProps } from '../actions';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    showError = (error) => {
        Alert.alert(
            'Error',
            error,
            [
              { text: 'OK', onPress: () => {
                    this.props.clearProps();
              } }
            ],
            { cancelable: false }
        );
    }

    fetchWeather = () => {
        this.props.fetchWeather(this.state.cityWhileEditing);
    }

    onPressSearch = () => {
        this.fetchWeather();
    }

    renderRow(data) {
        return <WeatherItem data={data} />
    }
    
    render() {
        const { error, weather } = this.props;
        if (this.props && error && error.length > 1) {
            this.showError(error);            
        }

        return (
            <SafeAreaView style={styles.screenBackgroundStyle}>
                <View style={styles.searchViewStyle}>
                    <TextInput style={styles.textInputStyle} 
                        keyboardType="default"
                        returnKeyType="search"
                        onChangeText={cityWhileEditing => this.setState({cityWhileEditing})}
                        // onSubmitEditing={() => {this.onPressSearch()}}
                        onSubmitEditing={this.onPressSearch}
                        placeholder="Enter city..."/>
                    <View style={styles.searchButtonStyle}>
                        <Button
                        title="Search"
                        // onPress={() => this.onPressSearch()}
                        onPress={this.onPressSearch}
                        />
                    </View>
                </View>
                <FlatList
                    style={{paddingTop: 0}}
                    data={weather}
                    extraData={this.props}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => this.renderRow(item)}
                    keyExtractor={(item, index) => item + index}

                    // Performance settings
                    removeClippedSubviews={true} // Unmount components when outside of window 
                    initialNumToRender={10} // Reduce initial render amount
                    maxToRenderPerBatch={2} // Reduce number in each render batch
                    updateCellsBatchingPeriod={100} // Increase time between renders
                    windowSize={10} // Reduce the window size
                />
            </SafeAreaView>
            
        );
    }
}

const styles = {
    screenBackgroundStyle: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchViewStyle: {
        flexDirection: 'row', 
        width: ScreenWidth,
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
    },
    emptyText: { 
        // borderColor: Colors.pinkishGrey,
        //  borderWidth: 1, 
         margin: 8, 
         marginRight: 0, 
         padding: 8, 
         width: ScreenWidth - 16, 
         height: 40,
         backgroundColor: Colors.veryLightGrey,
    },
};

const mapStateToProps = ({ home }) => {
    const { error, weather } = home
    return {
        error, weather
    };
};

export default connect(mapStateToProps, { fetchWeather, clearProps })(HomeScreen);
