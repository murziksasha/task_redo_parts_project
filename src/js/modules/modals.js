const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();

    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach(item => {
          item.style.display = 'none';
          // console.log(item.hasAttribute('data-modal'));
        });

        showModal(modal);

        // windows.forEach(item => {
        //     showModal(item);
        // });
      });
    });

    close.addEventListener('click', e => {
      if (e.target !== e.target.getAttribute('[data-modal]')) {
        hiddenCloser(modal);
      }

      windows.forEach(item => {
        hiddenCloser(item);
      });
    });
    modal.addEventListener('click', e => {
      if (e.target === modal && closeClickOverlay) {
        hiddenCloser(modal);
      }
    });
  }

  function hiddenCloser(bodyToHide) {
    bodyToHide.style.display = 'none';

    bodyToHide.style.display === 'block'
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
      document.body.style = `0px`;
  
  }

  function showModal(bodyToHide) {
    bodyToHide.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style = `${scroll}px`;
  }

  function showModalByTime(selector, time) {
    const modal = document.querySelector(selector);
    setTimeout(() => {
      showModal(modal);
    }, time);
  }

  // showModalByTime('.popup_engineer', 60000);

  function calcScroll() {
    const div = document.createElement('div');
    div.setAttribute('id', 'technical');
    div.style.cssText = `width: 50px; height: 50px; overflow-y = scroll; visibility: hidden`;

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', false);

  bindModal('.phone_link', '.popup', '.popup .popup_close');

  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');

  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);

  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

  calcScroll();
};

export default modals;
