import { FC } from 'react';

import { FaCcMastercard, FaPaypal, FaGooglePay } from 'react-icons/fa';

const Delivery: FC = () => {
  return (
    <>
      <section className="delivery content">
        <h3>Cost of delivery</h3>
        <p><span>$9.99</span> on orders under $100</p>
        <p><span>FREE</span> on orders over $100</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa sapien, tristique et imperdiet ac, suscipit in augue. Nam sit amet nibh quam. Sed maximus nisl ac lacus facilisis, fringilla sollicitudin mauris aliquet. In hac habitasse platea dictumst. Donec accumsan velit orci, a tristique mi scelerisque vitae. Fusce nibh enim, ullamcorper ac vulputate nec, laoreet eleifend elit. Donec quis orci eget lorem rhoncus hendrerit quis feugiat ante. Ut sollicitudin euismod ex quis ultrices.</p>
        <h3>Payment Methods</h3>
        <div className="payment">
          <FaCcMastercard className="icon" />
          <FaPaypal className="icon" />
          <FaGooglePay className="icon" />
        </div>
      </section>
    </>
  );
}

export default Delivery;