import { KeyboardAvoidingView, Platform, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children: ReactNode | ReactNode[];
  style?: StyleProp<ViewStyle>;
}

const Layout = ({ children, style }: Props) => {
  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={[styles.container, styles.main, style]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    padding: 16,
    marginBottom: 16
  }
});

export default Layout;
