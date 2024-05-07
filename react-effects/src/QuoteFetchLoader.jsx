const url = 'https://type.fit/api/quotes';
import { useState, useEffect } from "react";
export default function FetchQuoteLoader() {
    const [quote, setQuote] = useState('');
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const quoteArray = await response.json();
            setQuote(quoteArray);
            setLoading(false);
        }
        fetchData();
    }, [])

    return <div>
        {/* If you load the page using throttling, you can see the loading appear before the fetch call is made */}
        {/* {isLoading && <h2>Loading ...</h2>} */}
        <h2 className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>
            Loading ...
        </h2>
        {!quote ? '' : quote.map((q, i) => <p key={i}>{q.text}</p>)}
    </div>


}