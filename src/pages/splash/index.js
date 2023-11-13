import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { logo, splash } from '../../asets';
const splash = ({navigation}) => {
  useEffect(() =>{
    setTimeout(() => {
      navigation.replace('mainapp')
    }, 3000);
  }, [navigation]);
  return (
    <ImageBackground source={splash} style={styles.background}>
      <image source={logo}style={style.logo}/>
    </ImageBackground>
  )
}

export default splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 414,
    height: 896
  }
})