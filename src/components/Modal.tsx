import { FC, memo } from 'react';

import Filters from './Filters';

const Modal: FC<{closeModal: Function}> = ({closeModal}) => {
  return (
    <section className="modal">
      <div className="modal__background" onClick={() => closeModal()}></div>
      <div className="modal__content">
        <Filters closeModal={closeModal} />
      </div>
    </section>
  )
}

export default memo(Modal);