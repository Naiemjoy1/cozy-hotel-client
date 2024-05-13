import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FromForFeedback from "../../Components/FromForFeedback/FromForFeedback";
import { AuthContext } from "../../Components/FirebaseProvider/FirebaseProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ReviewModal = ({ booking }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { room_id } = booking;

  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [roomDetails, setRoomDetails] = useState([]);

  useEffect(() => {
    // Fetch reviews when component mounts
    fetch("http://localhost:3000/reviews")
      .then((response) => response.json())
      .then((data) => {
        const filteredReviews = reviews.filter(
          (review) => review.review_id === room_id
        );
        setReviews(filteredReviews);
        console.log("Reviews:", data); // Log reviews data
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  // Fetch bookings for the current room
  useEffect(() => {
    fetch("http://localhost:3000/rooms")
      .then((response) => response.json())
      .then((data) => {
        const filteredRoomDetails = roomDetails.filter(
          (room) => room._id === room_id
        );
        setRoomDetails(filteredRoomDetails);
        console.log("Room Details:", data); // Log room details data
      })
      .catch((error) => {
        console.error("Error fetching room details:", error);
      });
  }, []);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="btn btn-sm bg-secondary text-white"
      >
        Review
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {user?.email &&
          reviews.some((review) => review.email === user.email) ? (
            <FromForFeedback booking={booking} />
          ) : (
            <Typography variant="h6">Already Submitted Feedback.</Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ReviewModal;
