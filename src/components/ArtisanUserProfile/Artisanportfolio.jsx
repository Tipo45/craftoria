import React, { useState } from 'react';
import "../../components/ArtisanUserProfile/ArtisanPortfolio.css";

const Artisanportfolio = () => {

    const [nameofbusiness, setNameofbusiness] = useState('');
    const [businesslocation, setBusinesslocation] = useState('');
    const [mobile, setMobile] = useState('');
    const [errors, setErrors] = useState({ nameofbusiness: '', businesslocation: '', mobile: '' });

    const validateSetting = () => {
        let valid = true;
        let errors = { nameofbusiness: '', businesslocation: '', mobile: '' };

        if (nameofbusiness.length === 0) {
            errors.firstname = 'Business name is required.';
            valid = false;
        } else if (nameofbusiness.length > 0 && nameofbusiness.length < 3) {
            errors.nameofbusiness = 'Business name must be at least 3 characters.';
            valid = false;
        }

        if (businesslocation.length === 0) {
            errors.businesslocation = 'Location is required.';
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
            setErrors({ nameofbusiness: '', businesslocation: '', mobile: '' });
        } else {
            setErrors(errors);
        }

        return valid;
    };

    const handleSubmitt = (q) => {
        q.preventDefault();
        if (validateSetting()) {
            // Perform the actual form submission, e.g., API call
            console.log('Changes made with:', { nameofbusiness, businesslocation, mobile });
            // Here you might handle success/failure responses from an API call
        }
    };

    return (
        <>
            <div>
            <form action="#" onSubmit={handleSubmitt}>
                <div className='accountsettings'>

                    <h1 className='mainhead1'>Business Information</h1>

                    <div className='form'>

                        <div className='form-group'>
                            <label htmlFor='name'>Name of Business <span>*</span></label>
                            <input type='text' name='name' id='name' value={nameofbusiness} onChange={(q) => setNameofbusiness(q.target.value)} />
                            {errors.nameofbusiness && <span className="error-message">{errors.nameofbusiness}</span>}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='name'>Business Location <span>*</span></label>
                            <input type='text' name='name' id='name' value={businesslocation} onChange={(q) => setBusinesslocation(q.target.value)} />
                            {errors.businesslocation && <span className="error-message">{errors.businesslocation}</span>}
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

                        <div className='form-group'>
                            <label htmlFor='email'>Description <span>*</span></label>
                            <input type='text' name='name' id='description' />
                        </div>

                        <div className="">
                            <label>
                                
                            </label>
                        </div>


                    </div>

                    <button type="buttton" className='btn'>Save Changes</button>
                </div>
            </form>
            </div>
        </>
    )
}

export default Artisanportfolio;
