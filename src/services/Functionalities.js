const setCart = () => { };
const setFav = () => { };
export function AddToCartHandle(newItem) {
    setCart(Cart => {
        // element is already on the cart
        if (Cart.find(CartItem => CartItem["id"] == newItem["id"])) {
            return Cart.map(CartItem => ({ ...CartItem, count: CartItem["count"] + 1 }))
        }
        return [...Cart, { ...newItem, count: 1 }]
    })
}

export function addToFavHandle(Item) {
    Item["favourite"] = !Item["favourite"];
    setFav(oldFav => [...oldFav, Item])
}

export function formatPrice(value) {
    const num = Number(value);
    if (!Number.isFinite(num)) return "";

    const hasFraction = !Number.isInteger(num);
    const [intPart, decPart] = Math.abs(num)
        .toFixed(hasFraction ? 2 : 0)
        .split(".");

    const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const sign = num < 0 ? "-" : "";

    return `${sign}$${grouped}${decPart ? "." + decPart : ""}`;
}
