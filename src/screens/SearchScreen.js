import { StyleSheet, Text, TextInput,Image, View,Dimensions, ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'

const ScreenWidth = Dimensions.get('window').width;

const SearchScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>In progress..... WILL COME SOON</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    alignItems:'center',
  },
})