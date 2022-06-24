import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";

const sendText= async(phoneNumber)=>{
  console.log("PhoneNumber:", phoneNumber);
  await fetch('https://dev.stedi.me/twofactorlogin/' +phoneNumber,{
    method: 'POST',
    headers:{
      'content-type':'application/text'
    }

  }); 
}

const getToken = async ({phoneNumber, oneTimePassword}) => {
  const tokenResponse = await fetch ('https://dev.stedi.me/twofactorlogin',{
    method:'POST',
    body:JSON.stringify({oneTimePassword, phoneNumber}),
    headers: {
      'content-type':'application/json'
    }
  });

  const tokenResponseString = await tokenResponse.text();
  console.log(tokenResponseString)
}


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return (
    <SafeAreaView style={styles.margin}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholderTextColor={'#196393'}
        placeholder="123-456-7890"
      />
      
      <TouchableOpacity
      style={styles.button}
      onPress={()=>{
      getToken({phoneNumber, oneTimePassword})
      }}
      >
      <Text>Login</Text>
      </TouchableOpacity>
      
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="1234"
        placeholderTextColor={'#196393'}
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <TouchableOpacity
      style={styles.button}
      onPress={()=>{
        sendText(phoneNumber);
      }}
      >
      <Text>Get OTP</Text>
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