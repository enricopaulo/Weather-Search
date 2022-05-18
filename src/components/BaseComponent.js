import React from 'react';
import { View } from 'react-native';

const BaseComponent = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}    
        </View>
        
    );
};

const styles = {
    containerStyle: {
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#fff',
        position: 'relative'
    },
};

export { BaseComponent };
