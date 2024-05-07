The value of form elements like inputs and textarea in React is controlled by the state of the component.
This way React is up to date with the latest value of the element. This is done by using an onChange event handler 
and updating state every time there is a change in the value
Input elements that are controlled by the state of the component are called controlled elements
So with this approach, we have the input value at alltimes, and dont need to find the input and extract it's value everytime

1) Labeling inputs : htmlFor property 
this property is used to link a label with an input, just like we use className instead of class 
In jsx syntax normal for="name" is not recognized since it's a keyword for loop

2) Handling multiple inputs :
One approach is to use multiple peices of state linked to each input and have multiple updater function for each state. But this approach does not scale well as the form grows larger

Second approach is to use an Object to store the state of the component
We give each input a name="" property, and the object will also be given a property of the same name, hence this object will store values of all the inputs inside the form.
Only single eventHandler will be sufficient with this approach
When a onChange() is fired, we figure out which input it was by using event.target.name, store that name inside a var, and make the change inside the state variable using COMPUTED property name syntax [inputName]


3) SHOPPING List exercise: 
A parent component that manages list (<ul>) of shopping items
Just below it, render a form that can add / delete items to the list

Implementation :
a) The parent component has a state that stores an array of objects, each object representing a list item
b) The Shopping form component has it's own state, and all the input elements in it are controlled elements
meaning that at any given time, the state of the form component stores all the values of input elements inside that form
c) We need two things to happen when the form is submited, 1: The page should not refresh, 2: The state of the parent component needs to be updated using the state of form component
d) For this we pass a callback as a prop to the form component
e) This callback has the ability to change the parent state, and is being called inside the form component's onSubmit() event handler


4) Form validation : from scratch
Before submitting we want to place some checks and display an error message if the validation fails.
A better approach is to use a third-party library which makes form validation pretty easy 


5) react-hook-form : there is another popular lib called formik, which also does the same

//extracting variables from useForm() function 
const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });


The {mode : "onChange"}  options tells react-hook-form to validate the form on every input change , essentially making all the input elements as controlled elements. But the component doesn't re render on every change like it was doing when we used state to controll the input values. The component is only re-rendered when a validation is done. On every validation, the component is re renderd

- Then this gives us a register() function to which we can pass in the label name and options 
- handleSubmit () function which only calls our formsubmit function if the data is validated
errors object which contains the messages that we passed in the options, if there are any errors
- formState : {errors} This uses object destructuring and extracts the 'errors' property from the formState object returned by useForm()


a) {...register("firstName")} -> include this in the input element,
<input ref={...} onChange={...} onBlur={...} name="firstname"/> this is what happens behind the scenes
onChange event handler is automatically added to the input and it's state is now managed internally by the library

Validation := This register function also accepts an object of options that contains validation rules supported by this library
required
min - for nums
max
minLength - for strings
maxLength
pattern - string must contain(pattern: /^[A-Za-z]+$/i)
validate

{...required("firstName", {required : true, minLength : 5, maxLength : 20, })}

OR you can create a single object and put all the options in it, and pass in the properties of that object
 
 //Each property contains the corresponding options and shall be passed as such
 registerOptions.name,  registerOptions.price and so on
 const registerOptions = {
        name: { required: "Item name cannot be blank" },
        price: {
            required: "Price cannot be blank",
            min: {
                value: 1,
                message: "Price must be 1 or more"
            },
            max: {
                value: 5,
                message: "Price must be under 5"
            }
        },
        qty: {
            required: "Qty cannot be blank",
            min: {
                value: 1,
                message: "Qty must be 1 or more"
            },
            max: {
                value: 5,
                message: "Qty must be under 5"
            }
        }
    }

b) handleSubmit(mySubmit) : this function goes in the "onSubmit" handler
onSubmit={handleSubmit(mySubmit)} , it takes in a function as an argument that is provided by us, it also passed an argument to the function, this argumet contains the form data in object form(json format)
    function mySubmit(formData) {console.log(formData)}
This makes sure that mySubmit is not called untill and unless the form data is validated


c) errors ---
formState: { errors } is using object destructuring to extract the errors property from the formState object returned by the useForm hook.

d) displaying errors :
since all the errors are in this obj, and also since the component is being re renderd, we can conditionally display error messages that will go away once the component re renders after a successful validation

<small className="text-danger">
    {errors?.name && errors.name.message}
</small>

Understanding this {errors?.name && errors.name.message}
-errors?.name = is a JS feature that safely accesses the property of an object but it first checks if the object is null or not. This prevents any runtime errors that occur from checking properties of null or undefined objs
- && operator in JS returns the value of right hand operand if the left hand operand is evaluated to be truthy
So it returns the value of erros.name.message , which is a string and it get's inserted into the <small> element