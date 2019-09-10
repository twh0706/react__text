import React, { Component } from 'react'
import Foot from '../compontent/Foot'
import Head from '../compontent/Head';
import {Redirect,HashRouter,Route,Switch} from 'react-router-dom'
import My from './My';
import Hot from './Hot';
import Fen from './Fen';
import Jing from './Jing';
export default class Home extends Component {
    render() {
        return (
            <>
                <Head></Head>
                <div className='main'>
                <Foot/>

                <HashRouter>
                    <Route path='/home/my' component={My}/>
                    <Route path='/home/hot' component={Hot}/>
                    <Route path='/home/fen' component={Fen}/>
                    <Route path='/home/jing' component={Jing}/>
                    <Redirect from='/home' to='/home/my'></Redirect>
                </HashRouter>
                </div>
               
                <div className='butt'>
                    <span>←</span>
                    <span><input type='text' defaultValue='鹿晗'/></span>
                    <span>③</span>
                </div>
            </>
        )
    }
}
