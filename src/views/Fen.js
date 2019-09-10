import React, { Component } from 'react'
import data from '../data/data.json'
import Item from '../compontent/Item'
export default class Fen extends Component {
    state={count:0}
    render() {
        return (
            <div className='tt'> 
                <ul  className='uls'>
                    {data.map((item,index)=>(
                        <li  key={index} className={this.state.count==index?"ac":''} onClick={this.fn.bind(this,index)}>{item.stGroupInfo.sName}</li>
                    ))}
                 </ul>
                 <div className='wwh'>
                        {
                            data[this.state.count].vecAlbumList.map((item,index)=>(<Item {...item} key={index} onClick={()=>{}} count={this.state.count}/>))
                        }
                 </div>
            </div>
        )
    }
    fn(index){
        this.setState({count:index})
    }
}
