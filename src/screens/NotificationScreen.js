import { StyleSheet, Text,Image, View, ScrollView } from 'react-native'
import React,{useEffect} from 'react'
import Notification from '../components/Notification'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NotificationData } from '../dummydata/DummyData';

const NotificationScreen = ({navigation}) => {
  useEffect(()=>(
    navigation.setOptions({
      headerTitle:"Notifications",
      headerLeft: () => (
        <Image
            style={{height:30,width:30,borderRadius:30,marginLeft:15}}
            source={{uri:"https://lh3.googleusercontent.com/ogw/AOh-ky2cWsAILwBTX3_R494N5SH1ZlXSfUd5xOx93gTJNg=s32-c-mo"}}
        />
    ),headerRight:() =>(
      <MaterialIcons name='settings' color={"black"} size={25} style={{marginRight:15}} />
    ),
    headerStyle:{
      backgroundColor:"white",
      color:"white",
      borderBottomWidth:0,
    },
    headerTitleStyle:{
      color:"black"
    }
    })
  ))


  return (
    <View style={styles.container}>
      <ScrollView>
      {NotificationData.map(dat=>
        <Notification id={dat.id} type={dat.type}
          pic={dat.pic}
          title={dat.title}
          desc={dat.desc}
          color={dat.color}
        />
        )}
      </ScrollView>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
})