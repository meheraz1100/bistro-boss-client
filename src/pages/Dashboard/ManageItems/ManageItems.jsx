import { FaEdit } from "react-icons/fa";
import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import useMenu from "../../../Hooks/useMenu";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, ,refetch] = useMenu();
  const axiosSecure = useAxiosSecure();


  const handleDeleteItem =  (item) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menu/${item._id}`)
            // console.log(res.data);
            if(res.data.deletedCount > 0) {
                // refetch to update the UI
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${item.name} has been deleted`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    });
  }

  return (
    <div>
      <SectionsTitle
        heading={"Manage All Items"}
        subHeading={"Hurry up"}
      ></SectionsTitle>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#
                </th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            {/* eslint-disable-next-line */}
            <tbody>
              {
                menu.map((item, index) => <tr key={menu._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-ghost text-xl bg-orange-500"><FaEdit className="text-white" ></FaEdit></button>
                      </Link>
                    </td>
                    <td><button onClick={() => handleDeleteItem(item)} className="btn btn-ghost text-xl text-red-600"><RiDeleteBin5Fill /></button></td>
                  </tr>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
