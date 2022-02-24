import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addTask } from '../api/taskAPI';
import Alert from './Alert';

function AddProduct(props) {
    const [data, setData] = useState(null)
    const { email, name } = props.value.value;
    const { register, handleSubmit } = useForm()

    const datasend = async (data) => {
        const res = await addTask(data);
        setData(res);
        setTimeout(() => {
            setData(null);
        }, 3000);
    }


    return (
        <>
            {data ? <Alert value={{ type: "success", msg: "Data Insert Successful" }}></Alert> : ""}
            <div className="container w-25 mt-5 shadow p-3 mb-5 bg-body rounded">
                <div className='mx-auto mt-3'>
                    <h3>Add Your Product</h3>
                </div>
                <form onSubmit={handleSubmit(datasend)}>
                    <div className="d-flex flex-column mb-3" >
                        <label htmlFor="productPrise">User Email</label>
                        <input type="email" className="form-control p-1 mb-2 rounded border border-primary" name="userEmail" value={email} readOnly {...register('userEmail')} id="" />

                        <label htmlFor="buter">Buyer Name</label>
                        <input className="form-control p-1 mb-2 rounded border border-primary" type="text" readOnly value={name} name="buyer" {...register('buyer')} id="" />

                        <label htmlFor="productName">Product Name</label>
                        <input className="form-control p-1 mb-2 rounded border border-primary" type="text" name="productName" {...register('productName', { required: true })} id="" />

                        <label htmlFor="productPrise">Product prise</label>
                        <input className="form-control p-1 mb-2 rounded border border-primary" type="number" name="ProductPrise" {...register('productPrise', { required: true })} id="" />

                        <input type="checkbox" name="approvel" value={false} hidden {...register("approvle")} id="" />
                        <button className='mb-2 btn btn-primary form-control' type="submit">Add product</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddProduct