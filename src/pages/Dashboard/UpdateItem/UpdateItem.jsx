import { useLoaderData } from "react-router-dom";
import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const image_hosing_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosing_api = `https://api.imgbb.com/1/upload?key=${image_hosing_key}`
const UpdateItem = () => {
  const {name, category, recipe, price, _id} = useLoaderData();
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0]}
    const res = await axiosPublic.post(image_hosing_api, imageFile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
    if(res.data.success){
        // now send the menu item data to the server with the imageurl
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url
        }
        // 
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
        console.log(menuRes.data);
        console.log('with image url', menuRes.data);
        if(menuRes.data.modifiedCount > 0){
            // show the success pop up
            // reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is Updated to the menu.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
  };
  return (
    <div>
      <SectionsTitle
        heading="Update Item"
        subHeading="Refresh Item"
      ></SectionsTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Detail</span>
              </div>
              <textarea
                {...register("recipe")}
                defaultValue={recipe}
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </label>
          </div>
          <div className="form-control w-full my-6">
            <input
              onChange={() => console.log(event.target)}
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn">
            Update Menu Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
