import { useState } from "react"

function SignUpForm() {
    const [fName, setFname] = useState('John');
    const [lName, setLname] = useState('Doe');

    const updateFname = (event) => {
        setFname(event.target.value);
    }
    const updateLname = (event) => {
        setLname(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        console.log("Current state is ", fName, lName);
    }

    return <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="firstname">Enter Firstname:</label>
            <input type="text"
                value={fName}
                onChange={updateFname}
                id="firstname" />
        </div>
        <div>
            <label htmlFor="lastname">Enter Lastname:</label>
            <input type="text"
                value={lName}
                onChange={updateLname}
                id="lastname" />
        </div>


        <button >Sumbit</button>
    </form>
}

export default SignUpForm;