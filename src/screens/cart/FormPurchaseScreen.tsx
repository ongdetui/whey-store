import {Block, Container, Text} from '@components';
import Button from '@components/button';
import InputField from '@components/inputField';
import {useToastMessage} from '@hooks/useToastMessage';
import NavigationService from '@navigation/navigationService';
import {RouteAppEnum} from '@navigation/route';
import {UserState} from '@redux/slices/user.slice';
import {IRootState} from '@redux/stores';
import {orderProduct} from '@services/cart.service';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {getSize} from 'configs/responsive';
import {useFormik} from 'formik';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector} from 'react-redux';
import {toPriceFormat} from 'utils/utils';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Vui lòng điền họ và tên'),
  phone_number: Yup.string().required('Vui lòng điền số điện thoại'),
  email: Yup.string()
    .required('Vui lòng nhập email')
    .email('Email không hợp lệ'),
  address: Yup.string().required('Vui lòng nhập địa chỉ'),
});

const FormPurchaseScreen = ({route}) => {
  const listCart = route.params;
  const {email, id} = useSelector<IRootState, UserState>(state => state.user);
  const [isLoading, setLoading] = useState<boolean>(false);
  const {showSuccessTop, showWarningTop} = useToastMessage();

  const initialValues = {
    name: '',
    phone_number: '',
    address: '',
    note: '',
    order_status: 'pending',
    email: email,
  };

  const totalPrice = listCart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.product_data.price,
    0,
  );

  const handleOrder = async (value: typeof initialValues) => {
    try {
      setLoading(true);
      await orderProduct({...value, id: listCart?.[0]?.order_id}, id);
      showSuccessTop('Chúc mừng bạn đã đặt hàng thành công');
      NavigationService.navigate(RouteAppEnum.OrderSuccessScreen);
    } catch (error) {
      showWarningTop('Đặt hàng thất bại, hãy thử lại sau');
    } finally {
      setLoading(false);
    }
  };

  const {values, handleChange, errors, setFieldError, submitForm} = useFormik<
    typeof initialValues
  >({
    initialValues,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
    onSubmit: handleOrder,
  });

  const handleChangeValue = (name: string) => (text: string) => {
    handleChange(name)(text);
    setFieldError(name, '');
  };

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
        {listCart.map((item, index) => (
          <Block key={index} style={styles.itemOrder}>
            <Text flex={1} numberOfLines={2} style={styles.titleProduct}>
              {item.product_data.name}
            </Text>
            <Text style={styles.textPrice}>
              {toPriceFormat(item.product_data.price)}
            </Text>
          </Block>
        ))}
        <Block style={styles.itemOrder} marginBottom={20}>
          <Text style={styles.textProduct}>Tổng cộng</Text>
          <Text style={styles.textProduct}>{toPriceFormat(totalPrice)}</Text>
        </Block>
        <Text marginBottom={12} style={styles.myOrder}>
          Thông tin thanh toán
        </Text>
        <InputField
          value={values.name}
          onChangeText={handleChangeValue('name')}
          error={errors.name}
          label="Họ và tên"
          placeholder="Họ và tên..."
          required
        />
        <InputField
          value={values.phone_number}
          onChangeText={handleChangeValue('phone_number')}
          error={errors.phone_number}
          label="Số điện thoại"
          placeholder="Số điện thoại..."
          required
        />
        <InputField
          value={values.email}
          onChangeText={handleChangeValue('email')}
          error={errors.email}
          label="Email"
          placeholder="email..."
          required
        />
        <InputField
          value={values.address}
          onChangeText={handleChangeValue('address')}
          error={errors.address}
          label="Địa chỉ"
          placeholder="Địa chỉ..."
          required
        />
        <InputField
          value={values.note}
          onChangeText={handleChangeValue('note')}
          error={errors.note}
          label="Ghi chú về đơn hàng"
          placeholder="..."
        />
        <Button
          isLoading={isLoading}
          styleContainer={styles.btnOrder}
          onPress={submitForm}>
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
    marginLeft: 20,
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
