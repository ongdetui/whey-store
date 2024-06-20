import {Container, Text} from '@components';
import Button from '@components/button';
import InputField from '@components/inputField';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {getSize} from 'configs/responsive';
import {StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ContactScreen = () => {
  return (
    <Container>
      <KeyboardAwareScrollView style={styles.content}>
        <Text style={styles.title}>Liên hệ với chúng tôi</Text>
        <Text>
          Trang liên hệ của chúng tôi là nơi để bạn chia sẻ ý kiến, gửi câu hỏi,
          hoặc yêu cầu hỗ trợ.
        </Text>
        <InputField label="Họ và tên" placeholder="Họ và tên" />
        <InputField label="Email" placeholder="Email" />
        <InputField label="Số điện thoại" placeholder="Số điện thoại" />
        <InputField label="Địa chỉ" placeholder="Địa chỉ" />
        <InputField label="Lời nhắn" placeholder="Lời nhắn" />
        <Button>
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
