import { useForm } from 'react-hook-form';
// import { useState } from 'react';
import { v4 as uuid } from "uuid";
function Form({ updateList }) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });
    const registerOption = {
        name: {
            required: "Item name cannot be empty",
            minLength: {
                value: 3,
                message: "Item must be 3 chars long"
            }
        },
        price: {
            required: "Price cannot be empty",
            min: {
                value: 1,
                message: "Price must be atleast 1"
            }
        },
        quantity: {
            required: "Quantity cannot be empty",
            min: {
                value: 1,
                message: "Quantity must be atleast 1"
            }
        }
    }
    const onSubmit = (data) => updateList({ ...data, id: uuid() });

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Item name : </label>
            <input type="text"
                {...register('name', registerOption.name)}
            />
            <small>
                {errors?.name && errors.name.message}
            </small>
        </div>
        <div>
            <label>Item name : </label>
            <input type="number"
                {...register('price', registerOption.price)}
            />
            <small>
                {errors?.price && errors.price.message}
            </small>
        </div>
        <div>
            <label>Item name : </label>
            <input type="number"
                {...register('quantity', registerOption.quantity)}
            />
            <small>
                {errors?.quantity && errors.quantity.message}
            </small>
        </div>
        <button>Submit</button>
    </form>
}

export default Form;