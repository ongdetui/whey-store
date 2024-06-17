import MailIcon from '@assets/icons/MailIcon';
import {Block, Container, Text} from '@components';
import Button from '@components/button';
import InputField from '@components/inputField';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {getSize} from 'configs/responsive';
import {SignUpParams} from 'models/auth';
import {StyleSheet, TouchableOpacity} from 'react-native';
import * as Yup from 'yup';
import {FormikHelpers, useFormik} from 'formik';
import LockIcon from '@assets/icons/LockIcon';
import NavigationService from '@navigation/navigationService';
import {RouteAuthEnum} from '@navigation/route';

const initialValues: SignUpParams = {
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required').email('Email is not valid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .trim()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Confirm password does not match password'),
});

const SignUpScreen = () => {
  const {values, handleChange, submitForm, errors, setFieldError} =
    useFormik<SignUpParams>({
      initialValues,
      validateOnBlur: false,
      validateOnChange: false,
      validationSchema,
      onSubmit: () => {},
    });

  const handleChangeValue = (name: string) => (text: string) => {
    handleChange(name)(text);
    setFieldError(name, '');
  };

  const handleSignUp = () => {
    NavigationService.navigate(RouteAuthEnum.SignUpSuccessScreen);
  };

  return (
    <Container>
      <Block alignItems="center">
        <Text style={styles.nameShop}>Whey Store</Text>
        <Text style={styles.subNameShop}>
          Tăng cường sức bền, Tối ưu hoá hiệu suất luyện tập
        </Text>
      </Block>
      <Block style={styles.form}>
        <InputField
          error={errors.email}
          placeholder="abc@email.com"
          leftIcon={<MailIcon color={Colors.mainText} />}
          value={values.email}
          onChangeText={handleChangeValue('email')}
          keyboardType="email-address"
        />
        <InputField
          error={errors.password}
          placeholder="Password"
          leftIcon={<LockIcon color={Colors.mainText} />}
          value={values.password}
          onChangeText={handleChangeValue('password')}
          isPassword
        />
        <InputField
          error={errors.confirmPassword}
          placeholder="Confirm Password"
          leftIcon={<LockIcon color={Colors.mainText} />}
          value={values.password}
          onChangeText={handleChangeValue('confirmPassword')}
          isPassword
        />
        <Button onPress={handleSignUp}>
          <Text style={styles.textSignIn}>Sign Up</Text>
        </Button>
        <Block style={styles.footer}>
          <Text style={styles.textHaveAccount}>Already have an account?</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={NavigationService.goBack}>
            <Text style={styles.textSignUp}>Sign in</Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </Container>
  );
};

const styles = StyleSheet.create({
  nameShop: {
    color: Colors.yellowSecondary,
    fontFamily: Font.Poppins_Bold,
    fontSize: 38,
    marginTop: getSize.v(30),
  },
  subNameShop: {
    color: Colors.bluePrimary,
    fontFamily: Font.Poppins_Medium,
    fontSize: 12,
  },
  form: {marginHorizontal: getSize.s(20), marginTop: getSize.v(50)},
  textSignIn: {
    fontFamily: Font.Poppins_Medium,
    fontSize: 18,
    color: Colors.white,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: getSize.v(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHaveAccount: {
    fontSize: getSize.m(15, 0.3),
    fontFamily: Font.Poppins_Light,
  },
  textSignUp: {
    fontSize: getSize.m(15, 0.3),
    fontFamily: Font.Poppins_Medium,
    color: '#5669FF',
    paddingHorizontal: getSize.m(8),
    paddingVertical: 2,
  },
});

export default SignUpScreen;
