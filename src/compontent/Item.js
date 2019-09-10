import React, { Component } from 'react'
import {Redirect,HashRouter,Route,Switch,withRouter} from 'react-router-dom'
 class Item extends Component {
    render() {
        let {sCoverUrl,sTitle,sDesc,iPlayTimes,iCpid,iLastModifyTime,count}=this.props
        return (
            <dl className='dl' onClick={this.fn.bind(this,(iLastModifyTime))}>
                <dt>
                    <img src={sCoverUrl}/>
                </dt>
                <dd>
                    <p>{sTitle}</p>
                    <span>{sDesc}</span>
                    <p>播放{iPlayTimes}次</p>
                </dd>
            </dl>
        )
    }
    fn=(id,count)=>{
        this.props.history.push('/detile/'+id)
    }
}
export default withRouter(Item) 