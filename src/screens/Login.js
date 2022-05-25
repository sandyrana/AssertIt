import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React,{useLayoutEffect,useState} from 'react'
import { EvilIcons ,Entypo,MaterialIcons,Ionicons,AntDesign} from '@expo/vector-icons';

import Loader from '../components/Loader';

export default function LoginScreen(props) {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  
  const username = 'test@gmail.com';
  const password1 = '123456';
    const SubmitEvent = () => {
       setIsLoaded(true);
        if(username === email && password === password1){
            props.navigation.replace("HomeScreen");
        }else{
       setIsLoaded(false);

            alert("Please enter valid userid and password")
        }
        
      }
    useLayoutEffect(() => {
        props.navigation.setOptions({
          title: 'Login',
          headerShown: true,
          headerTitleStyle: {
            fontSize: 16,
          },
        });
      }, []);


  return (
    <View style={styles.contianer}>
    {isLoaded ? <Loader /> :null}
    <View style={styles.inputView}>
    <MaterialIcons name="email" size={24} color="black" />
    <TextInput
      style={styles.TextInput}
      placeholder="Email/Phone No."
      placeholderTextColor="#003f5c"
      autoCapitalize="none"
      value={email}
      onChangeText={(actualData) => setemail(actualData)}

    />
  </View>

  <View style={styles.inputView}>
  <Ionicons name="finger-print" size={24} color="black" />
    <TextInput
      style={styles.TextInput}
      placeholder="Password"
      placeholderTextColor="#003f5c"
      autoCapitalize="none"
      value={password}
      secureTextEntry={true}
      onChangeText={(actualData) => setPassword(actualData)}

    />
  </View>

  <TouchableOpacity
  style={styles.loginBtn}
  onPress={() => { SubmitEvent() }}
>
  <Text style={styles.loginText}>LOGIN</Text>
</TouchableOpacity>

<TouchableOpacity
>
  <Text >Forgot Password?</Text>
</TouchableOpacity>

<View style={{flexDirection:'row',alignItems:'center'}}>
<Text  style={{
  borderBottomColor: 'lightgrey',
  borderBottomWidth: 1,
  width:150,
}}></Text>
<Text style={{margin:10,fontSize:16,color:'lightgrey'}}>or</Text>
<Text  style={{
  borderBottomColor: 'lightgrey',
  borderBottomWidth: 1,
  width:150,
}}></Text>

</View>


<TouchableOpacity
  style={styles.facebook}
 
>
<Entypo name="facebook-with-circle" size={24} color="white" />
  <Text style={{color:"white",marginLeft:20}}>Facebook Login</Text>
</TouchableOpacity>


<TouchableOpacity
  style={styles.goolge}
 
>
<AntDesign name="google" size={24} color="white" />
  <Text style={{color:"white",marginLeft:20}}>Google Login</Text>
</TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
      },
      inputView: {
        width: "90%",
        height: 45,
        marginBottom: 20,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1
      },
      loginBtn: {
        width: "90%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "orange",
    
      },
      facebook: {
        width: "90%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "blue",
        flexDirection:'row',
      //  justifyContent:'space-around'
    
      },
      goolge: {
        width: "90%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "orange",
        flexDirection:'row',
      //  justifyContent:'space-around'
    
      },
})