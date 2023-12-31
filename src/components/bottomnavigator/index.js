import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const bottomNavigation = (state, descriptors, navigation) => {
    return (
        <View style={ style.container}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
    
            const isFocused = state.index === index;
    
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
    
            return (
              <tabitem 
                    key={index}
                    label={label}
                    isFocused={isFocused}
                    onPress={onPress}
                    onLongPress={onLongPress}
              />
            );
          })}
        </View>
      );
}

export default bottomNavigation

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: 55,
        paddingVertical: 14,
    }
})