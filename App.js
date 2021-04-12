import React from 'react';
import * as eva from '@eva-design/eva';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { ApplicationProvider, Layout, Text, Input, Button} from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPoll, { IChoice } from "react-native-poll";
import RNAnimated from "react-native-animated-component";

import CScreen from './CreatePoll';

const AlertIcon = (props) => (
  <Icon name='exclamation-circle'/>
  );

 const InputAccessoriesShowcase = () => {

  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-slash' : 'eye'}/>
    </TouchableWithoutFeedback>
  );
  return (
    <Input
      value={value}
      label='Password'
      placeholder='Password'
      caption='Should contain at least 8 symbols'
      accessoryRight={renderIcon}
      captionIcon={AlertIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={nextValue => setValue(nextValue)}
    />
    );
    }

const HomeScreen = ({ navigation }) => {
  return (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">LOG IN</Text>
    <View>
      <Input
          status='primary'
          placeholder='Username'
          style={{width:'100%'}}
        />
        <InputAccessoriesShowcase />
        <Button appearance='outline' style={{ marginTop:10 }} 
        onPress={() => navigation.navigate('C')}>
        Login</Button>
    </View>
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        height: '05%',
        width: '100%',
        flex: 1,
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        style={{
          width: '50%',
          borderWidth: 1,
          backgroundColor: 'lime',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Poll')}
        >
        <Text>Polls</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '50%',
          borderWidth: 1,
          backgroundColor: 'orchid',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  </Layout>
);}

const PollScreen = () => {
  const choices: Array<IChoice> = [
  { id: 1, choice: "Nike", votes: 12 },
  { id: 2, choice: "Adidas", votes: 1 },
  { id: 3, choice: "Puma", votes: 3 },
  { id: 4, choice: "Reebok", votes: 5 },
  { id: 5, choice: "Under Armour", votes: 9 },
];

  return (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <RNPoll
  appearFrom="left"
  animationDuration={750}
  totalVotes={30}
  choices={choices}
  PollContainer={RNAnimated}
  PollItemContainer={RNAnimated}
  onChoicePress={(selectedChoice: IChoice) =>
    console.log("SelectedChoice: ", selectedChoice)
  }
  />
  </Layout>
);}

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My Home',
          headerStyle: {
            backgroundColor: '#f4511e',
            height: 80,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="Poll" component={PollScreen} />
      <Stack.Screen name="C" component={CScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </ApplicationProvider>
  );
};
export default App;
