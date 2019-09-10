import React, { Component } from 'react'
import {Redirect,HashRouter,Route,Switch,withRouter} from 'react-router-dom'
 class My extends Component {
    render() {
        let list =localStorage.list?JSON.parse(localStorage.list):[]        
        return (
            <div>
                <p onClick={this.fn} className='p'>我的收藏  <span>→</span></p>
                {
                    list.length&&<dl className='dl'>
                    <dt>
                        <img src={list[0].sCoverUrl}/>
                    </dt>
                    <dd>
                        <p>{list[0].sTitle}</p>
                        <span>{list[0].sDesc}</span>
                        <p>播放{list[0].iPlayTimes}次</p>
                    </dd>
                </dl>
                }

<p  className='p'>我的已购 <span>→</span></p>
<p  className='p'>我的下载  <span>→</span></p>
<p  className='p'>我的最近收听 <span>→</span></p>
            </div>
        )
    }
    fn=()=>{
        this.props.history.push('/sou')
    }
}
export default withRouter(My)