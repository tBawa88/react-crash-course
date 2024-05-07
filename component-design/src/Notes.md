1) Lucky7 component :-
This component rolls 2 dices and if the sum of the two is 7 , it displays You won heading 
But this component is not flexible, and not reusable, reason being that the win condition is always 7, the no. of dies if fixed, it's only a single player game and we can't roll individual dice
In React, our goal is to break down components into smaller and simpler components so that they can be reusable and are flexible

2) LuckyN component :- (Better approach)
One component that renders a single dice (Die)
One parent component that renders multiple of these components (Dice)
A bigger component that allows us to decide the number of dice involved (LuckyN)
Show's a win message when current sum reaches the set Goal
A roll again button to roll the dice again

SO the component heirarchy would go like this 
App -> LuckyN -> Dice -> Die 

LuckyN is the logical component, meaning it stores the state and holds the logic to check for the win condition
The children components are all presentational components, no logic in them

The state of LuckyN will change on 2 conditions, Once when the 'Roll Again' button is clicked, Second when an individual die is clicked(state change via a child component).
The state of LuckyN stores an array of dices, and we pass this state to Dice comp. as a "Prop" so that it can render the appropriate number of Die comps.
To influence parent state from inside the child component, we pass a callback to the child as a prop, and that prop function will cal setState() function. This is possible due to the closure, since the callback was created in the parent scope, it will have access to the setState() no matter how many layers deep it goes\


Component Implementation:=
a)LuckyN : This component is called inside the App component and passed a goal and numDices prop
It holds an array inside it's state, which consists of all the values of different dices
Then this state is passed to the Dice component as a prop
Everytime this component is being rendered, we're accumulating the sum of the all the dices and checking if it's equal to the goal or not
b)Dice: This component maps over the prop it receives from it's parent, and renders a Die component with val prop
c)Die : This component displays a single die, and uses the val prop passed down from the parent as the value

Futher modification : (passing functions inside the props)
We want a click event on each die to re render it with an updated value, so every click on the die should update the state of the parent component which is LuckyN component
For this we need to pass a callback as a prop, and this callback will call the setState()
a)Created a function inside LuckyN called changeState(id) => this accepts an id, iterates over the array present inside the state , and updates the individual element that matches the id, finaly updates the state and forces a re render of LuckyN component 
b)Now this function is defined inside the parent component but called inside the child component, so we pass this callback function as a prop to all the children untill it reaches the correct child component which calls it