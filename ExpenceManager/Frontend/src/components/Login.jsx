import React from "react";
import { useState } from "react";
import "../css/login.css"
import Alert from "./Alert";
import loginApi from "../api/loginapi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"

function Login() {

    const [status, setStatus] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const responce = await loginApi(data);
        if (responce) {
            navigate("/");
        } else {
            setStatus({ msg: "Login Fail", type: "danger" });
        }
        setTimeout(() => {
            setStatus(false);
        }, 4000);
    }

    return (
        <>
            {
                status ?
                    <Alert value={status} ></Alert>
                    : " "
            }

            <div className="container-md w-50 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" name="email" className="form-control" {...register('email', { required: true })} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" {...register('password', { required: true })} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" name="ispattner" {...register('ispattner')} className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label">Is pattner Login</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login