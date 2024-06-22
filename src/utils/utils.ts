export const keyExtractor = (item: any, index: number) =>
  'item_' + item?.id + '_' + index;

export const toPriceFormat = money => {
  if (!money) {
    return '0';
  }
  return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};