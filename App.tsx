import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigators/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="dark" />
      <AppNavigator />
    </AuthProvider>
  );
}
