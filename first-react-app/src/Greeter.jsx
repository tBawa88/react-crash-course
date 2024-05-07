export default function Greeter({ name }) {
    return <>
        <h2>Hello ,{name} ! Hope you're doing great! </h2>
    </>
}
//It's common practice to destructre all the props insdide function argument, so that we can use them as normal
//variables inside the function