import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const cardUserlist = ({Name, Username, Email, Address, Phone}) => {
    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.Name}>{Name}</Text>
                <Text style={styles.Username}>{Username}</Text>
                <Text style={styles.Email}>{Email}</Text>
                <Text style={styles.Address}>{Address}</Text>
                <Text style={styles.Phone}>{Phone}</Text>
                
            </View>
        </View>
    )
}

export default cardUserlist;

const styles = StyleSheet.create({
    Card: {
        marginTop: 15,
        alignItems: 'center',
    },
    Name:{
        fontSize: 18,
        fontWeight: '700',
    },
    Email: {
        fontSize: 16,
        color: 'blue',
        marginTop: 10,
    },
    Image: {
        height: 150,
        width: 150,
        marginTop: 10,
    },
    Address: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 16,
        marginLeft: 26,
        marginBottom: 5,
    },
    Phone: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 16,
        marginLeft: 26,
        marginBottom: 5,
    },
});