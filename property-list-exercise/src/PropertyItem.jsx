
export default function PropertyItem({ name, rating, price }) {

    return <>
        <div>
            <h2>{name}</h2>
            <h2>&#9733;{rating}</h2>
            <h3>{price}</h3>
        </div>
    </>

}