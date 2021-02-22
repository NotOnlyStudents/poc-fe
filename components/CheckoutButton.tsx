import utilStyles from 'styles/utils.module.css'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe("pk_test_51IHqhuEKthtArr3S4MYSAYFEPiFlioccyA4SjUNArmmdSmK7B05UnMdsNKIu0TCRXADZLVmjEUlqKRIR4D2SWtJ700PVmechEl");

async function CheckoutButton() {
    // const handleClick = async () => {
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const response = await fetch('http://localhost:3000/dev/create-checkout-session/1', { method: 'POST' });

        const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        });

        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    // };

    return (
        <></>
        // <button role="link" onClick={handleClick}>
        //     Checkout
        // </button>
    );
};

export default CheckoutButton;
