
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let maleRBRef = useRef();
    let femaleRBRef = useRef();
    let addressTextRef = useRef();
    let ageInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let mobileNumberInputRef = useRef();
    let stateSelectRef = useRef();
    let resultParaRef = useRef();
    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let addressResultRef = useRef();
    let ageResultRef = useRef();
    let emailResultRef = useRef();
    let passwordResultRef = useRef();
    let mobileNumberResultRef = useRef();

    let nameRegEx = /^[A-Za-z\s]{2,30}$/;
    let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[\]{};:'",/?]).{8,}$/;
    let ageRegEx = /^(100|[1-9]\d?)$/;
    let mobileNumberRegEx = /^\s*\+\s*91\s*-\s*\d{10}$/;
    let addressRegEx = /^[a-zA-Z0-9\s,.-\/]+$/;
    
    let [selectedGender, setSelectedGender] = useState('');
    let [selectedMS, setSelectedMS] = useState('');
    let [capital, setCapital] = useState('');
    let [languageKnown, setLanguageKnown] = useState({
        telugu: false,
        hindi: false,
        english: false,
    });

    // validation functions
    let validateName = (nameStr, resultRef) => {
        let result = nameRegEx.test(nameStr);
        if (result) {
            resultRef.current.innerHTML = "valid";
            resultRef.current.style.backgroundColor = "green";
        } else {
            resultRef.current.innerHTML = "invalid";
            resultRef.current.style.backgroundColor = "red";
        }
    };

    let validateAge = (ageStr, resultRef) => {
        let result = ageRegEx.test(ageStr);
        if (result) {
            resultRef.current.innerHTML = "valid";
            resultRef.current.style.backgroundColor = "green";
        } else {
            resultRef.current.innerHTML = "invalid";
            resultRef.current.style.backgroundColor = "red";
        }
    };

    let validateEmail = (emailStr, resultRef) => {
        let result = emailRegEx.test(emailStr);
        if (result) {
            resultRef.current.innerHTML = "valid";
            resultRef.current.style.backgroundColor = "green";
        } else {
            resultRef.current.innerHTML = "invalid";
            resultRef.current.style.backgroundColor = "red";
        }
    };

    let validatePassword = (passwordStr, resultRef) => {
        let result = passwordRegEx.test(passwordStr);
        if (result) {
            resultRef.current.innerHTML = "valid";
            resultRef.current.style.backgroundColor = "green";
        } else {
            resultRef.current.innerHTML = "invalid";
            resultRef.current.style.backgroundColor = "red";
        }
    };

    let validateMobileNumber = (mobileStr, resultRef) => {
        let result = mobileNumberRegEx.test(mobileStr);
        if (result) {
            resultRef.current.innerHTML = "valid";
            resultRef.current.style.backgroundColor = "green";
        } else {
            resultRef.current.innerHTML = "invalid";
            resultRef.current.style.backgroundColor = "red";
        }
    };

    let validateAddress = (addressStr, resultRef) => {
        let result = addressRegEx.test(addressStr);
        if (result) {
            resultRef.current.innerHTML = "valid";
            resultRef.current.style.backgroundColor = "green";
        } else {
            resultRef.current.innerHTML = "invalid";
            resultRef.current.style.backgroundColor = "red";
        }
    };

    let signupAccount = () => {
        if (stateSelectRef.current.value === "Select State") {
            alert("Please select your state");
        } else {
            let salutation = "";

            if (selectedGender === "male") {
                salutation = "Mr.";
            } else if (selectedGender == "female") {
                salutation = selectedMS == "single" ? "Miss." : "Mrs.";
            }

            resultParaRef.current.innerHTML = `${salutation} ${firstNameInputRef.current.value} ${lastNameInputRef.current.value}, you know ${languageKnown.telugu ? "Telugu" : ""}${languageKnown.hindi ? ", Hindi" : ""}${languageKnown.english ? ", English" : ""} from ${capital}, ${stateSelectRef.current.value}. Your account has been created.`;
        }
    };

    return (
        <div className='App'>
            <form>
                <h1>SIGNUP</h1>
                <div>
                    <label>First Name</label>
                    <input
                        ref={firstNameInputRef}
                        type='text'
                        onChange={() => {
                            validateName(firstNameInputRef.current.value, firstNameResultRef);
                        }}
                    />
                    <span ref={firstNameResultRef}></span>
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        ref={lastNameInputRef}
                        type='text'
                        onChange={() => {
                            validateName(lastNameInputRef.current.value, lastNameResultRef);
                        }}
                    />
                    <span ref={lastNameResultRef}></span>
                </div>
                <div className='gender'>
                    <label>Gender</label>
                    <input
                        type='radio'
                        name='gender'
                        ref={maleRBRef}
                        onChange={() => {
                            if (maleRBRef.current.checked) {
                                setSelectedGender("male");
                            }
                        }}
                    />
                    <label style={{width:"auto"}}>Male</label>
                    <input
                        type='radio'
                        name='gender'
                        ref={femaleRBRef}
                        onChange={() => {
                            if (femaleRBRef.current.checked) {
                                setSelectedGender("female");
                            }
                        }}
                    />
                    <label style={{width:"auto"}}>Female</label>
                </div>
                <div className='ms'>
                    <label>Marital Status</label>
                    <input
                        type='radio'
                        name='ms'
                        onChange={(event) => {
                            if (event.target.checked) {
                                setSelectedMS("single");
                            }
                        }}
                    />
                    <label style={{width:"auto"}}>Single</label>
                    <input
                        type='radio'
                        name='ms'
                        onChange={(event) => {
                            if (event.target.checked) {
                                setSelectedMS("married");
                            }
                        }}
                    />
                    <label style={{width:"auto"}}>Married</label>
                </div>
                <div>
                    <label>Age</label>
                    <input
                        type='text'
                        ref={ageInputRef}
                        onChange={() => {
                            validateAge(ageInputRef.current.value, ageResultRef);
                        }}
                    />
                    <span ref={ageResultRef}></span>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        ref={emailInputRef}
                        type='text'
                        onChange={() => {
                            validateEmail(emailInputRef.current.value, emailResultRef);
                        }}
                    />
                    <span ref={emailResultRef}></span>
                </div>
                <div>
                    <label>Password</label>
                    <input
                        ref={passwordInputRef}
                        type='password'
                        onChange={() => {
                            validatePassword(passwordInputRef.current.value, passwordResultRef);
                        }}
                    />
                    <span ref={passwordResultRef}></span>
                </div>
                <div>
                    <label>Mobile No.</label>
                    <input
                        type='text'
                        ref={mobileNumberInputRef}
                        onChange={() => {
                            validateMobileNumber(mobileNumberInputRef.current.value, mobileNumberResultRef);
                        }}
                    />
                    <span ref={mobileNumberResultRef}></span>
                </div>
                <div>
                    <label>Address</label>
                    <textarea
                        ref={addressTextRef}
                        onChange={() => {
                            validateAddress(addressTextRef.current.value, addressResultRef);
                        }}
                    ></textarea>
                    <span ref={addressResultRef}></span>
                </div>
                <div className='state'>
                    <label>State</label>
                    <select
                        ref={stateSelectRef}
                        onChange={() => {
                            const selectState = stateSelectRef.current.value;
                            switch (selectState) {
                                case "Jammu and Kashmir":
                                    setCapital("Srinagar");
                                    break;
                                case "Ladakh":
                                    setCapital("Leh");
                                    break;
                                case "Arunachal Pradesh":
                                    setCapital("Itanagar");
                                    break;
                                case "Assam":
                                    setCapital("Dispur");
                                    break;
                                case "Bihar":
                                    setCapital("Patna");
                                    break;
                                case "Chhattisgarh":
                                    setCapital("Raipur");
                                    break;
                                case "Goa":
                                    setCapital("Panaji");
                                    break;
                                case "Gujarat":
                                    setCapital("Ghandinagar");
                                    break;
                                case "Haryana":
                                    setCapital("Chandigarh");
                                    break;
                                case "Himachal Pradesh":
                                    setCapital("Shimla");
                                    break;
                                case "Jharkhand":
                                    setCapital("Ranchi");
                                    break;
                                case "Madhya Pradesh":
                                    setCapital("Bhopal");
                                    break;
                                case "Maharashtra":
                                    setCapital("Mumbai");
                                    break;
                                case "Manipur":
                                    setCapital("Imphal");
                                    break;
                                case "Meghalaya":
                                    setCapital("Shillong");
                                    break;
                                case "Mizoram":
                                    setCapital("Aizawl");
                                    break;
                                case "Nagaland":
                                    setCapital("Kohima");
                                    break;
                                case "Odisha":
                                    setCapital("Bhubaneshwar");
                                    break;
                                case "Punjab":
                                    setCapital("Chandigarh");
                                    break;
                                case "Rajasthan":
                                    setCapital("Jaipur");
                                    break;
                                case "Sikkim":
                                    setCapital("Gangtok");
                                    break;
                                case "Tripura":
                                    setCapital("Agartala");
                                    break;
                                case "Uttarakhand":
                                    setCapital("Dehradun");
                                    break;
                                case "Uttar Pradesh":
                                    setCapital("Lucknow");
                                    break;
                                case "West Bengal":
                                    setCapital("Kolkata");
                                    break;
                                case "Telangana":
                                    setCapital("Hyderabad");
                                    break;
                                case "Andhra Pradesh":
                                    setCapital("Amaravati");
                                    break;
                                case "Tamil Nadu":
                                    setCapital("Chennai");
                                    break;
                                case "Karnataka":
                                    setCapital("Bangalore");
                                    break;
                                case "Kerala":
                                    setCapital("Thiruvananthapuram");
                                    break;
                                default:
                                    setCapital("");
                                    break;
                            }
                        }}
                    >
                        <option>Select State</option>
                        <option>Jammu and Kashmir</option>
                        <option>Ladakh</option>
                        <option>Arunachal Pradesh</option>
                        <option>Assam</option>
                        <option>Bihar</option>
                        <option>Chhattisgarh</option>
                        <option>Goa</option>
                        <option>Gujarat</option>
                        <option>Haryana</option>
                        <option>Himachal Pradesh</option>
                        <option>Jharkhand</option>
                        <option>Madhya Pradesh</option>
                        <option>Maharashtra</option>
                        <option>Manipur</option>
                        <option>Meghalaya</option>
                        <option>Mizoram</option>
                        <option>Nagaland</option>
                        <option>Odisha</option>
                        <option>Punjab</option>
                        <option>Rajasthan</option>
                        <option>Sikkim</option>
                        <option>Tripura</option>
                        <option>Uttarakhand</option>
                        <option>Uttar Pradesh</option>
                        <option>West Bengal</option>
                        <option>Andhra Pradesh</option>
                        <option>Telangana</option>
                        <option>Tamil Nadu</option>
                        <option>Karnataka</option>
                        <option>Kerala</option>
                    </select>
                </div>
                <div className='language'>
                    <label>Languages Known</label>
                    <input
                        type='checkbox'
                        onChange={(event) => {
                            setLanguageKnown({ ...languageKnown, telugu: event.target.checked });
                        }}
                    />
                    <label style={{width:"auto"}}>Telugu</label>
                    <input
                        type='checkbox'
                        onChange={(event) => {
                            setLanguageKnown({ ...languageKnown, hindi: event.target.checked });
                        }}
                    />
                    <label style={{width:"auto"}}>Hindi</label>
                    <input
                        type='checkbox'
                        onChange={(event) => {
                            setLanguageKnown({ ...languageKnown, english: event.target.checked });
                        }}
                    />
                    <label style={{width:"auto"}}>English</label>
                </div>
                <button
                    type='button'
                    onClick={() => {
                        signupAccount();
                    }}
                >
                    Create Account
                </button>
                <p ref={resultParaRef}></p>
                <br />
                <p>Already have an account? Please <Link to={"/"}>Login</Link></p>
            </form>
        </div>
    );
}

export default Signup;


