
function handleClick(event){
    console.log('Button clicked');
    event.target.innerText = ++count;
    
}
let count = 0;
export default function Clicker(){
    return (
        <div>
            <p>Click counter</p>
            <button onClick={handleClick}>Clicks=</button>
        </div>
    )
}