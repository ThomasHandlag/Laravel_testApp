import { Link } from "@inertiajs/inertia-react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const CartButton = ({cart_num}) => {
    return (
        <button className="rounded-xl text-indigo-500 flex dark:text-indigo-400">
                        <Link className="p-2 text-2xl" href="/shopping">
                            <AiOutlineShoppingCart />
                        </Link>
                        <span className="flex justify-center items-center rounded-full w-5 h-5 bg-indigo-900 text-indigo-100 dark:bg-purple-container dark:text-indigo-100">
                            {cart_num ? cart_num : 0}
                        </span>
                    </button>
    )
}

export default CartButton;