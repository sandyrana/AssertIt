import { View, Text,StyleSheet ,Image} from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import {UserData} from '../data/dataArray'

export default function MyProfile() {
  console.log(UserData)
  return (
    <View style={styles.container}>
            <View >
          <View style={{alignItems:'center'}}>
          <Image 
          source={{ uri: UserData.photo_url}}
          style={styles.image}
           /></View>

             <View style={{flexDirection:'row',justifyContent:'center'}}>
             <EvilIcons name="star" size={24} color="black" />
             <EvilIcons name="star" size={24} color="black" />
             <EvilIcons name="star" size={24} color="black" />
             <EvilIcons name="star" size={24} color="black" />
             <EvilIcons name="star" size={24} color="black" />
             </View>

             <View style={styles.data}>
                <Text style={{fontWeight:'bold'}}>Specialization: {UserData.Specialization}</Text>
                <Text style={{color:'lightgrey'}}>{UserData.Description}</Text>

             </View>
            </View>
              </View>
  )
}


const styles = StyleSheet.create({
    container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  
  
    },
    image: {
      height: 100,
      width: 100,
      borderRadius: 50,
      margin: 10,
      resizeMode: 'cover',
  
  
  
  
    },
    data:{
        alignItems:'center'
    }
   
   
  });