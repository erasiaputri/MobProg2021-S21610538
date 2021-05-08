import React from 'react';
import {View, Text, StyleSheet, TextInput as Input} from 'react-native';


const TextInput = ({label, placeholder, onChangeText,value}) => {
    return (
       <View>
            <Text style={styles.labelInput}>{label}</Text>
            <Input style={styles.input} placeholder={placeholder} onChangeText={onChangeText} value={value}/>
       </View>
    );
};

const styles = StyleSheet.create({
    labelInput:{
        fontSize: 14,
        fontFamily: 'Roboto',
        fontStyle:'normal',
        fontWeight: 'bold',
        lineHeight: 16,
        marginLeft:24, 
        marginTop:20,
        marginBottom:8,
        color:'black',
    },
    input: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 12,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginHorizontal: 24,
        paddingTop: 14,
        paddingBottom: 11,
        paddingLeft: 10,
    },
});

export default TextInput;