import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TextInput from '../../atoms/TextInput/index';
import Button from '../../atoms/Button';


const Register = () => {

    const [Name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = () =>{
    
        const data = {
            Name: Name,
            userName: userName,
            Email: Email,
            Address:Address,
            PhoneNumber:PhoneNumber,
        };
        console.log(data);
      };


    return (
        <View >
            <Text style={styles.title}>Registration</Text>
            <ScrollView>
            <TextInput value={Name} label="Name" placeholder="Enter name" onChangeText={e => setName(e)} />
            <TextInput value={userName} label="Username" placeholder="Enter username" onChangeText={e => setUserName(e)}  />
            <TextInput value={Email} label="Email" placeholder="Enter email" onChangeText={e => setEmail(e)} />
            <TextInput value={Address} label="Address" placeholder="Enter address" onChangeText={e => setAddress(e)} />
            <TextInput value={PhoneNumber} label="Phone Number" placeholder="Enter phone number" onChangeText={e => setPhoneNumber(e)} keyboardType = "numeric" />
            <Button label="Register" onSubmit={handleSubmit}/>
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: '700',
        fontFamily: 'Roboto',
        marginTop: 24,
        marginLeft: 24,
        marginBottom:20,
    },
});

export default Register;