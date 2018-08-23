import React, { Component } from 'react';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import './home.css';
import Avatar from '../../components/Avatar';

class Home extends Component {
    render() {
        return (
            <div className="home-page transition-item">

                <Header />

                <div id="home-main-section-wrapper">

                    <section id="avatar">
                        <Avatar />
                    </section>

                    <section id="greetings">
                        <p>Hello, I'm Julien Petit</p>
                    </section>

                    <section id="about">
                        <h3 className="section-title">Info.</h3>
                        <div className="content">
                           I'm a software engineer from Nantes who likes to craft web and mobile applications.
                            I'm currently <a href="https://www.deltace.fr/" target='_blank'>@deltaCE</a> where I build custom applications with React/Redux and Symfony.
                        </div>
                    </section>

                    <section id="labs">
                        <h3 className="section-title">Labo.</h3>
                        <div className="content">
                            <div className="projects">
                                <a className="project" target='_blank' href="https://itunes.apple.com/fr/app/r%C3%A9ussir-son-permis-moto/id820931415">Réussir son permis moto</a>
                                <a className="project" target='_blank' href="https://www.catherineboutique.fr">Catherine Boutique</a>
                                <a className="project" target='_blank' href="https://www.eoleairpassion.fr">Éole Air Passion</a>
                                <a className="project" target='_blank' href="https://www.street-artwork.com">Street Artwork</a>
                                <a className="project" target='_blank' href="">Catherine Boutique - Gestion d'entreprise</a>
                                <a className="project" target='_blank' href="">TOEFL Training</a>
                                <a className="project" target='_blank' href="">Indoor Positioning System</a>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
                {/*<Link to="/">Home</Link>*/}
                {/*<Link to="/timeline">Timeline</Link>*/}
            </div>
        );
    }
}

export default Home;
