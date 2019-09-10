import React, { Component } from 'react'
import data from '../data/data.json'
export default class Detile extends Component {
    state={list:[]}
    constructor(){
        super()
    }
    render() {
        let lists =localStorage.list?JSON.parse(localStorage.list):[]
        let {list,flag}=this.state
        return (
            <div>
                <h2>详情</h2>
                {list.map((item,index)=>{
                    return item?
                <div key={index}>
                     <dl className='dl'>
                     <dt>
                         <img src={item.sCoverUrl}/>
                     </dt>
                     <dd>
                         <p>{item.sTitle}</p>
                         <span>{item.sDesc}</span>
                         <p>播放{item.iPlayTimes}次</p>
                     </dd>
                 </dl>
                 <div className='niu'>
                    <button className='btns'>播放专辑</button>
                   
                    {
                        lists&&lists.find(ite=>ite.iLastModifyTime==item.iLastModifyTime)
                        ?
                        <button className='btns' onClick={this.fn.bind(this,item)}>已收藏</button>
                    : <button className='btns' onClick={this.fn.bind(this,item)}>收藏</button>
                    }
                    <button className='btns'>分享</button>
                </div>
                </div>
                 :''
                })}
             
            </div>
        )
    }
    componentDidMount(){
        let id=this.props.match.params.id;
        let aa=data.map((item)=>{
           return  item.vecAlbumList.find((item)=>{                
                return item.iLastModifyTime==id
            })
        })
        this.setState({list:aa})
    }
    fn(item){
        let aa=localStorage.list?JSON.parse(localStorage.list):[] 
        aa.push(item)
        localStorage.list=JSON.stringify(aa)
       console.log(this.props);
       this.props.location.goForward()
       
    }
}
