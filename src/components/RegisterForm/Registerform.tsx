import React from "react";
import styles from "./style.module.scss";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { authSuccess } from "../../store/actions/auth";
import Swal from "sweetalert2";

const Registerform = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const SubmitBtn = (data: any) => {
    if (data.password !== data.ConfrimPassword) {
      Swal.fire({
        icon: "warning",
        title: "Failed",
        text: "Passwords don't match",
      });
    } else {
      dispatch(
        authSuccess(
          data.token,
          data.email,
          data.password,
          data.name,
          data.location,
          data.about,
          data.motto,
          data.phone,
          data.price
        )
      );
    }
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.login}>
          <div className={styles.content}>
            <h1>Register</h1>
            <form>
              <input
                ref={register({ required: true })}
                name="name"
                type="text"
                placeholder="Name"
              />
              <input
                ref={register({ required: true })}
                name="email"
                type="email"
                placeholder="Email"
              />
              <input
                ref={register({ required: true })}
                name="password"
                type="password"
                placeholder="Password"
              />
              <input
                ref={register({ required: true })}
                name="ConfrimPassword"
                type="password"
                placeholder="ConfrimPassword"
              />
              <button onClick={handleSubmit(SubmitBtn)}>Submit</button>
            </form>
            <span className={styles.loginwith}>Or Connect with</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <svg
              className="feather feather-twitter sc-dnqmqq jxshSx"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
            <svg
              className="feather feather-github sc-dnqmqq jxshSx"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <svg
              className="feather feather-linkedin sc-dnqmqq jxshSx"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerform;
