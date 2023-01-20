import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface Props {
  children: ReactNode | ReactNode[];
  type?: 'success' | 'error';
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const Button = ({
  children,
  type,
  onPress,
  style,
  disabled,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'success' && styles.buttonSuccess,
        type === 'error' && styles.buttonError,
        disabled && styles.buttonDisabled,
        style,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      {typeof children === 'string' ? (
        <Text style={styles.buttonText}>
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'blue',
    padding: 16,
    borderRadius: 6,
  },
  buttonSuccess: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  buttonError: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
  buttonDisabled: {
    opacity: 0.3,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default Button;
