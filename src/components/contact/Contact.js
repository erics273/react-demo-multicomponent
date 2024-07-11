import { useState, useRef } from "react";

function Contact (props) {

    // useRef is reacts answer to getElementByID
    const randomRef = useRef();

    // set submitted in state so we have a flag to know if the form has been submitted
    let [submitted, setSubmitted] = useState(false);

    // keep track of our form data
    let [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    let handleChange = (event) => {
        let newData = {...formData};
        newData[event.target.name] = event.target.value;
        setFormData(newData);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }

    let resetForm = (event) => {
        setFormData({
            firstName: "",
            lastName: "",
            email: ""
        })
	    setSubmitted(false);
    }

    let changedRefInput = () => {
        console.log(randomRef.current.value)
    }


    //show the thank you message if the form has been submitted
    if(submitted){
        return (
            <div>
                Thank you, {formData.firstName}, for submitting the form <br/>
                <button onClick={resetForm}>Reset Form</button>
            </div>
        )
    }
    return (
        <div className="Contact">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input onChange={handleChange} type="text" name="firstName" value={formData.firstName} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input onChange={handleChange} type="text" name="lastName" value={formData.lastName} />
                </div>
                <div>
                    <label>Email:</label>
                    <input onChange={handleChange} type="text" name="email" value={formData.email} />
                </div>
                <button>Submit Form</button> <br/>

                <hr />
                {JSON.stringify(formData)}
            </form>
            {/* input field not in the form but we can still access its info with a ref using the useRef hook */}
            <input onChange={changedRefInput} ref={randomRef} type="text" />
        </div>
    );
}
export default Contact;