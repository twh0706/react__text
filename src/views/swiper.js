import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
export default class swiper extends Component {
    render() {

        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                         <div className="swiper-slide"><img src='https://dummyimage.com/300'/></div>
                        <div className="swiper-slide"><img src='https://dummyimage.com/300'/></div>
                        <div className="swiper-slide"><img src='https://dummyimage.com/300'/></div>
                </div>
            </div>
        )
        
    }
    componentDidMount(){
        new Swiper ('.swiper-container', {
            loop: true,  //循环
            autoplay: {   //滑动后继续播放（不写官方默认暂停）
                disableOnInteraction: false,
            },
            pagination: {  //分页器
                el: '.swiper-pagination'
            }
        })
    }
}
