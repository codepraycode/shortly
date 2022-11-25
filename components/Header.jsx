import React from 'react';


const HeaderNav = ()=>{
    return (

        <nav className='header__nav'>

            <div className="__logo">
                <img src="/images/logo.svg" alt="logo"/>
            </div>

            {/* navigation listings */}
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
            


            <div className="call_to_actions">
                <a href="/">
                    Login
                </a>

                <button className='btn btn-rounded'>
                    Sign Up
                </button>
            </div>

        </nav>
    )
}

const Header = () => {
  return (
    <header>
        <HeaderNav/>

        {/* Header content */}
        <div className="header__content">
            <div>
                <h1>More than just shorter links</h1>
                <p>
                    Build your brand's recognition and get detailed insights
                    on how your links are performing.
                </p>

                <button className='btn btn-rounded'>
                      Get Started
                </button>
            </div>


            <div className="header__content__illu3x">
                <img src="/images/illustration-working.svg" alt="ill3x"/>
            </div>
        </div>
    </header>
  )
}

export default Header