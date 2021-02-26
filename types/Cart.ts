import { Product } from "types/Product";

export default interface Cart {
    readonly ID: string
    readonly products: Product[]
}