import React from 'react';
import * as eva from '@eva-design/eva';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import {
  ApplicationProvider,
  Layout,
  Toggle,
  Input,
  Button,
  Text,
} from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPoll, { IChoice } from 'react-native-poll';
import RNAnimated from 'react-native-animated-component';

const CScreen = ({ navigation }) => {
  const [t1, setT1] = React.useState('Demo');
  const [t2, setT2] = React.useState('Demo');

  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  const choices: Array<IChoice> = [
    { id: 1, choice: t2, votes: 12 },
    { id: 2, choice: t1, votes: 9 },
  ];
  return (
    <Layout>
      <Toggle checked={checked} onChange={onCheckedChange}>
        {`Private: ${checked}`}
      </Toggle>
      <Input
        style={{ height: 40 }}
        placeholder="Type here to option 1!"
        onChangeText={(t1) => setT1(t1)}
      />
      <Input
        style={{ height: 40 }}
        placeholder="Type here to option 2!"
        onChangeText={(t1) => setT1(t1)}
      />
      <Text category="h1">Poll</Text>
      <RNPoll
        style={{}}
        appearFrom="left"
        animationDuration={750}
        totalVotes={30}
        choices={choices}
        PollContainer={RNAnimated}
        PollItemContainer={RNAnimated}
        onChoicePress={(selectedChoice: IChoice) =>
          console.log('SelectedChoice: ', selectedChoice)
        }
      />
      <Button
        appearance="outline"
        status="success"
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate('Home')}>
        Create Poll
      </Button>
    </Layout>
  );
};
export default CScreen;
