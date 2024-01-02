import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Dimensions 
} from 'react-native'
import React from 'react'
import { imageheader } from '../../asets'

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={imageheader}style={styles.header}>
          <image source={logo} style={styles.logo}/>
      </ImageBackground>
    </View>
  )
}

export default Home

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  header: {
    width: windowwidth,
    height: windowheight*0.30,
    paddingHorizontal: 30,
    paddingTop:10
  },
  logo: {
    width:windowwidth*0.25,
    height: windowheight*0.06
  }
})