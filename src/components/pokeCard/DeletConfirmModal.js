import { Box, Card, Modal, Typography } from "@mui/material";
import BaseButton from "../common/BaseButton";

export default function DeletConfirmModal({
  open,
  handleCloseOpenDeletConfirmModal,
  handleDelete,
}) {
  return (
    <>
      <Modal
        open={open}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Card
          sx={{
            width: 400,
            height: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>
            Are you sure you want to delete this Pokecard?
          </Typography>
          <Box
            sx={{
              mt: 5,
              display: "flex",
              justifyContent: "space-around",
              width: 400,
            }}
          >
            <BaseButton
              text="CONFIRM"
              bgcolor="#e63946"
              onClick={handleDelete}
            />
            <BaseButton
              text="CANCEL"
              bgcolor="#ffb703"
              onClick={handleCloseOpenDeletConfirmModal}
            />
          </Box>
        </Card>
      </Modal>
    </>
  );
}
