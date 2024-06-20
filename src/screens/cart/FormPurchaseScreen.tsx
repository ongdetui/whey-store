import {Block, Container, Text} from '@components';
import Button from '@components/button';
import InputField from '@components/inputField';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {getSize} from 'configs/responsive';
import {StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const FormPurchaseScreen = () => {
  return (
    <Container>
      <KeyboardAwareScrollView style={styles.content}>
        <Text marginBottom={20} style={styles.myOrder}>
          Đơn hàng của bạn
        </Text>
        <Block style={styles.itemOrder}>
          <Text style={styles.textProduct}>Sản phẩm</Text>
          <Text style={styles.textProduct}>Tổng cộng</Text>
        </Block>
        <Block style={styles.itemOrder}>
          <Text style={styles.titleProduct}>Whey protein x2</Text>
          <Text style={styles.textPrice}>1,233,000</Text>
        </Block>
        <Block style={styles.itemOrder} marginBottom={20}>
          <Text style={styles.textProduct}>Tổng cộng</Text>
          <Text style={styles.textProduct}>3,232,000</Text>
        </Block>
        <Text marginBottom={12} style={styles.myOrder}>
          Thông tin thanh toán
        </Text>
        <InputField label="Họ và tên" placeholder="Họ và tên..." />
        <InputField label="Số điện thoại" placeholder="Số điện thoại..." />
        <InputField label="Email" placeholder="email..." />
        <InputField label="Địa chỉ" placeholder="Địa chỉ..." />
        <InputField label="Ghi chú về đơn hàng" placeholder="..." />
        <Button styleContainer={styles.btnOrder}>
          <Text style={styles.textOrder}>Đặt hàng</Text>
        </Button>
      </KeyboardAwareScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: getSize.s(12),
  },
  myOrder: {
    marginTop: getSize.m(12),
    fontSize: 18,
    fontFamily: Font.Poppins_SemiBold,
    color: Colors.bluePrimary,
  },
  itemOrder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: getSize.m(8),
    borderBottomColor: Colors.bgBlur,
    borderBottomWidth: 1,
  },
  textProduct: {
    color: Colors.black,
    fontFamily: Font.Poppins_SemiBold,
    fontSize: 16,
  },
  titleProduct: {
    color: Colors.bluePrimary,
    fontFamily: Font.Poppins_Medium,
    fontSize: 14,
  },
  textPrice: {
    fontSize: 14,
    fontFamily: Font.Poppins_SemiBold,
    color: Colors.bluePrimary,
  },
  btnOrder: {
    marginBottom: getSize.v(40),
  },
  textOrder: {
    color: Colors.white,
    fontFamily: Font.Poppins_SemiBold,
    fontSize: 16,
  },
});

export default FormPurchaseScreen;
