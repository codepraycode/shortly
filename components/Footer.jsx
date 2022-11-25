import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="__logo">
            <img src="/images/logo.svg" alt="logo" />
        </div>

        <div className="links">

            <div className="links__item">
                <h5 className="links__itemt--title">Features</h5>

                <ul className="links__itemt--content">
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>

            <div className="links__item">
                <h5 className="links__itemt--title">Resources</h5>

                <ul className="links__itemt--content">
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </div>

            <div className="links__item">
                <h5 className="links__itemt--title">Company</h5>

                <ul className="links__itemt--content">
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>


        <div className="handles__attribution">

            <div className="handles">
                <span>
                    <img src="/images/icon-facebook.svg" alt="Facebook"/>
                </span>
                <span>
                    <img src="/images/icon-twitter.svg" alt="Twitter"/>
                </span>
                <span>
                    <img src="/images/icon-pinterest.svg" alt="Pinterest"/>
                </span>
                <span>
                    <img src="/images/icon-instagram.svg" alt="Instagram"/>
                </span>
            </div>

            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">codepraycode</a>.
            </div>


        </div>

    </footer>
  )
}

export default Footer