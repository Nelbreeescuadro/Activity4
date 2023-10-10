import { View, Text } from 'react-native'
import React from 'react'
import { Button, TouchableOpacity , StyleSheet} from 'react-native'
import { ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
export default function Screen1({ navigation}) {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.texts}>React Native Components</Text>
     <Searchbar
      placeholder="Search Components"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Avatar')}
      >
      <View style={styles.st}></View>
        <Text style={styles.buttonText}>Avatar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Badge')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Badge</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Banner')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Banner</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Button')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Card')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Chip')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Chip</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DataTable')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Data Table</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dialog')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Dialog</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Divider')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Divider</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HelperText')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>HelperText</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Segmented')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Segmented Buttons</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TextInput')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>More</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
     flexGrow: 1,
   padding: 5,
   gap: 10,
  
   
    },
    button: {
      backgroundColor: '#ebddff',
     height: 60,
      borderRadius: 5,
      borderRadius: 5,
      elevation: 5,
      flexDirection: 'row',
      alignItems: 'center'
    },
    buttonText: {
      color: 'black',
      fontSize: 20,
      fontWeight: '300',
      paddingLeft: 10
    },
    st:{
        backgroundColor: '#674fa3',
        width: 5,
        borderRadius: 20,
        height: '100%'
    },
    texts:{
        flex: 1,
        textAlign: 'center',
        fontSize: 30
    }
  });