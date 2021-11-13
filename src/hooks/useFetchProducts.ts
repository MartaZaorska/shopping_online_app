import { useState, useEffect } from "react";

import { TProduct } from "../models/types";
import { updateProduct } from "../utils";

type Props = {
  data: TProduct[];
  error: boolean,
  loading: boolean;
}

function useFetchProducts(urlList: string[]): Props {
  const [data, setData] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if(urlList.length > 0){
      const promises = urlList.map(url => fetch(url).then(res => res.json()));
      setLoading(true);
      
      Promise.all(promises).then((resData: any[]) => {
        const updatedData: TProduct[] = [];
        resData.forEach(data => data.forEach((item: any) => updatedData.push(updateProduct(item))));
        setData(updatedData);
        setError(false);
        setLoading(false);
      }).catch(() => {
        setError(true);
        setLoading(false);
      });
      
    }
  }, [urlList]);

  return { data, loading, error };
}

export default useFetchProducts;