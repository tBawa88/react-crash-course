import { useState } from "react"

function BetterSignUpForm() {
    const [inputs, setInputs] = useState({
        firstname: '',
        lastname: '',
        password: ''
    });



    function handleSubmit(event) {
        event.preventDefault();
        console.log("Current state is ", inputs);
    }

    const updateInput = (event) => {
        const inputName = event.target.name;
        //spread the object and use computed property-name using [inputName] : 
        //this is equivalent to writing firstname : 
        setInputs(oldInputs => ({ ...oldInputs, [inputName]: event.target.value }))
    }

    // FORM-------------
    return <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="firstname">Enter Firstname:</label>
            <input type="text"
                value={inputs.firstname}
                onChange={updateInput}
                name="firstname"
                id="firstname" />
        </div>
        <div>
            <label htmlFor="lastname">Enter Lastname:</label>
            <input type="text"
                value={inputs.lastname}
                onChange={updateInput}
                name="lastname"
                id="lastname" />
        </div>
        <div>
            <label htmlFor="password">Enter Lastname:</label>
            <input type="password"
                value={inputs.password}
                onChange={updateInput}
                name="password"
                id="password" />
        </div>


        <button >Sumbit</button>
    </form>
}

export default BetterSignUpForm;