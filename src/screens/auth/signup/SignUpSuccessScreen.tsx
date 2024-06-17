import {Block, Button, Container, Text} from '@components';
import NavigationService from '@navigation/navigationService';
import {RouteAuthEnum} from '@navigation/route';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {getSize} from 'configs/responsive';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpSuccessScreen = () => {
  const handleLogin = () => NavigationService.reset(RouteAuthEnum.LoginScreen);

  return (
    <Container>
      <Block alignItems="center" marginTop={80} flex={1}>
        <Icon name={'checkmark-circle-outline'} size={80} color={'#08ba26'} />
        <Text style={styles.title}>Sign Up Successfully</Text>
        <Text style={styles.textSub}>Please check your gmail</Text>
      </Block>
      <Button style={styles.btnGotoEmail}>
        <Text style={styles.textEmail}>Go to Email</Text>
      </Button>
      <TouchableOpacity
        onPress={handleLogin}
        activeOpacity={0.5}
        style={styles.btnHome}>
        <Text style={styles.textHome}>Go to Sign In</Text>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#08ba26',
    fontSize: 28,
    fontFamily: Font.Poppins_Bold,
  },
  textSub: {
    marginTop: getSize.v(20),
    fontFamily: Font.Poppins_Medium,
    color: Colors.mainText,
    fontSize: 16,
  },
  btnGotoEmail: {
    marginHorizontal: getSize.s(20),
    marginBottom: getSize.v(12),
  },
  textEmail: {
    color: Colors.white,
    fontFamily: Font.Poppins_Medium,
    fontSize: 18,
  },
  btnHome: {
    marginBottom: getSize.v(30),
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  textHome: {
    fontSize: 16,
    fontFamily: Font.Poppins_Medium,
    color: Colors.mainText,
  },
});

export default SignUpSuccessScreen;
