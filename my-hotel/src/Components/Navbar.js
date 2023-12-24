import './Navbar.css'
import { SocialIcon } from 'react-social-icons';
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link></link>
</link>
</link>
</link>
export default function Navbar(){
    return(
        <div className="navbar">
            <input type='checkbox' className='checkbox' id='click' hidden></input>
            
            <div className="sidebar">
            <label for='click'>
                <div className="menu-icon">
                    
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                    
                </div>
                </label>
                <ul className='social-icon-list'>
                    <li>
                        <SocialIcon url="https://twitter.com" />
                    </li>
                    <li>
                        <SocialIcon url="https://www.facebook.com" />
                    </li>
                    <li>
                        <SocialIcon url="https://instagram.com" />
                    </li>
                </ul>
                <div className='year'>2023</div>
            </div>

            <div className='navigation'>
                <div className='navigation-header'>
                    <h1 className='navigation-heading'>Hotel Gradition</h1>

                    <form className='navigation-search'>
                        <input type='text' className='navigation-search-input' placeholder='Search...'></input>
                        <button className='navigation-search-btn'>
                            <i className='fa fa-search'></i>
                        </button>
                    </form>
                </div>
                <ul className='navigation-list'>
                <li className='navigation-item'>
                    <a href='#' className='navigation-link'>Home</a>
                </li>
                <li className='navigation-item'>
                    <a href='#' className='navigation-link'>About us</a>
                </li>
                <li className='navigation-item'>
                    <a href='#' className='navigation-link'>Rooms</a>
                </li>
                <li className='navigation-item'>
                    <a href='#' className='navigation-link'>Events</a>
                </li>
                <li className='navigation-item'>
                    <a href='#' className='navigation-link'>Customers</a>
                </li>
                <li className='navigation-item'>
                    <a href='#' className='navigation-link'>Contact us</a>
                </li>
            </ul>
            <div className='copyright'>
                <p>&copy; 2023. All Rights Reserved</p>
            </div>
            </div>
         
         </div>
    )
}
