import { Link } from 'react-router-dom';

export default function Nav(){
    return (
        <nav className='navbar navbar-expand-lg navbar-green'>
            <div className='container-fluid'>
                <h1 className='text-green'>Matt Comer</h1>
                <ul>
                    <li className='nav-item'>
                        <Link  to={''}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link  to={'/contact'}>
                            Contact
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/portfolio'}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link  to={'/resume'}>
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}