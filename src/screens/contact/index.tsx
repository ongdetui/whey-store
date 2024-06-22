import {Container, Text} from '@components';
import Button from '@components/button';
import InputField from '@components/inputField';
import {useToastMessage} from '@hooks/useToastMessage';
import {submitContact} from '@services/auth.service';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {getSize} from 'configs/responsive';
import {useFormik} from 'formik';
import {StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Vui lòng điền họ và tên'),
  phone_number: Yup.string().required('Vui lòng điền số điện thoại'),
  email: Yup.string()
    .required('Vui lòng nhập email')
    .email('Email không hợp lệ'),
  address: Yup.string().required('Vui lòng nhập địa chỉ'),
  content: Yup.string().required('Vui lòng nhập lời nhắn'),
});

const ContactScreen = () => {
  const {showWarningTop, showSuccessTop} = useToastMessage();
  const initialValues = {
    name: '',
    phone_number: '',
    address: '',
    email: '',
    content: '',
  };

  const handleSubmit = async (value: typeof initialValues, {resetForm}) => {

    try {
      await submitContact(value);
      showSuccessTop('Phản hồi đã được tiếp nhận');
      resetForm();
    } catch (error) {
      showWarningTop('Có lỗi xảy ra vui lòng thử lại sau');
    }
  };

  const {values, handleChange, errors, setFieldError, submitForm} = useFormik<
    typeof initialValues
  >({
    initialValues,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleChangeValue = (name: string) => (text: string) => {
    handleChange(name)(text);
    setFieldError(name, '');
  };

  return (
    <Container>
      <KeyboardAwareScrollView style={styles.content}>
        <Text style={styles.title}>Liên hệ với chúng tôi</Text>
        <Text>
          Trang liên hệ của chúng tôi là nơi để bạn chia sẻ ý kiến, gửi câu hỏi,
          hoặc yêu cầu hỗ trợ.
        </Text>
        <InputField
          value={values.name}
          onChangeText={handleChangeValue('name')}
          error={errors.name}
          required
          label="Họ và tên"
          placeholder="Họ và tên"
        />
        <InputField
          value={values.email}
          onChangeText={handleChangeValue('email')}
          error={errors.email}
          required
          label="Email"
          placeholder="Email"
        />
        <InputField
          value={values.phone_number}
          onChangeText={handleChangeValue('phone_number')}
          error={errors.phone_number}
          required
          label="Số điện thoại"
          placeholder="Số điện thoại"
        />
        <InputField
          value={values.address}
          onChangeText={handleChangeValue('address')}
          error={errors.address}
          required
          label="Địa chỉ"
          placeholder="Địa chỉ"
        />
        <InputField
          value={values.content}
          onChangeText={handleChangeValue('content')}
          error={errors.content}
          required
          label="Lời nhắn"
          placeholder="Lời nhắn"
        />
        <Button onPress={submitForm}>
          <Text style={styles.textSend}>Gửi</Text>
        </Button>
      </KeyboardAwareScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: getSize.s(12),
  },
  title: {
    fontFamily: Font.Poppins_SemiBold,
    color: Colors.bluePrimary,
    fontSize: 22,
    marginTop: 20,
    marginBottom: 12,
  },
  textSend: {
    color: Colors.white,
    fontFamily: Font.Poppins_SemiBold,
    fontSize: 18,
  },
});

export default ContactScreen;
