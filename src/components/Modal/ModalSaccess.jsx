import { useEffect } from 'react';
import { Modal } from 'bootstrap';

const ModalSaccess = ({ show, onClose }) => {
  useEffect(() => {
    const modalEl = document.getElementById('successModal');
    const modal = new Modal(modalEl);

    if (show) {
      modal.show();

      const handleHidden = () => {
        onClose?.();

        // Удаление backdrop вручную
        const backdrops = document.querySelectorAll('.modal-backdrop');
        backdrops.forEach((el) => el.remove());
        document.body.classList.remove('modal-open');
        document.body.style = '';
      };

      modalEl.addEventListener('hidden.bs.modal', handleHidden);

      return () => {
        modalEl.removeEventListener('hidden.bs.modal', handleHidden);
        modal.hide();

        // Очистка возможных остатков backdrop
        const backdrops = document.querySelectorAll('.modal-backdrop');
        backdrops.forEach((el) => el.remove());
        document.body.classList.remove('modal-open');
        document.body.style = '';
      };
    }
  }, [show, onClose]);

  return (
    <div
      className="modal fade"
      id="successModal"
      tabIndex="-1"
      aria-labelledby="successModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow">
          <div className="modal-header">
            <h5 className="modal-title" id="successModalLabel"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Закрыть"
            ></button>
          </div>
          <div className="modal-body text-center">
            <h4>
              Thank you! Your message was sent successfully. We will contact
              soon
            </h4>
          </div>
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-getstarted"
              data-bs-dismiss="modal"
            >
              ОК
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSaccess;
