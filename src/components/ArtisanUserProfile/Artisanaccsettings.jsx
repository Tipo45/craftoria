import React, { useState } from 'react';
import "../ClientUserProfile/Useraccsettings.css";

const Artisanaccsettings = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobile, setMobile] = useState('');
    const [errors, setErrors] = useState({ firstname: '', lastname: '', mobile: '' });

    const validateSetting = () => {
        let valid = true;
        let errors = { firstname: '', lastname: '', mobile: '' };

        if (firstname.length === 0) {
            errors.firstname = 'Firstname is required.';
            valid = false;
        } else if (firstname.length > 0 && firstname.length < 3) {
            errors.firstname = 'Firstname must be at least 3 characters.';
            valid = false;
        }

        if (lastname.length === 0) {
            errors.lastname = 'Lastname is required.';
            valid = false;
        } else if (lastname.length > 0 && lastname.length < 3) {
            errors.lastname = 'Lastname must be at least 3 characters.';
            valid = false;
        }

        if (mobile.length === 0) {
            errors.mobile = 'Mobile is required.';
            valid = false;
        } else if (mobile.length > 0 && mobile.length < 10) {
            errors.mobile = 'Mobile must be at least 11 characters.';
            valid = false;
        }
        

        if (valid) {
            setErrors({ firstname: '', lastname: '', mobile: '' });
        } else {
            setErrors(errors);
        }

        return valid;
    };

    const handleSubmitt = (q) => {
        q.preventDefault();
        if (validateSetting()) {
            // Perform the actual form submission, e.g., API call
            console.log('Changes made with:', { firstname, lastname, mobile });
            // Here you might handle success/failure responses from an API call
        }
    };

    return (
        <>
            <form action="#" onSubmit={handleSubmitt}>
                <div className='artisanaccountsettings'>

                    <h1 className='mainhead1'>Personal Information</h1>

                    <div className='form'>

                        <div className='form-group'>
                            <label htmlFor='name'>First Name <span>*</span></label>
                            <input type='text' name='name' id='name' value={firstname} onChange={(q) => setFirstname(q.target.value)} maxLength="15" />
                            {errors.firstname && <span className="error-message">{errors.firstname}</span>}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='name'>Last Name <span>*</span></label>
                            <input type='text' name='name' id='name' value={lastname} onChange={(q) => setLastname(q.target.value)} maxLength="15" />
                            {errors.lastname && <span className="error-message">{errors.lastname}</span>}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='phone'>Phone/Mobile <span>*</span></label>
                            <input type='text' name='phone' id='phone' value={mobile} onChange={(q) => setMobile(q.target.value)} maxLength="11" />
                            {errors.mobile && <span className="error-message">{errors.mobile}</span>}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='email'>Email <span>*</span></label>
                            <input type='email' name='email' id='email' />
                        </div>


                    </div>

                    <button type="buttton" className='btn'>Save Changes</button>
                </div>
            </form>

        </>
  )
}

export default Artisanaccsettings;
