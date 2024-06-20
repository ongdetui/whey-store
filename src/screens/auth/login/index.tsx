import {Block, Button, Container, Text} from '@components';
import InputField from '@components/inputField';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {getSize} from 'configs/responsive';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FormikHelpers, useFormik} from 'formik';
import * as Yup from 'yup';
import {LoginParams} from 'models/auth';
import MailIcon from '@assets/icons/MailIcon';
import LockIcon from '@assets/icons/LockIcon';
import NavigationService from '@navigation/navigationService';
import {RouteAuthEnum, RouteBottomTabsEnum} from '@navigation/route';
import {useState} from 'react';
import {login} from '@services/auth.service';
import {useDispatch} from 'react-redux';
import {actionUpdateUser} from '@redux/slices/user.slice';
import * as Keychain from 'react-native-keychain';
import {useToastMessage} from '@hooks/useToastMessage';

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required').email('Email is not valid'),
  password: Yup.string().required('Password is required'),
});

const initialValues: LoginParams = {
  email: __DEV__ ? 'admin@gmail.com' : '',
  password: __DEV__ ? '12345678' : '',
};

const LoginScreen = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {showWarningTop, showSuccessTop} = useToastMessage();

  const handleSignIn = async (values: LoginParams) => {
    try {
      setLoading(true);
      const {data} = await login(values);

      dispatch(actionUpdateUser(data.metadata.user));
      await Keychain.setInternetCredentials(
        'JWT_KEY',
        'JWT_KEY',
        data.metadata.tokens.accessToken,
      );
      await Keychain.setInternetCredentials(
        'JWT_REFRESH_KEY',
        'JWT_REFRESH_KEY',
        data.metadata.tokens.refreshToken,
      );
      showSuccessTop('Đăng nhập thành công');
      NavigationService.reset(RouteBottomTabsEnum.BottomTabs);
    } catch (error) {
      showWarningTop('Đăng nhập thất bại');
    } finally {
      setLoading(false);
    }
  };

  const {values, handleChange, errors, setFieldError, submitForm} =
    useFormik<LoginParams>({
      initialValues,
      validateOnChange: false,
      validateOnBlur: false,
      validationSchema,
      onSubmit: handleSignIn,
    });

  const handleChangeValue = (name: string) => (text: string) => {
    handleChange(name)(text);
    setFieldError(name, '');
  };

  const handleSignUp = () =>
    NavigationService.navigate(RouteAuthEnum.SignUpScreen);

  return (
    <Container>
      <KeyboardAwareScrollView>
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
            placeholder="Your password"
            leftIcon={<LockIcon color={Colors.mainText} />}
            value={values.password}
            onChangeText={handleChangeValue('password')}
            isPassword
          />
          <Button isLoading={isLoading} onPress={submitForm}>
            <Text style={styles.textSignIn}>Sign In</Text>
          </Button>
          <Block style={styles.footer}>
            <Text style={styles.textNotAccount}>Don’t have an account?</Text>
            <TouchableOpacity onPress={handleSignUp} activeOpacity={0.5}>
              <Text style={styles.textSignUp}>Sign up</Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </KeyboardAwareScrollView>
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
    paddingVertical: getSize.v(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNotAccount: {
    fontSize: getSize.m(15, 0.3),
    fontFamily: Font.Poppins_Light,
  },
  textSignUp: {
    fontSize: getSize.m(15, 0.3),
    fontFamily: Font.Poppins_Regular,
    color: '#5669FF',
    paddingHorizontal: getSize.m(8),
    paddingVertical: 2,
  },
});

export default LoginScreen;
