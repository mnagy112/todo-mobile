import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '../context/AuthContext';
import AuthenticatedNavigator, { AuthenticatedParamList } from './AuthenticatedNavigator';
import LoginScreen from '../screens/anonymous/LoginScreen';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthenticatedParamList {}
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
          <Stack.Screen
            name="AuthenticatedDrawerNavigator"
            component={AuthenticatedNavigator}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
