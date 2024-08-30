import "./FeedbackForm.css";
import { Modal } from "antd";
import EditFeedbackField from "./FeedbackFields/EditFeedbackField";
const FeedbackForm = ({ setOpen, open, addview, setAddview }) => {
  // const id="66ce94aca713b2defc720430"

  return (
    <>
      <Modal open={open} onCancel={() => setOpen(false)} width={0}>
        <EditFeedbackField
          addview={addview}
          setOpen={setOpen}
          setAddview={setAddview}
        />
      </Modal>
    </>
  );
};
export default FeedbackForm;
