import React, { Component } from 'react'

export default class Sou extends Component {

    render() {
        let list =localStorage.list?JSON.parse(localStorage.list):[]
        return (
            <div>
                {
                    list&&list.map((item,index)=>{
                       return  <dl className='dl' key={index}>
                        <dt>
                            <img src={item.sCoverUrl}/>
                        </dt>
                        <dd>
                            <p>{item.sTitle}</p>
                            <span>{item.sDesc}</span>
                            <p>播放{item.iPlayTimes}次</p>
                        </dd>
                    </dl>
                    })
                }
                
            </div>
        )
    }
}
