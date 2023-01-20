import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigators/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
