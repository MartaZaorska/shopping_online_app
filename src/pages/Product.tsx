import { FC } from 'react';
import { useParams } from 'react-router-dom';

const Product: FC = () => {
  const { id } = useParams<{id: string}>();

  return (
    <div>product {id}</div>
  );
}

export default Product;