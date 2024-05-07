const url = 'https://type.fit/api/quotes';
import { useState, useEffect } from "react";
export default function FetchQuote() {
    //useState does not take in async function, so we cant directly make api calls insid
    const [quote, setQuote] = useState('');

    //we can use useEffect that populates the state once when the component mounts
    //have to define an async function seperately inside useState's callback as it doest not take an async as an argument
    //call that async function immidiately inside a try catch block
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const quoteArray = await response.json();
            setQuote(quoteArray);
        }
        fetchData();
    }, [])

    return <div>

        {!quote ? '' : quote.map((q, i) => <p key={i}>{q.text}</p>)}
    </div>


}