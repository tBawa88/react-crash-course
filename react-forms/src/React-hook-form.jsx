//This is a demo file for react-hook-form library, helps us in form valdation 
import { useState } from "react";
import { useForm } from 'react-hook-form';
// let count = 1;
function ReactHookForm({ addItem }) {
    // console.log("Render ", count++)
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    const onSubmit = (data) => {
        console.log(data);
        addItem(data);
    };
    const onError = (err) => {
        console.dir(err)
    }
    //regiter options for each input
    const registerOptions = {
        name: {
            required: "Item name cannot be blank",
            minLength: {
                value: 4,
                message: "Item name must be 4 chars long"
            }
        },
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


    return <form action="" onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
            <label htmlFor="name">Enter Name of Item:</label>
            <input
                type="text"
                // {...register("name", { minLength: 1, maxLength: 10, required: true })}
                {...register('name', registerOptions.name)}
            />
            <small className="text-danger">
                {errors?.name && errors.name.message}
            </small>
        </div>
        <div>
            <label htmlFor="price">Enter Name of Item:</label>
            <input
                type="number"
                // {...register("price", { min: 1, max: 10, required: true })}
                {...register('price', registerOptions.price)}
            />
            <small className="text-danger">
                {errors?.price && errors.price.message}
            </small>
        </div>
        <div>
            <label htmlFor="qty">Enter Name of Item:</label>
            <input
                type="number"
                // {...register("qty", { min: 1, max: 5, required: true })}
                {...register('qty', registerOptions.qty)}
            />
            <small className="text-danger">
                {errors?.qty && errors.qty.message}
            </small>

        </div>
        <button>Add item</button>
    </form>

}

export default ReactHookForm;