import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import { BaseComponent } from './BaseComponent';
import { getDateFromDateTime, getCurrentDate } from '../utility';
import * as Colors from '../constants/ColorEnum';

import { ScreenWidth } from "@freakycoder/react-native-helpers";

class WeatherItem extends Component {

    render() {
        // console.log('weatheritem : ', this.props.data);
        let imageURL = 'https://openweathermap.org/img/w/' + this.props.data.weather[0].icon + '.png';
        
        return(
            <BaseComponent>
                <View style={styles.listContainer}>
                    <Text style={styles.dateBackgroundStyle}>
                        {/* {this.props.data.date} */}

                        {getDateFromDateTime(this.props.data.dt_txt)}
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={styles.mainWeather}>
                                {/* {this.props.data.main} */}
                                {this.props.data.weather[0].main}
                            </Text>
                            <Text style={styles.subWeather}>
                                {/* {this.props.data.description} */}
                                {this.props.data.weather[0].description}
                            </Text>
                        </View>
                        <Image style={styles.imageView} source={{uri: imageURL}} />
                    </View>
                </View>
            </BaseComponent>
        );
    }
}


const styles = {
    listContainer: {
        // padding: 16,
        width: ScreenWidth,
        // backgroundColor: Colors.veryLightGrey
        paddingBottom: 4,
    },
    dateBackgroundStyle: {
        backgroundColor: Colors.darkGrey,
        fontWeight: '600',
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 4,
    },
    mainWeather: {
        marginLeft: 8,
        marginRight: 8,
        fontWeight: '600',
        fontSize: 18
    },
    subWeather: {
        marginLeft: 8,
        marginRight: 8,
    },
    imageView: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        marginRight: 8
    },
}

export default WeatherItem;