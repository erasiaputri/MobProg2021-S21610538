import React, {useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Card_user_list from '../../molecules/card_user_list';
import Axios from 'axios';

const Registration = () => {
  const [users, setUsers] = useState([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:8081/users').then(res => setUsers(res.data));
  }, [users]);

  const handleSubmit = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    Axios.post('http://localhost:8081/users', data);
  };

  return (
      <View>
        <TextInput
          value={firstName}
          label="First Name"
          placeholder="First Name :"
          onChangeText={e => setFirstName(e)}
        />
        <TextInput
          value={lastName}
          label="Last Name"
          placeholder="Last Name :"
          onChangeText={e => setLastName(e)}
        />
        <TextInput
          value={email}
          label="Email"
          placeholder="Email :"
          onChangeText={e => setEmail(e)}
        />
        <Button label="Add" onSubmit={handleSubmit} />
      </View>
  );
};

export default Registration;

const styles = StyleSheet.create({});