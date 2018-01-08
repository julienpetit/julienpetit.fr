import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="email">
                    Email : mail at this domain
                </div>

                <div className="social">
                    <a href="https://twitter.com/julien_petit" target="_blank" className="social-link">Twitter</a>
                    <a href="https://www.facebook.com/julien.petit.9" target="_blank" className="social-link">Facebook</a>
                    <a href="https://github.com/julienpetit" target="_blank" className="social-link">Github</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
