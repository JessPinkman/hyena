import Modal from "../shared/Modal";
import checkmark from "../../../assets/check.png";

const ShowSuccess = () => {
  return (
    <Modal>
      <div className="success_modal">
        <img src={checkmark} alt="" />
        <div className="color--success heading--huge mt:15">
          已傳送報告，即將跳轉下一筆檢測。
        </div>
      </div>
    </Modal>
  );
};

export default ShowSuccess;
