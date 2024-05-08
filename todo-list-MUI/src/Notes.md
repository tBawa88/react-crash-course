The heirarchy goes something like this 
App -> Navbar -> TodoList body 

Navbar -> Box -> toolbar -> icon button -> menu icon -> typography 
Todo List -> Heading -> Itemlist

ItemList -> List -> ItemForm

List -> This is a mui component, in which we're mapping over the state array and generating Listitem components which is another mui component 
Each ListItem has a secondaryAction prop which is for the close icon button 
The body of the ListItem component is a another component called ListItemButton
This button has two child components LIstItemItcon which is a checkbox , and ListItemText
The checkbox component takes a prop 'checked' which takes in a boolean value

ItemForm -> This component has a box that is acting like a form , and an input component inside which is a controlled component

Working/Implementation of List
(The ItemList and ItemForm components are the onyl ones with state logic)

1. All the list items are being stored inside a single peice of state of ItemList component
2. The state contains an array of object, each object has uuid, value, and a boolean to tell if it's been checked or not
3. To start, the state is being seeded with filler data
4. Then we're mapping over that state and generating ListItem components
5. This component has a child component to which it passes a callback to update the parent's state
6. ItemForm => This component keeps track of what's being types inside the input using it's state
7. When the form is submitted, we create a newItem object and call the prop function by passing this newItem to it.
8. This updates the state of the parent component ItemList

(Using local storage)

"localStorage" property of of the window object is used to save data in the browser session
It has multiple methods defined on it like localStorage.setItem() localStorage.setItem("key", value)
The value it stores is in Json string format, so while storing and fetching u have to strigify it and parse it

1. useEffect hook, when the component is mounted for first time , use useEffect hook to populate the state.
2. Write a functoin updateLocalStorage() that updates the local storage with the given object
3. Call this function everytime we update the state so that localStorage has the latest value at all times
