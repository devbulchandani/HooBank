import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div>
            {/*Navbar Container*/}
            <nav className='w-full py-6 flex
                justify-between items-center
                navbar'
            >
                {/* Navbar Logo */}
                <img src={logo} alt="HooBank" className='w-[124px] h-[32px]' />

                {/*Navbar Links */}
                <ul className="list-none sm:flex
                    hidden justify-end items-center flex-1"
                >
                    {/*Navbar Links List */}
                    {navLinks.map((nav, index) => (
                        <li key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
                            ${index === navLinks.length - 1
                                    ? 'mr-0'
                                    : 'mr-10'}`}
                        >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>

                        </li>
                    ))}
                </ul>

                {/* Navbar for small devices */}
                <div className="sm:hidden 
                    flex flex-1 justify-end items-center">
                    <img src={toggleMenu ? close : menu} alt="Menu"
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggleMenu((prev) => !prev)}
                    />

                    <div className={`${toggleMenu ? 'flex' : 'hidden'}
                        p-6 bg-black-gradient 
                        absolute top-20 right-0 mx-4 my-2
                        min-w-[140px] rounded-xl sidebar`

                    }>
                        <ul className="list-none 
                            flex justify-end items-center flex-1 flex-col"
                        >
                            {/*Navbar Links List in Menu*/}
                            {navLinks.map((nav, index) => (
                                <li key={nav.id}
                                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
                            ${index === navLinks.length - 1
                                            ? 'mb-0'
                                            : 'mb-4'}`}
                                >
                                    <a href={`#${nav.id}`}>
                                        {nav.title}
                                    </a>

                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
