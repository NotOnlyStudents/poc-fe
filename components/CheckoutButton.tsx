import { loadStripe } from '@stripe/stripe-js'

import "styles/utils.module.css"

const stripePromise = loadStripe("pk_test_51IHqhuEKthtArr3S4MYSAYFEPiFlioccyA4SjUNArmmdSmK7B05UnMdsNKIu0TCRXADZLVmjEUlqKRIR4D2SWtJ700PVmechEl");

export default function CheckoutButton({ cartID }: { cartID: string }) {
    const handleClick = async () => {
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const response = await fetch(`${process.env.API_BASE_URL}/dev/create-checkout-session/${cartID}`, { method: 'POST' });

        const session = await response.json();

        // Show error if there is one
        if (session['message']) {
            alert(session.message);
        } else {
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });

            if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
                alert(result.error.message);
            }
        }
    };

    return (
        <button 
            className="bg-indigo-500 font-semibold hover:bg-opacity-80 active:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
            onClick={handleClick}
        >
            Checkout
        </button>
    );
}