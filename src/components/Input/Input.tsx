import { StyleProp, StyleSheet, TextInput, ViewStyle, Text } from 'react-native';

interface Props {
  label?: string;
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
}

const Input = ({ label, onChange, value, placeholder, style }: Props) => {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, style]}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 4
  },
  input: {
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  }
});

export default Input;
