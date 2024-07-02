import { loadStripe } from "@stripe/stripe-js";
import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <SectionsTitle
            heading={"Payment"}
            subHeading={"Please Pay to Eat"}
            ></SectionsTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;