//creating an array of <li> elements by mapping over the array and then displaying that li array

export default function ColorList({ colors }) {
    // const lis = colors.map(color => <li>{color}</li>);
    //either display the entire array, or map over the array inside the jsx code and create li elements dynamically
    //kinda like we did in ejs
    return <>
        <p>List of Colors</p>
        <ul>
            {
                //Each list items needs a key prop that is a unique identifier 
                //It is a special attribute that needs to included when rendering an array of elements
                //Important for performance optimization and maintating component state properly
                colors.map(c =>
                    <li key={Math.random() + 999} style={{ color: c }} > {c}</li>
                )

            }
            {/* lis */}
        </ul >
    </>
}