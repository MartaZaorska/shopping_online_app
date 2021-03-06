import { FC, memo } from 'react';
import { MdStarRate } from 'react-icons/md';

const Rating: FC<{rating: number | null}> = ({rating}) => {
  const stars = rating ? new Array(5).fill(0).fill(1, 0, Math.floor(rating)) : new Array(5).fill(0);
  
  return (
    <div className="rating">
      {stars.map((star, index) => (
        <MdStarRate className={star ? "icon active" : "icon"} key={`star_${index}`} />
      ))}
      <span>({rating ? Math.floor(rating) : '0'})</span>
    </div>
  )
}

export default memo(Rating);