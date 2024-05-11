import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/FirebaseProvider/FirebaseProvider";
import Cart from "../Cart/Cart";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:3000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("are you sure want to delete");
    if (proceed) {
      fetch(`http://localhost:3000/bookings/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "applicaion/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        })
        .catch((error) => {
          console.error("Error deleting booking:", error);
          alert("An error occurred while deleting the booking.");
        });
    }
  };

  return (
    <div className="min-h-[calc(100vh-327px)] flex gap-10 my-20">
      <div className=" w-3/5">
        <div className=" relative mb-10">
          <img className="w-full" src="" alt="" />
          <div className="absolute rounded-lg h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]"></div>
          <div className="absolute bottom-0 w-full pl-10"></div>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className=" text-black">
                <th>
                  <label>
                    {/* <input type="checkbox" className="checkbox" /> */}
                  </label>
                </th>
                <th></th>
                <th>BOOKING ROOM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <Cart
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                ></Cart>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-1/4 bg-primary text-white  p-10">
        <p className=" font-marcellus text-2xl">Cart totals</p>
        <div className="divider divider-secondary"></div>
        <div className="flex justify-between items-center">
          <p>Subtotal</p>
          <p>Subtotal</p>
        </div>
        <div className="divider divider-secondary"></div>
        <div className="flex justify-between items-center">
          <p>Subtotal</p>
          <p>Subtotal</p>
        </div>
        <div className="divider divider-secondary"></div>
      </div>
    </div>
  );
};

export default Bookings;
