const checkName = (name) => {
    if (name === '')
        return false;
    if (name.length > 6)
        return false;
    return true;
}

const checkPrice = (price) => price > 0 && price < 100;
const checkQty = (qty) => qty > 0 && qty < 10;

export { checkName, checkQty, checkPrice };