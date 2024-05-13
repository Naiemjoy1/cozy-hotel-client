import { useContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { AuthContext } from "../../Components/FirebaseProvider/FirebaseProvider";

const ReviewForm = ({ roomDetails }) => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(1);
  const [reviewContent, setReviewContent] = useState("");

  const { _id } = roomDetails;

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();
    const review = {
      comment: reviewContent,
      rating: rating,
      name: user ? user.displayName : "Guest",
      timestamp: timestamp,
      review_id: _id,
      image: user?.photoURL,
      email: user?.email,
    };
    console.log("Review:", review);

    // Submit the review to the server
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Review submitted successfully");
        }
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
        alert("Failed to submit review");
      });

    setReviewContent("");
    setRating(1);
  };

  return (
    <div>
      <h2 className="font-marcellus text-4xl">Write a review</h2>
      <form className="card-body p-0" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Review</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Review"
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
            name="review"
            required
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating:</span>
          </label>
          <select
            value={rating}
            onChange={handleRatingChange}
            className="select select-bordered mt-1"
            required
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            value={user?.displayName}
            className="input input-bordered"
            name="name"
            readOnly
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

// Prop validation for roomDetails
ReviewForm.propTypes = {
  roomDetails: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    // Add validation for other properties if needed
  }).isRequired,
};

export default ReviewForm;
