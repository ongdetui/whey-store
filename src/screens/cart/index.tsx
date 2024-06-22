import {Block, Container, Text} from '@components';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {HEIGHT_SCREEN, WIDTH_SCREEN, getSize} from 'configs/responsive';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ItemCart from './components/ItemCart';
import {keyExtractor, toPriceFormat} from 'utils/utils';
import {useCallback} from 'react';
import NavigationService from '@navigation/navigationService';
import {RouteAppEnum} from '@navigation/route';
import {useQuery} from '@tanstack/react-query';
import {fetchListCart, listOrderList, removeCart} from '@services/cart.service';
import {useSelector} from 'react-redux';
import {IRootState} from '@redux/stores';
import {UserState} from '@redux/slices/user.slice';
import {Product} from 'models/product';
import {useFocusEffect} from '@react-navigation/native';

const CartScreen = ({navigation}) => {
  const {id, idCard} = useSelector<IRootState, UserState>(state => state.user);

  const {data, refetch, isLoading} = useQuery({
    queryKey: ['listOrderList', id],
    queryFn: () =>
      fetchListCart({
        user_id: id,
        id: idCard,
      }),
    enabled: !!idCard,
  });

  useFocusEffect(() => {
    refetch();
  });

  const listCart = data?.data?.metadata;

  const totalPrice = listCart?.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.product_data.price,
    0,
  );

  const _handleRemove = useCallback(async (item: Product) => {
    try {
      await removeCart(item.id, id);
      refetch();
    } catch (error) {}
  }, []);

  const renderItem = useCallback(
    ({item}) => (
      <ItemCart
        url={JSON.parse(item.product_data.images)?.[0]?.url}
        name={item.product_data.name}
        price={item.product_data.price}
        quantity={item.quantity}
        handleRemove={() => _handleRemove(item)}
      />
    ),
    [_handleRemove],
  );

  const handlePurchase = () => {
    NavigationService.navigate(RouteAppEnum.FormPurchaseScreen, listCart);
  };

  return (
    <Container>
      <Block style={styles.header}>
        <Icon name={'cart-outline'} size={32} color={Colors.mainText} />
        <Text style={styles.title}>Cart</Text>
      </Block>
      <FlatList
        data={listCart}
        onRefresh={refetch}
        refreshing={isLoading}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          <Block alignItems="center" marginTop={HEIGHT_SCREEN * 0.3}>
            <Icon name={'cart-outline'} color={Colors.mainText} size={80} />
            <Text>Danh sách rổng</Text>
          </Block>
        }
        contentContainerStyle={styles.contentContainerStyle}
      />
      {listCart?.length > 0 && (
        <Block style={styles.footer}>
          <Block marginLeft={getSize.s(12)}>
            <Text style={styles.textTitle}>Tổng thanh toán</Text>
            <Text style={styles.textPrice}>đ{toPriceFormat(totalPrice)}</Text>
          </Block>
          <TouchableOpacity
            onPress={handlePurchase}
            style={styles.btnBuy}
            activeOpacity={0.5}>
            <Text>Mua hàng({listCart?.length || 0})</Text>
          </TouchableOpacity>
        </Block>
      )}
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
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    width: WIDTH_SCREEN,
    justifyContent: 'space-between',
  },
  btnBuy: {
    backgroundColor: Colors.yellowSecondary,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: getSize.s(20),
  },
  textTitle: {
    color: Colors.bluePrimary,
    fontFamily: Font.Poppins_Medium,
    fontSize: 15,
  },
  textPrice: {
    color: Colors.redHolder,
    fontSize: 18,
    fontFamily: Font.Poppins_SemiBold,
  },
  contentContainerStyle: {
    paddingBottom: 52,
  },
});

export default CartScreen;
