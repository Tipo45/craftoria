import React from 'react';
import Navbar from './Navbar';

const Home = ({Toggle}) => {
    return (
        <div className="px-3">
            <Navbar Toggle={Toggle} />
            <div className="container-fluid white-space">
                <div className="row g-3 my-2">
                    <div className="col-md-3 p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">100</h3>
                                <p className="fs-6">Products</p>
                            </div>
                            <i className="bi bi-cart-plus p-3 fs-1"></i>
                        </div>
                    </div>
                    <div className="col-md-3 p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">25</h3>
                                <p className="fs-6">Categories</p>
                            </div>
                            <i className="bi bi-tags p-3 fs-2"></i>
                        </div>
                    </div>
                    <div className="col-md-3  p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">120</h3>
                                <p className="fs-6">Delivery</p>
                            </div>
                            <i className="bi bi-truck p-3 fs-1"></i>
                        </div>
                    </div>
                    <div className="col-md-3 p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">170</h3>
                                <p className="fs-6">Sales</p>
                            </div>
                            <i className="bi bi-currency-dollar p-3 fs-1"></i>
                        </div>
                    </div>
                </div>
            </div>

            
                <table className="table caption-top bg-white rounded mt-2">
                    <caption className="text-white fs-4">Recent Orders</caption>
                    <thead>
                        <tr>
                            <th scope="col">Order No</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Skill/Services</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Suoyo</td>
                            <td>Electrician Services</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Justin</td>
                            <td>Clay Pot</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Azebi</td>
                            <td>Alex</td>
                            <td>Flower Vase</td>
                        </tr>
                    </tbody>
                </table>
        </div>

    )
}

export default Home;