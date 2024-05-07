export default function Die({ numSides }) {
    const rand = Math.floor(Math.random() * numSides + 1);
    return <p>Die roll = {rand}</p>
} 