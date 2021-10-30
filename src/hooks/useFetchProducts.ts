import { useState, useEffect } from "react";
import { TProduct } from "../models/types";

type Props = {
  data: TProduct[];
  error: boolean,
  loading: boolean;
}

export function updateData(data: any): TProduct {
  return {
    id: data.id,
    brand: data.brand,
    name: data.name,
    price: parseFloat(data.price) || 19.99,
    rating: data.rating,
    image_link: data.image_link,
    description: data.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis et urna sit amet tincidunt. Quisque ac erat sit amet erat efficitur ultricies. Nullam sodales efficitur nibh, non porta felis egestas vitae. Sed non feugiat lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur imperdiet libero eget semper maximus. Morbi scelerisque vestibulum eros, ut tincidunt nunc lobortis ut. Aenean aliquet est a condimentum vulputate. Proin porttitor ligula justo. Sed nunc neque, dictum rutrum massa eget, facilisis molestie est. Sed interdum sem at viverra rutrum.",
    category: data.product_type,
    created_at: new Date(data.created_at).getTime(),
    product_colors: data.product_colors
  }
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
        resData.forEach(data => data.forEach((item: any) => updatedData.push(updateData(item))));
        setData(updatedData);
        setError(false);
        setLoading(false);
      }).catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
    }
  }, [urlList]);

  return { data, loading, error };
}

export default useFetchProducts;