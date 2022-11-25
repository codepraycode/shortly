import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="__logo">
            <img src="/images/logo_alt.svg" alt="logo" />
        </div>

        <div className="links">

            <div className="links__item">
                <h5 className="links__itemt--title">Features</h5>

                <ul className="links__itemt--content">
                    <li><a href="/">Link Shortening</a></li>
                    <li><a href="/">Branded Links</a></li>
                    <li><a href="/">Analytics</a></li>
                </ul>
            </div>

            <div className="links__item">
                <h5 className="links__itemt--title">Resources</h5>

                <ul className="links__itemt--content">
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Developers</a></li>
                    <li><a href="/">Support</a></li>
                </ul>
            </div>

            <div className="links__item">
                <h5 className="links__itemt--title">Company</h5>

                <ul className="links__itemt--content">
                    <li><a href="/">About</a></li>
                    <li><a href="/">Our Team</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </div>


        <div className="handles__attribution">

            <div className="handles">
                <a href="/">
                    <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="/">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="/">
                    <ion-icon name="logo-pinterest"></ion-icon>
                </a>
                <a href="/">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
            </div>

            <span className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                <br/>
                Coded by <a href="https://github.com/codepraycode">codepraycode</a>.
            </span>


        </div>

    </footer>
  )
}

export default Footer