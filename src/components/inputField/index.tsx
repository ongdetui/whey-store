import {Block, Text} from '@components';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {getSize} from 'configs/responsive';
import React, {FC, ReactNode, useCallback, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps extends TextInputProps {
  label?: string;
  styleContainer?: StyleProp<ViewStyle>;
  isPassword?: boolean;
  required?: boolean;
  error?: string;
  childrenSub?: ReactNode;
  handleShowPass?: () => void;
  leftIcon?: ReactNode;
}

const InputField: FC<IProps> = props => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  return (
    <Block style={[styles.container, props.styleContainer]}>
      {props.label && (
        <Block flexDirection="row" alignItems="center" marginBottom={8}>
          <Text style={styles.textLabel}>{props.label}</Text>
          {props.required && <Text style={styles.textRequired}>*</Text>}
        </Block>
      )}
      <Block style={[styles.box, props.error ? styles.inputError : {}]}>
        <Block marginLeft={props.leftIcon ? 12 : 0}>
          {props.leftIcon || null}
        </Block>
        <TextInput
          placeholderTextColor={props.placeholderTextColor || '#00000060'}
          style={[styles.input, props.style]}
          secureTextEntry={!showPassword && props.isPassword}
          {...props}
        />
        {props.isPassword && (
          <TouchableOpacity
            onPress={handleShowPassword}
            style={styles.eyePassword}
            activeOpacity={0.5}>
            <Icon
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={getSize.m(20)}
              color={Colors.mainText}
            />
          </TouchableOpacity>
        )}
        {props.childrenSub}
      </Block>
      <Block style={styles.boxError}>
        {props.error && <Text style={styles.textError}>{props.error}</Text>}
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: getSize.m(8),
  },
  textRequired: {
    color: 'red',
    fontSize: getSize.m(18, 0.3),
    marginRight: getSize.m(4),
  },
  textLabel: {
    fontSize: getSize.m(15, 0.3),
    fontFamily: Font.Poppins_Medium,
    color: Colors.bluePrimary,
  },
  box: {
    height: getSize.m(56),
    borderRadius: getSize.m(12),
    borderWidth: getSize.m(1),
    borderColor: '#E4DFDF',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgBlur,
  },
  input: {
    height: getSize.m(44),
    flex: 1,
    paddingHorizontal: getSize.m(12),
    fontSize: getSize.m(14, 0.3),
    fontFamily: Font.Poppins_Light,
    color: Colors.mainText,
  },
  inputError: {
    borderColor: `${Colors.redHolder}60`,
  },
  eyePassword: {
    height: getSize.m(44),
    justifyContent: 'center',
    paddingHorizontal: getSize.m(12),
  },
  boxError: {
    minHeight: getSize.m(16),
    marginTop: getSize.m(4),
    paddingHorizontal: getSize.m(6),
  },
  textError: {
    fontSize: getSize.m(13, 0.3),
    fontFamily: Font.Poppins_Regular,
    color: Colors.redHolder,
  },
});

export default InputField;
