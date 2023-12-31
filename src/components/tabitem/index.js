import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { iconakun,iconakunActive,iconhome,iconhomeactive,iconpesanan,iconpesananActive } from '../../asets'
import { warna_utama, warna_disable } from '../../utils/constans'

const tabitem = ({infocused,onPress,onLongPress, label}) => {
  const icon = ()=> {
    if(label === "home") return isFocused? <iconhomeactive/> : <iconhome />

    if(label === "pesanan") return isFocused? <iconpesananActive/> : <iconpesanan />

    if(label === "akun") return isFocused? <iconakunActive/> : <iconakun />

    return <iconhome />
  }
  return (
    <TouchableOpacity
                onPress={onPress}
                onLongPress={onLongPress}
                style={style.container}>
                  <icon />
                <Text style={style.Text(isFocused)}>{label}
                </Text>
              </TouchableOpacity>
  )
}

export default tabitem;

const styles = StyleSheet.create({
  container:{
    alignItems: 'center'
  },
  Text:(isFocused) => ({
    fontSize: 13,
    color: isFocused? 'warna_utama' : 'warna_disable',
    marginTop: 8
  })
})