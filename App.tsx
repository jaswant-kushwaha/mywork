import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login';
import { DataProvider } from './src/dataHooks/hooks';

export type RootStackPramList = {
  Login: undefined;

}
const Stack = createNativeStackNavigator<RootStackPramList>()


export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}