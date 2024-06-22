import {Block, Container, Text} from '@components';
import NavigationService from '@navigation/navigationService';
import {RouteAppEnum, RouteAuthEnum} from '@navigation/route';
import {UserState, actionLogout} from '@redux/slices/user.slice';
import {IRootState} from '@redux/stores';
import Colors from 'configs/colors';
import Font from 'configs/fonts';
import {getSize} from 'configs/responsive';
import {Fragment, useCallback, useState} from 'react';
import {FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Menu, MenuItem} from 'react-native-material-menu';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {keyExtractor} from 'utils/utils';
import ItemProduct from './components/ItemProduct';
import * as Keychain from 'react-native-keychain';
import debounce from 'lodash';
import useFetchListProduct from '@hooks/useFetchListProduct';
import {Product} from 'models/product';
import {addCart, createOrder, listOrderList} from '@services/cart.service';
import {useToastMessage} from '@hooks/useToastMessage';

const ProductsScreen = () => {
  const {top} = useSafeAreaInsets();
  const {email, id} = useSelector<IRootState, UserState>(state => state.user);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [textSearch, setTextSearch] = useState<string>('');
  const dispatch = useDispatch();
  const {data} = useFetchListProduct({page: 1, name: textSearch});
  const {showSuccessTop} = useToastMessage();

  const handleAddCart = async (item: Product) => {
    try {
      const {data} = await listOrderList(id);

      await addCart(
        {
          order_id: data?.metadata?.rows?.[0]?.id,
          productId: item.id,
          quantity: 1,
        },
        id,
      );
      showSuccessTop('Thêm thành công sản phẩm vào giỏ hàng');
    } catch (error) {}
  };

  const renderItem = useCallback(
    ({item}: {item: Product}) => (
      <ItemProduct
        url={JSON.parse(item.images)?.[0]?.url}
        name={item.name}
        category_name={item.category_name}
        price={item.price}
        handleItem={() => {
          NavigationService.navigate(RouteAppEnum.DetailProductScreen, item);
        }}
        handleAddCart={() => handleAddCart(item)}
      />
    ),
    [],
  );

  const hideMenu = () => setShowMenu(false);
  const handleMenu = () => setShowMenu(true);

  const handleLogout = () => {
    setShowMenu(false);

    setTimeout(async () => {
      NavigationService.reset(RouteAuthEnum.LoginScreen);
      await Keychain.resetInternetCredentials('JWT_KEY');
      await Keychain.resetInternetCredentials('JWT_REFRESH_KEY');
      dispatch(actionLogout());
    }, 500);
  };

  return (
    <Container backgroundColor={Colors.bgBlur} edges={[]}>
      <FlatList
        ListHeaderComponent={
          <Fragment>
            <Block style={styles.header} paddingTop={top}>
              <Block>
                <Text style={styles.textHello}>Hello,</Text>
                <Text style={styles.textEmail}>{email}</Text>
              </Block>
              <Menu
                style={styles.menu}
                visible={showMenu}
                onRequestClose={hideMenu}
                anchor={
                  <TouchableOpacity onPress={handleMenu} activeOpacity={0.5}>
                    <Icon
                      name={'person-circle-outline'}
                      color={Colors.bluePrimary}
                      size={getSize.m(32)}
                    />
                  </TouchableOpacity>
                }>
                <MenuItem onPress={handleLogout}>
                  <Text style={styles.textMenu}>Logout</Text>
                </MenuItem>
              </Menu>
            </Block>
            <Block style={styles.search}>
              <Block flexDirection="row" alignItems="center" flex={1}>
                <Icon
                  name={'search-outline'}
                  color={Colors.mainText}
                  size={24}
                />
                <TextInput
                  style={styles.inputSearch}
                  placeholderTextColor={'#00000080'}
                  placeholder="Whey protein..."
                  onChangeText={debounce.debounce(setTextSearch, 200)}
                />
              </Block>
              <TouchableOpacity activeOpacity={0.5}>
                <Icon
                  name="options-outline"
                  color={Colors.mainText}
                  size={26}
                />
              </TouchableOpacity>
            </Block>
          </Fragment>
        }
        keyExtractor={keyExtractor}
        data={data}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: getSize.s(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: getSize.v(20),
  },
  textHello: {
    fontSize: 22,
    fontFamily: Font.Poppins_SemiBold,
    color: Colors.bluePrimary,
  },
  textEmail: {
    fontFamily: Font.Poppins_Regular,
    fontSize: 15,
    color: Colors.bluePrimary,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: 48,
    borderRadius: 24,
    marginHorizontal: getSize.s(12),
    paddingHorizontal: getSize.s(12),
    marginBottom: getSize.v(20),
  },
  inputSearch: {
    fontSize: 14,
    fontFamily: Font.Poppins_Regular,
    color: Colors.mainText,
    marginLeft: getSize.s(8),
  },
  contentContainerStyle: {
    paddingHorizontal: getSize.s(6),
  },
  menu: {
    marginTop: 40,
  },
  textMenu: {
    fontFamily: Font.Poppins_SemiBold,
    fontSize: 16,
  },
});

export default ProductsScreen;
