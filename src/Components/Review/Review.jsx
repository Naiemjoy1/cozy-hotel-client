import { useState } from "react";

const Review = () => {
  // State variables to store input values
  const [email, setEmail] = useState("");

  // Event handler to update email state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Email:", email);
    // You can perform additional actions here, such as sending the email to a backend server
  };

  return (
    <div className="space-y-10 my-10">
      <div>
        <h3>This is review section</h3>
      </div>
      <div className="text-center space-y-5">
        <p className="font-marcellus text-5xl text-primary">
          Sign up for our newsletter
        </p>
        <div className="flex justify-center">
          <form onSubmit={handleSubmit}>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered join-item"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button type="submit" className="btn btn-primary join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
