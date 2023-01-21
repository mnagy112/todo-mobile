import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyToDosScreen from '../screens/authenticated/MyToDosScreen';
import ShareToDosScreen from '../screens/authenticated/ShareToDosScreen';
import LoadToDosScreen from '../screens/authenticated/LoadToDosScreen';
import ProfileScreen from '../screens/authenticated/ProfileScreen';
import CustomTabBar from '../layout/CustomTabBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditToDoScreen from '../screens/authenticated/EditToDoScreen';
import { ToDoProvider } from '../context/ToDoContext/ToDoContext';

export type AuthenticatedTabParamList = {
  MyToDosScreen: undefined;
  ShareToDosScreen: undefined;
  LoadToDosScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AuthenticatedTabParamList>();

const AuthenticatedTabNavigator = () => {
  const handleRenderTabBar = (props: BottomTabBarProps) => <CustomTabBar {...props} />;

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={handleRenderTabBar}>
      <Tab.Screen name="MyToDosScreen" component={MyToDosScreen} />
      <Tab.Screen name="ShareToDosScreen" component={ShareToDosScreen} />
      <Tab.Screen name="LoadToDosScreen" component={LoadToDosScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export type AuthenticatedStackParamList = {
  AuthenticatedTabNavigator: undefined;
  EditToDoScreen: undefined | { id: string };
};

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

const AuthenticatedNavigator = () => {
  return (
    <ToDoProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="AuthenticatedTabNavigator"
          component={AuthenticatedTabNavigator}
        />
        <Stack.Group>
          <Stack.Screen name="EditToDoScreen" component={EditToDoScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </ToDoProvider>
  );
};

export default AuthenticatedNavigator;
