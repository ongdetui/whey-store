import {Block, Container, Text} from '@components';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {getSize} from 'configs/responsive';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CartScreen = () => {
  return (
    <Container>
      <Block style={styles.header}>
        <Icon name={'cart-outline'} size={32} color={Colors.mainText} />
        <Text style={styles.title}>Cart</Text>
      </Block>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: getSize.s(12),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: getSize.m(12),
  },
  title: {
    fontSize: 24,
    fontFamily: Font.Poppins_SemiBold,
    color: Colors.mainText,
    marginLeft: getSize.m(8),
  },
});

export default CartScreen;
