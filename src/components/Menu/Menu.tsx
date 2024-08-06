import {Link} from 'react-router-dom';


export const Menu = () => {
    return (
        <>
            <nav className='menu'>
                <ul>
                    <li>
                        <Link to="/card1" className='dios'>About</Link>
                    </li>
                    <li>
                        <Link to="/card2" className='dios'> Portfolio</Link>
                    </li>
                    <li> 
                        <Link to="/card3" className='dios'>Blog</Link>
                    </li>
                    <li>
                        <Link to="/card4" className='dios'>Contact</Link> 
                    </li>
                </ul>
            </nav>
        </>
    )
}