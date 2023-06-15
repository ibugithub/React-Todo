import styles from '@/css/Navbar.module.css'
import { useState, useRef } from 'react';
import useOnclickOutside from '@/components/ClickOnOutside';
const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
    const ref = useRef();
    useOnclickOutside(ref, dropdown, () => setDropdown(false))
    return (
        <nav>
            <ul id= {styles['nav-container']}>
                <li >Home</li>
                <li>About</li>
                <li ref={ref}>
                    <button onClick={() => setDropdown((prev) => !prev)}>
                        Services <span>&#8595;</span>
                    </button>
                    {dropdown && (
                        <ul>
                            <li>Design</li>
                            <li>Development</li>
                        </ul>
                    )}

                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
