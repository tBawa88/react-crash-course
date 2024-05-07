In React, "effects" refer to the side effects that occur when a component is rendered.
Side effects are things that affect the outside world, such as fetching data from an API, subscribing to events or updating the dom

React provides a useEffect hook as a way to perform side effects in function components.
This is most commonly used to make a fetch request to populate some dom component when the component is mounted (meaning it appears on the dom) 
Or setting an event handler when the component is unmounted 


//an example to make an async api fetch request 
useEffect(() => {
  try {
    const fetchData = async () =>{
      const response = await fetch(url);
      const quoteArray = await response.json();
      setQuote(quoteArray);
    }
    fetchData();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}, []);

- The useEffect() function accepts a callback, and inside this callback we execute the side effect that we want to occur when the component is mounted
- The second argument is a 'dependancy array' []. This array contains the list of items which when change, useEffect() will be called again. If the array is passed empty, then useEffect only runs once, when component is mounted 
-If we dont pass the second argument, and only the function, then useEffect will execute on every re render


