import React, { Component } from 'react';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-page transition-item">

                <Header />

                <div id="home-main-section-wrapper">
                    <section id="greetings">
                        <p>Hello</p>
                    </section>

                    <section id="about">
                        <h3 className="section-title">Info.</h3>
                        <div className="content">
                            I'm Julien Petit, a creative software engineer from Nantes who likes to craft web and mobile applications.
                            I'm currently <a href="https://troopers.agency">@TroopersAgency</a> where I build custom applications with React/Redux and Symfony.
                        </div>
                    </section>

                    <section id="labs">
                        <h3 className="section-title">Labo.</h3>
                        <div className="content">
                            <div className="projects">
                                <a className="project" href="https://itunes.apple.com/fr/app/r%C3%A9ussir-son-permis-moto/id820931415">Réussir son permis moto</a>
                                <a className="project" href="https://www.catherineboutique.fr">Catherine Boutique</a>
                                <a className="project" href="https://www.eoleairpassion.fr">Éole Air Passion</a>
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
