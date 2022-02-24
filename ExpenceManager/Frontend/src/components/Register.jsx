import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import RegisterApi from '../api/RegisterApi';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';

export default function Register() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, errors } = useForm();
    const [pattnerlogin, setPattnerlogin] = useState(false);
    const [login, setLogin] = useState(null);
    setTimeout(() => {
        setLogin(false)
    }, 3000)

    const ischecked = (e) => {
        setPattnerlogin(e.target.checked);
    }

    const onSubmit = async (data) => {
        const responce = await RegisterApi(data);
        if (responce) {
            return navigate("/login");
        } else {

            setLogin({ type: "danger", msg: "Login Faild" });
        }
    }
    console.log(login);
    return (
        <>
            {login && <Alert value={login}></Alert>}

            <div className="container-md w-50 mt-5">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-3 form-check">
                        <input type="checkbox" {...register('ispattner')} onClick={ischecked} name="ispattner" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label">Link with pattner Account</label>
                    </div>
                    {pattnerlogin ?
                        <div className="mb-3">
                            <label className="form-label">Pattner Email</label>
                            <input type="email" defaultValue="" required name="pattnerUserEmail"  {...register('pattnerUserEmail', { required: true })}
                                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        : ""}

                    <div className="mb-3">
                        <label className="form-label">UserName</label>
                        <input type="text" required name="username" className="form-control" {...register('username', { required: true, maxLength: 10, })} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" required name="name" className="form-control" {...register('name', { required: true })} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" required name="email" className="form-control" {...register('email', { required: true })} aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="tel" required name="phone" className="form-control" {...register('phone', { required: true, min: 10, pattern: /^[0-9]{10}$/ })} aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" {...register('password', { required: true, min: 8, pattern: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/ })} required name="password" className="form-control" />
                        {watch.password && "password is wrong"}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Repassword</label>
                        <input type="password" required name="repassword" {...register('repassword', { required: true, min: 8, pattern: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/ })} className="form-control" id="exampleInputPassword1" />
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

