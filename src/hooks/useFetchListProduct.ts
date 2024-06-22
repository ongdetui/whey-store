import {fetchListCart} from '@services/cart.service';
import {fetchProduct} from '@services/product.service';
import {Product} from 'models/product';
import {useEffect, useState} from 'react';

const useFetchListProduct = ({page, name}: {page: number; name: string}) => {
  const [data, setData] = useState<Product[]>([]);

  const getDataFirst = async () => {
    try {
      const {data: dataProduct} = await fetchProduct({
        page: page,
        name: name,
        limit: 30,
      });
      if (dataProduct?.metadata?.rows) {
        setData(dataProduct.metadata.rows);
      }
    } catch (error) {
      setData([]);
    }
  };

  useEffect(() => {
    getDataFirst();
  }, [name, page]);

  return {
    data,
  };
};

export default useFetchListProduct;
