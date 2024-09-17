import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
//import { useSelector } from 'react-redux';
import LogoutBtn from '../Header/LogoutBtn';

function Footer() {
    //const authStatus = useSelector((state) => state.authStatus);
    const userController = [
        {
            name: "Login",
            slug: "/login",

        },
        {
            name: "Signup",
            slug: "/signup",
            //active: !authStatus,
        },
    ]


    return (
        <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>

                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <ul>
                            {
                                userController.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.slug}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }

                            <li>
                                <LogoutBtn />
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer