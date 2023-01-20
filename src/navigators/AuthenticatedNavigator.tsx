import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyToDosScreen from '../screens/authenticated/MyToDosScreen';
import ShareToDosScreen from '../screens/authenticated/ShareToDosScreen';
import LoadToDosScreen from '../screens/authenticated/LoadToDosScreen';
import ProfileScreen from '../screens/authenticated/ProfileScreen';
import CustomTabBar from '../layout/CustomTabBar';


export type AuthenticatedParamList = {
  MyToDosScreen: undefined;
  ShareToDosScreen: undefined;
  LoadToDosScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AuthenticatedParamList>();

const AuthenticatedNavigator = () => {
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

export default AuthenticatedNavigator;
