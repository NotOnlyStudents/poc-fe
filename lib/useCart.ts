import useSWR from 'swr'
import Cart from "types/Cart";

const fetcher = (url) => fetch(url).then(res => res.json());

export function useCart(id: string): { cart: Cart, error: any } {
    const { data, error } = useSWR(`${process.env.API_BASE_URL}/dev/cart/${id}`, fetcher);

    return {
        cart: data ? data.cart : data,
        error
    }
}