
import "./FeedbackForm.css";
import { Button, Modal } from "antd";
import EditFeedbackField from './FeedbackFields/EditFeedbackField'
const FeedbackForm = ({ setOpen, open }) => {
    // const id="66ce94aca713b2defc720430"
  
  return (
    <>
      <Modal
        footer={<Button type="primary">Submit</Button>}
        // loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
        width={300}
      >
<EditFeedbackField setOpen={setOpen} />

      </Modal>
    </>
  );
};
export default FeedbackForm;
