import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import PageTransition from 'react-router-page-transition';

import Home from './pages/Home';
import Timeline from './pages/Timeline';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<h1 className="App-title">Welcome to React</h1>*/}


                {/*</header>*/}
                {/*<p className="App-intro">*/}
                    {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}

                <PageTransition timeout={500}>
                    <Switch location={this.props.location}>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/timeline" component={Timeline}/>
                    </Switch>
                </PageTransition>
            </div>
        );
    }
}

export default App;
