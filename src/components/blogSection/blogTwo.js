import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/appo-json-1/themeOneBlogSection";

class blogTwo extends Component {
    state = {
        data: {},
        blogData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    blogData: res.data.blogData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section id="blog" className="section blog-area ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Section Heading */}
                        <div className="col-12 col-md-10 col-lg-6">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2 className="text-capitalize text-white">{this.state.data.heading}</h2>
                                <p className="text-white d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                                <p className="text-white d-block d-sm-none mt-4">{this.state.data.headingTextTwo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.blogData.map((item, idx) => {
                            return(
                                <div key={`bt_${idx}`} className="col-12 col-md-6 col-lg-4">
                                    {/* Single Blog */}
                                    <div className="single-blog wow fadeIn res-margin" data-wow-duration="2s">
                                        {/* Blog Thumb */}
                                        <div className="blog-thumb">
                                            <a href="#"><img src={item.image} alt="" /></a>
                                        </div>
                                        {/* Blog Content */}
                                        <div className="blog-content p-4">
                                            {/* Meta Info */}
                                            <ul className="meta-info d-flex justify-content-between">
                                                <li className="text-white">By <a className="text-white" href="#">{item.author}</a></li>
                                                <li><a className="text-white" href="#">{item.date}</a></li>
                                            </ul>
                                            {/* Blog Title */}
                                            <h3 className="blog-title my-3"><a className="text-white" href="#">{item.title}</a></h3>
                                            <p className="text-white">{item.content}</p>
                                            <a href="#" className="blog-btn text-white mt-3">{item.btnText}</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default blogTwo;