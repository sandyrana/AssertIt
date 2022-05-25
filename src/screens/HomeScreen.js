import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Bussiness } from '../data/dataArray'
import { Entypo,MaterialCommunityIcons,AntDesign  } from '@expo/vector-icons';

export default function HomeScreen(props) {

  return (
    <View style={styles.container}>

      <View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <View>

            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Bussiness Owners</Text>
            <Text style={{ color: "lightgrey" }}>View Some of the top bussiness owners</Text></View>
          <View><Text style={{ color: "yellow" }}>View All</Text></View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>


          {Bussiness && Bussiness.map((item, i) => (
            <View key={i} style={styles.data}>
              <View style={{ width: 60, height: 60 }}><Image style={styles.im} source={{ uri: item.photo_url }} /></View>

              <View>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.cat}>{item.cat}</Text>
                <Text style={styles.des}>{item.Description}</Text>


                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{color:'lightgrey'}}><Entypo name="eye" size={20} color="lightgrey" /> {item.TotalView}</Text>
                <Text style={{color:'lightgrey'}}> <MaterialCommunityIcons name="post-outline" size={20} color="lightgrey" />{item.Post}</Text>

                <Text style={{color:'lightgrey'}}>View Profile <AntDesign name="arrowright" size={20} color="lightgrey" /></Text>

            </View>

              </View>
             
            </View>
          ))}

        </ScrollView>
      </View>




      <View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <View>

            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Enterpenaure</Text>
            <Text style={{ color: "lightgrey" }}>View Some of the top enterpenaure</Text></View>
          <View><Text style={{ color: "yellow" }}>View All</Text></View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>


          {Bussiness && Bussiness.map((item, i) => (
            <View key={i} style={styles.data}>
              <View style={{ width: 60, height: 60 }}><Image style={styles.im} source={{ uri: item.photo_url }} /></View>

              <View>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.cat}>{item.cat}</Text>
                <Text style={styles.des}>{item.Description}</Text>

                
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{color:'lightgrey'}}><Entypo name="eye" size={20} color="lightgrey" /> {item.TotalView}</Text>
                <Text style={{color:'lightgrey'}}> <MaterialCommunityIcons name="post-outline" size={20} color="lightgrey" />{item.Post}</Text>

                <Text style={{color:'lightgrey'}}>View Profile <AntDesign name="arrowright" size={20} color="lightgrey" /></Text>

            </View>


              </View>
            </View>
          ))}

        </ScrollView>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: 'white' },
  title: { fontWeight: 'bold', fontSize: 16, },
  cat: { color: 'yellow' },
  des: { color: 'lightgrey', width: 200 },

  data: {
    flexDirection: 'row',
    //  alignItems:'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 10,
    height: 200,
    borderRadius: 5,
    margin: 2

  },
  im: {
    width: 50,
    height: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,


  },

});