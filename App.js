import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function FriendDetailsScreen({ navigation, route }) {
  const { friendName, justification, imitation } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{friendName}</Text>
      <Text>{justification}</Text>
      <Text>Imitação desejada: {imitation}</Text>
      <Button title="Voltar para a tela anterior" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Escolha seus amigos' }}
        />
        <Stack.Screen
          name="FriendDetails1"
          component={FriendDetailsScreen}
          options={{ title: 'Detalhes do Amigo 1' }}
        />
        <Stack.Screen
          name="FriendDetails2"
          component={FriendDetailsScreen}
          options={{ title: 'Detalhes do Amigo 2' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Selecione um amigo para ver os detalhes:</Text>
      <Button
        title="Laura/ami"
        onPress={() =>
          navigation.navigate('FriendDetails1', {
            friendName: 'Laura/ami',
            justification: 'Este é um amigo de confiança porque sempre está disponível para ajudar e ouvir além de ser como uma irmã para mim.',
            imitation: 'Abelha'
          })
        }
      />
      <Button
        title="Andrey"
        onPress={() =>
          navigation.navigate('FriendDetails2', {
            friendName: 'Andrey',
            justification: 'Este é um amigo de confiança porque tem sido leal e solidário ao longo dos anos além de entender meu tipo de humor estranho',
            imitation: 'jungkook'
          })
        }
      />
    </View>
  );
}

export default App;

