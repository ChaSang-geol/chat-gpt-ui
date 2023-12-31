import bootstrap from "bootstrap";

function Popup({ message, title, callback }) {
  // 모달 객체 생성
  const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  const handleClose = () => {
    myModal.hide();
    if (callback) {
      callback();
    }
  };

  myModal.show();

  return (
    <>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">{title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {message}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
              {/* <button type="button" class="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;