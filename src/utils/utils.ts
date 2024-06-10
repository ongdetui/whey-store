export const keyExtractor = (item: any, index: number) =>
  'item_' + item?.id + '_' + index;
