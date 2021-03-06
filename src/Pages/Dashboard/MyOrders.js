import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`https://dry-brushlands-79455.herokuapp.com/order?buyer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                });
        }
    }, [user])

    return (
        <div>
            <h2 className='text-2xl text-center text-primary '>My Order Items:  {orders.length} </h2>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Amount (Pices)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((o, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{o.name}</td>
                                    <td>{o.buyer}</td>
                                    <td>{o.product}</td>
                                    <td>{o.option}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <Link className='flex justify-center items-center ' to='/dashboard/addreview'> <button className="btn btn-link  text-center ">Please  Review</button></Link>

        </div>
    );
};

export default MyOrders;