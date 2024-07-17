import React from 'react';
import { RiAdminFill } from "react-icons/ri";

const Sidebar = () => {
    return (
        <div className='bg-white p-2'>
            <div className='m-2'>
                <RiAdminFill className='me-3 fs-4' />
                <span className='brand-name fs-4'>Tipo</span>
            </div>
            <hr className='text-dark' />
            <div className='list-group list-group-flush'>
                <a className='list-group-item py-2'>
                    <i className='bi bi-speedometer2 fs-5 me-3 text-dark'></i>
                    <span className="text-dark">Dashboard</span>
                </a>
                <a className='list-group-item py-2 '>
                    <i className='bi bi-house fs-5 me-3 text-info-emphasis'></i>
                    <span className="text-dark">Home</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-table fs-5 me-3 text-info'></i>
                    <span className="text-dark">Products</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-clipboard-data fs-5 me-3'></i>
                    <span className="text-dark">Report</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-people fs-5 me-3 text-secondary'></i>
                    <span className="text-dark">Customers</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-power fs-5 me-3 text-danger'></i>
                    <span className="text-dark">Logout</span>
                </a>
            </div>
        </div>
    )
}

export default Sidebar;
