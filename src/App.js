import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import './global.scss';

import Home from './components/views/home.jsx';
import About from './components/views/about.jsx';
import Work from './components/views/work.jsx';

import {Navbar, Footer} from './components/main_template.jsx';

import Clipper from './components/views/work_views/clipping_magic.jsx'
import ClipperApp from './components/views/work_views/clipping_magic_app.jsx'
import CodeDrawings from './components/views/work_views/code_drawings.jsx' 
import Clv from './components/views/work_views/clv.jsx'
import Delta from './components/views/work_views/delta.jsx' 
import Nuvectra from './components/views/work_views/nuvectra.jsx'
import Recompressor from './components/views/work_views/recompressor.jsx' 


class SetMode extends Component {
  render() {
    return(
      <div>
        {localStorage.setItem('mode', (localStorage.getItem('mode')) === 'dark' ? 'dark' : 'light') }
        {localStorage.setItem('dark_activated', (localStorage.getItem('dark_activated')) === '1' ? '1' : '0') }
        {this.props.children}
      </div>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routes: [
        {
          title: 'Home',
          key: 'home',
          link: '/',
          component: Home
        },
        {
          title: 'Work',
          key: 'work',
          link: '/work',
          component: Work
        },
        {
          title: 'Nuvectra Medical',
          key: 'nuvectra-medical',
          link: '/work/nuvectra-medical',
          component: Nuvectra
        },
        {
          title: 'Delta Air Lines',
          key: 'delta-air-lines',
          link: '/work/delta-air-lines',
          component: Delta
        },
        {
          title: 'Recompressor',
          key: 'recompressor',
          link: '/work/recompressor',
          component: Recompressor
        },
        {
          title: 'ClippingMagic Webapp',
          key: 'clipping-magic-app',
          link: '/work/clipping-magic-app',
          component: ClipperApp
        },
        {
          title: 'ClippingMagic',
          key: 'clipping-magic',
          link: '/work/clipping-magic',
          component: Clipper
        },
        {
          title: 'Code Drawings',
          key: 'code-drawings',
          link: '/work/code-drawings',
          component: CodeDrawings
        },
        {
          title: 'About',
          key: 'about',
          link: '/about',
          component: About
        }
      ]
    };
  }


  renderRoutes() {
    const state = this.state;
    const { routes } = state;

    return routes.map(route => {
      const routeKey = `${route.key} ${route.title}`;
      return <Route exact key={routeKey} path={route.link} component={route.component}/>;
    });
  }

  render() {
    return (
      <SetMode>
        <div id="__mode" className={localStorage.getItem('mode') == 'dark' ? 'dark__mode' : ''}>

          {/*<div className="loader loader--active">
            <div className="loader__icon">
              <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40">
                <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>
                <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z"></path>
                <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform>
              </svg>
            </div>
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
    </div>*/}
          <Navbar></Navbar>
          <div className="page-container">
            <Switch>
              {this.renderRoutes()}
            </Switch>
          </div>
          <Footer></Footer>
        </div>
      </SetMode>
    );
  }
};
