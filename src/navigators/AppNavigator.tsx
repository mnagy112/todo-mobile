import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthenticatedNavigator, {
  AuthenticatedTabParamList,
  AuthenticatedStackParamList,
} from './AuthenticatedNavigator';
import { useAuth } from '../context/AuthContext';
import LoginScreen from '../screens/anonymous/LoginScreen';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends AuthenticatedTabParamList, AuthenticatedStackParamList {}
  }
}

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { userName } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
        {!userName ? (
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        ) : (
          <Stack.Screen name="AuthenticatedNavigator" component={AuthenticatedNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
