import { FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FaCalendarDays, FaShop } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { IoMenuSharp } from "react-icons/io5";
import { MdEmail, MdOutlineRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO :  get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex dark:text-white">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <GiWallet />
                  Not history
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart />
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdOutlineRateReview />
                  Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaCalendarDays />
                  Real Payment History
                </NavLink>
              </li>
            </>
          )}

          {/* shared navlinks */}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <IoMenuSharp />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <FaShop />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <MdEmail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
