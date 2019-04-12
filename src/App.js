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

  getDarkMode() {

  }

  render() {
    return (
      <SetMode>
        <div id="__mode" className={localStorage.getItem('mode') == 'dark' ? 'dark__mode' : ''}>
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
