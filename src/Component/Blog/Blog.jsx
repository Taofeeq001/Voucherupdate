import React from "react";
import './Blog.css';
import friend from '../../Images/friend.jpg'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Blog = () =>{
    useEffect(()=>{
        AOS.init({
            offset: 200,
            duration: 800,
            easing:'ease-in-out',
            delay: 0,
        });
    },[])
    return(
        <div className="blogs">
            <h3>OUR BLOGS</h3>
            <div className="blog-container">
                <div className="blog">
                    <img data-aos = "zoom-in" src={friend} alt="" />
                    <h3 data-aos = "fade-right">Lorem ipsum dolor sit amet consectetur.</h3>
                    <p data-aos = "fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis odio quod eum recusandae, consequatur aut ex pariatur corporis illo animi sunt facilis officia minus magni maxime quia assumenda temporibus!</p>            
                </div>
                <div className="blog">
                    <img data-aos = "zoom-in" src={friend} alt="" />
                    <h3 data-aos = "fade-right">Lorem ipsum dolor sit amet consectetur.</h3>
                    <p data-aos = "fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis odio quod eum recusandae, consequatur aut ex pariatur corporis illo animi sunt facilis officia minus magni maxime quia assumenda temporibus!</p>            
                </div>
                <div className="blog">
                    <img data-aos = "zoom-in" src={friend} alt="" />
                    <h3 data-aos = "fade-right">Lorem ipsum dolor sit amet consectetur.</h3>
                    <p data-aos = "fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis odio quod eum recusandae, consequatur aut ex pariatur corporis illo animi sunt facilis officia minus magni maxime quia assumenda temporibus!</p>            
                </div>
                <div className="blog">
                    <img data-aos = "zoom-in" src={friend} alt="" />
                    <h3 data-aos = "fade-right">Lorem ipsum dolor sit amet consectetur.</h3>
                    <p data-aos = "fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis odio quod eum recusandae, consequatur aut ex pariatur corporis illo animi sunt facilis officia minus magni maxime quia assumenda temporibus!</p>            
                </div>
                <div className="blog">
                    <img data-aos = "zoom-in" src={friend} alt="" />
                    <h3 data-aos = "fade-right">Lorem ipsum dolor sit amet consectetur.</h3>
                    <p data-aos = "fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis odio quod eum recusandae, consequatur aut ex pariatur corporis illo animi sunt facilis officia minus magni maxime quia assumenda temporibus!</p>            
                </div>
            </div>
            
        </div>
    )
}
export default Blog;