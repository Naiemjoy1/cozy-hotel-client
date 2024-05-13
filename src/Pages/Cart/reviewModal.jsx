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
  const { _id } = booking;

  const { user } = useContext(AuthContext);

  const [hasSubmittedFeedback, setHasSubmittedFeedback] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (user) {
      // Fetch reviews when component mounts
      fetch("http://localhost:3000/reviews")
        .then((response) => response.json())
        .then((data) => {
          // Check if the user has already submitted feedback
          const alreadySubmitted = data.some(
            (review) => review.review_id === _id && review.email === user.email
          );
          setHasSubmittedFeedback(alreadySubmitted);
          setReviews(data);
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
        });
    }
  }, [_id, user]);

  return (
    <div>
      <p>booking id : {_id}</p>
      <p>
        review id:
        {reviews.map((review) => (
          <span key={review._id}>{review.review_id} </span>
        ))}
      </p>
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
          {/* {user && hasBookedRoom ? (
            hasSubmittedFeedback ? (
              <Typography variant="h6">Already Submitted Feedback.</Typography>
            ) : (
              <FromForFeedback booking={booking} />
            )
          ) : (
            <Typography variant="h6">
              You need to book a room to submit feedback.
            </Typography>
          )} */}
        </Box>
      </Modal>
    </div>
  );
};

export default ReviewModal;
