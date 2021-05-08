import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const Button = ({label, onSubmit}) => {
    return (
        <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.labelbutton}>{label}</Text>
      </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#C238CE',
        marginTop: 29,
        marginHorizontal:24,
        borderRadius: 20,
        paddingVertical:3,
      },
      labelbutton:{
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: '500',  
        lineHeight: 21,  
        paddingTop:9,
        paddingBottom:10,
      },
});

export default Button;