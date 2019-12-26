import React from 'react'
import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'



var request = new XMLHttpRequest();
request.onreadystatechange = e => {
  if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    console.log('success', request.responseText);
  } else {
    console.warn('error');
  }
};

request.open('GET', 'URL');
request.send();



fetch('https://lk.guideh.com/lc/tests/checknumbers.php', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
	},
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});





export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>AboutScreen</Text>
	 
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set accessibilityLabel to
          help make your app usable by everyone.
        </Text>
        <Button title="Нажать" onPress={() => Alert.alert('Божечки, кнопка нажата')} />
     
	  <Text>кривой запрос</Text>
	   <Button title="Запрос" onPress={() => Alert.alert('Божечки, кнопка нажата')} />
	  
	  
	  
    </View>
	
	
  )
}











AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'О нас',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle Drawer'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
})

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
