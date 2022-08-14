const modals = () => {
  function hiddenCloser(bodyToHide) {
    bodyToHide.style.display = 'none';
    //document.body.classList.remove('modal-open');
      // document.body.style.overflow = 'hidden';
    bodyToHide.style.display === 'block'?
          document.body.style.overflow = 'hidden':document.body.style.overflow = '';

  }

  function showModal(bodyToHide) {
    bodyToHide.style.display = 'block';
    //document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

  }

  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
          showModal(modal);

        }
      });
    });

    close.addEventListener('click', () => {
      hiddenCloser(modal);

    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        hiddenCloser(modal);

      }
    });
  }

  function showModalByTime(selector, time) {
    const modal = document.querySelector(selector);
    setTimeout(() => {
      showModal(modal);
      

    }, time);
  }

  showModalByTime('.popup_engineer', 3000);

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');

  bindModal('.phone_link', '.popup', '.popup .popup_close');
};

export default modals;
