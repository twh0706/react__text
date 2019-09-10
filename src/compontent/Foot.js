import React, { Component } from 'react'
import {Redirect,HashRouter,NavLink,Route,Switch} from 'react-router-dom'
import Home from '../views/Home';
import My from '../views/My';
export default class Foot extends Component {
    render() {
        return (
            <div className='Foot'> 
                <NavLink to='/home/my'>我的</NavLink>
                <NavLink to='/home/hot'>热门</NavLink>      
                <NavLink to='/home/fen'>分类</NavLink>       
                <NavLink to='/home/jing'>精品</NavLink>                
            </div>
        )
    }
}
