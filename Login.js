import {useState} from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Text } from "react-native";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return (
    <SafeAreaView style={styles.margin}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder = "123-456-7890"
        placeholderTextColor="#196393"
      />
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="Please Enter One-TIme Password"
        placeholderTextColor="#196393"
        keyboardType="numeric"
        secureTextEntry={true}
      />
       <TouchableOpacity 
       style={styles.button}
       onPress={()=>{console.log("Login button was clicked")}}
        >

      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  margin:{
    marginTop:200
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default Login;