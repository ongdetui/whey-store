import {Block, Container, Text} from '@components';
import Button from '@components/button';
import NavigationService from '@navigation/navigationService';
import {RouteBottomTabsEnum} from '@navigation/route';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {getSize} from 'configs/responsive';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const OrderSuccessScreen = () => {
  const handleBack = () =>
    NavigationService.reset(RouteBottomTabsEnum.BottomTabs);
  return (
    <Container>
      <Block flex={1} alignItems="center" marginTop={30}>
        <Icon name={'checkmark-circle-outline'} color={'#56D5A0'} size={120} />
        <Text style={styles.title}>Chúc mừng bạn đã đặt hàng thành công</Text>
        <Text style={styles.subTitle}>
          Đơn hàng sẽ được xác nhận và giao đến cho bạn trong vài ngày tới
        </Text>
      </Block>
      <Button onPress={handleBack} styleContainer={styles.btn}>
        <Text style={styles.textBtn}>Quay về trang chủ</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Font.Poppins_SemiBold,
    fontSize: 22,
    textAlign: 'center',
    marginHorizontal: getSize.s(20),
  },
  subTitle: {
    marginTop: 30,
    fontFamily: Font.Poppins_Medium,
    fontSize: 15,
    marginHorizontal: getSize.s(20),
    textAlign: 'center',
  },
  btn: {
    marginBottom: 30,
    marginHorizontal: getSize.s(20),
  },
  textBtn: {
    color: Colors.white,
    fontFamily: Font.Poppins_SemiBold,
    fontSize: 16,
  },
});

export default OrderSuccessScreen;
