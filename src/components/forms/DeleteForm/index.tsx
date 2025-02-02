import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import {
  Box,
  BoxFormHeader,
  ButtonWrapper,
  MessageLabel,
} from "./StyledComponents";
import { Button, Logo2 } from "../../../styles/globalStyledComponents";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
}

const DeleteStudentModal: React.FC<Props> = ({
  open,
  handleClose,
  handleConfirm,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open} timeout={600}>
        <Box>
          <BoxFormHeader>
            <Logo2 />
            <h2>DELETE STUDENT</h2>
          </BoxFormHeader>

          <MessageLabel>
            Are you sure you want to delete this student?
          </MessageLabel>

          <ButtonWrapper>
            <Button page="home" type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button page="homeDelete" type="button" onClick={handleConfirm}>
              Yes, Delete
            </Button>
          </ButtonWrapper>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DeleteStudentModal;
