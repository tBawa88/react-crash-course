// "url": 
let url = "https://api.github.com/users";
import { useState, useEffect } from "react";
import UserForm from "./UserForm";
import axios from "axios";
export default function GitHubSearch() {
    const [username, setUsername] = useState('colt');
    const [profile, setProfile] = useState({ data: null, isLoading: true })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`${url}/${username}`)
            setProfile({ data: response.data, isLoading: false })
            console.dir(response);
        }
        fetchData();

    }, [username]);

    const updateUser = (name) => {
        console.log("Name received from form ", name)
        setProfile({ data: null, isLoading: true })
        setUsername(name);
    }

    if (profile.isLoading) return <span>Loading ...</span>
    return <div>
        <UserForm updateUser={updateUser} />
        <strong>{profile.data.name}</strong>
        <img src={profile.data.avatar_url} />
    </div>
}