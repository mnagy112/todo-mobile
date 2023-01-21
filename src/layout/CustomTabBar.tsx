import { useCallback } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { AuthenticatedTabParamList } from '../navigators/AuthenticatedNavigator';


const CustomTabBar = ({ state }: BottomTabBarProps) => {
  const { navigate } = useNavigation();

  const activeRouteStyle = useCallback(
    (route: keyof AuthenticatedTabParamList) => {
      if (route === state.routes[state.index]?.name) {
        return 'blue';
      }

      return undefined;
    },
    [state],
  );

  const handlePressItem = (route: keyof AuthenticatedTabParamList) => () => {
    navigate(route);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={handlePressItem('MyToDosScreen')}>
        <FontAwesome name="list" size={16} color={activeRouteStyle('MyToDosScreen')} />
        <Text style={styles.text}>My ToDos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handlePressItem('ShareToDosScreen')}>
        <FontAwesome name="share-alt" size={16} color={activeRouteStyle('ShareToDosScreen')} />
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handlePressItem('LoadToDosScreen')}>
        <FontAwesome name="camera" size={16} color={activeRouteStyle('LoadToDosScreen')} />
        <Text style={styles.text}>Load</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handlePressItem('ProfileScreen')}>
        <FontAwesome name="user" size={16} color={activeRouteStyle('ProfileScreen')} />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 12,
  },
  item: {
    width: 50,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 4,
    fontSize: 12
  }
});

export default CustomTabBar;
