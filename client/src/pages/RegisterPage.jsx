import React, { useState } from 'react';
import "../styles/Register.scss"
import background from '../register.jpg'

const RegisterPage = () => {
    const [formData,setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword:"",
        profileImage: null,
    })

const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData({
        ...formData,                            //spread opearator , this keeps the values of other fields and data entered while entering the new data
        [name]:value,
        [name]:name === "profileImage" ? files[0]: value
    })
}


console.log(formData)


  return (
    <div className= 'register' style={{ backgroundImage: `url(${background})`}}>
        <div className="register_content" >
            <form className="register_content_form"> 
                <input
                    placeholder='First Name'
                    name='firstName'
                    value={formData.firstName}
                    onChange = {handleChange}
                    type='text'
                    required
                />

                <input
                    placeholder='Last Name'
                    name='lastName'
                    value={formData.lastName}
                    onChange = {handleChange}
                    type='text'
                    required
                />

                <input
                    placeholder='Email'
                    name='email'
                    value={formData.email}
                    onChange = {handleChange}
                    type='email'
                    required
                />

                <input
                    placeholder='Password'
                    name='password'
                    value={formData.password}
                    onChange = {handleChange}
                    type='password'
                    required
                />
                <input
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange = {handleChange}
                    type='password'
                    required
                />
                <input
                     id="image"
                     type='file'
                     name="profileImage"
                     accept='image/*' 
                     style={{display:"none"}} 
                     onChange = {handleChange}
                     required
                />
                <label htmlFor="image">
                    <img src="/assets/addImage.jpg" alt="add profile photo"/>
                    <p>Upload your photo</p>
                </label>

                {formData.profileImage && (
                    <img 
                        src= {URL.createObjectURL(formData.profileImage)}
                        alt="profile photo"
                        style={{ maxWidth:"80px" }}
                    />
                )}

                //submit button for the page 
                <button type="submit">REGISTER</button>             
            </form>
            <a href='/login'> Already have registered? login here </a>

        </div>
    </div>
  )
}

export default RegisterPage