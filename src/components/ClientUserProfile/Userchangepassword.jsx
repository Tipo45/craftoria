import React, { useState } from 'react';

const Userchangepassword = () => {


        const [oldpassword, setOldpassword] = useState('');
        const [newpassword, setNewpassword] = useState('');
        const [confirmnewpassword, setConfirmnewpassword] = useState('');
        const [errors, setErrors] = useState({ firstname: '', lastname: '', mobile: '' });
    
        const validateSettings = () => {
            let valid = true;
            let errors = { oldpassword: '', newpassword: '', confirmnewpassword: '' };
    
            if (oldpassword.length === 0) {
                errors.oldpassword = 'This is not old password.';
                valid = false;
            }
    
            if (newpassword.length === 0) {
                errors.newpassword = 'Password is required.';
                valid = false;
            } else if (newpassword.length > 0 && newpassword.length < 8) {
                errors.newpassword = 'Password must be at least 3 characters.';
                valid = false;
            }
    
            if (confirmnewpassword.length === 0) {
                confirmnewpassword.mobile = 'Password is required.';
                valid = false;
            } else if (confirmnewpassword.length != newpassword) {
                errors.confirmnewpassword = 'Passwords do not match';
                valid = false;
            }
            
    
            if (valid) {
                setErrors({ oldpassword: '', newpassword: '', confirmnewpassword: '' });
            } else {
                setErrors(errors);
            }
    
            return valid;
        };
    
        const handleSubmitt = (q) => {
            q.preventDefault();
            if (validateSettings()) {
                // Perform the actual form submission, e.g., API call
                console.log('Changes made with:', { oldpassword, newpassword, confirmnewpassword });
                // Here you might handle success/failure responses from an API call
            }
        };

    return (
        <>
            <form action="#" onSubmit={handleSubmitt}>
                <div className='accountsettings'>

                    <h1 className='mainhead1'>Change of Password</h1>

                    <div className='form'>

                        <div className='form-group'>
                            <label htmlFor='name'>Enter Old Password <span>*</span></label>
                            <input type='text' name='name' id='name' value={oldpassword} onChange={(q) => setOldpassword(q.target.value)} maxLength="8" />
                            {errors.oldpassword && <span className="error-message">{errors.oldpassword}</span>}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='name'>Enter New Password <span>*</span></label>
                            <input type='text' name='name' id='name' value={newpassword} onChange={(q) => setNewpassword(q.target.value)} minLength="8" />
                            {errors.newpassword && <span className="error-message">{errors.newpassword}</span>}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='phone'>Confirm New Password<span>*</span></label>
                            <input type='text' name='phone' id='phone' value={confirmnewpassword} onChange={(q) => setConfirmnewpassword(q.target.value)} minLength="8" />
                            {errors.confirmnewpassword && <span className="error-message">{errors.confirmnewpassword}</span>}
                        </div>


                    </div>

                    <button type="buttton" className='btn'>Save Changes</button>
                </div>
            </form>
        </>
    )
}

export default Userchangepassword;
