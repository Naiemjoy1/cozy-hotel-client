import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 550,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://i.ibb.co/F5Jf4cw/pexels-cottonbro-6466297.jpg')",
  backgroundSize: "cover",
};

const closeButtonStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  margin: "12px",
  color: "red",
  fontSize: "30px",
};

const HomePageModal = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    Aos.refresh();
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Button onClick={handleClose} sx={closeButtonStyle}>
          <IoCloseCircleSharp />
        </Button>

        <div data-aos="fade-up">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p className="text-2xl font-marcellus text-white">
              Special Offers and Promotions
            </p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p className="text-white text-center">Buy One Get Two</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p className="text-white text-center">Only for Breakfast</p>
          </Typography>
        </div>
      </Box>
    </Modal>
  );
};

export default HomePageModal;
