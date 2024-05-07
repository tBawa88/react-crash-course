import PropertyItem from "./PropertyItem"
import './PropertyList.css';
export default function PropertyList({ properties }) {
    return <>
        <div className="PropertyList">
            {properties.map(property => <PropertyItem key={property.id} {...property} />)}
        </div>
    </>
}