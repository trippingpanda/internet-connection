import React, { Component } from 'react';
import ScrollupSection from '../scrollupSection/scrollUp';
import Header from '../headerSection/headerTwo';
import BreadcrumbSection from '../breadcrumbSection/breadcrumbTwo';
import FooterSection from '../footerSection/footer';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/appo-json-1/themeOneBlogSection";

class blogThreeColumn extends Component {
    state = {
        data: {},
        blogDataThree: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    blogDataThree: res.data.blogDataThree
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="blog">
                <ScrollupSection />
                <div className="all-area">
                <Header imageData={"/img/logo-white.png"} />
                <BreadcrumbSection heading={"Blog - 3 Column"} home={"Home"} page={"Blog"} title={"Blog - 3 Column"} />
                <section id="blog" className="section blog-area ptb_100">
                    <div className="container">
                        <div className="row">
                            {this.state.blogDataThree.map((item, idx) => {
                                return(
                                    <div key={`btw_${idx}`} className="col-12 col-md-6 col-lg-4">
                                        {/* Single Blog */}
                                        <div className="single-blog res-margin">
                                            {/* Blog Thumb */}
                                            <div className="blog-thumb">
                                                <a href="#"><img src={item.image} alt="" /></a>
                                            </div>
                                            {/* Blog Content */}
                                            <div className="blog-content p-4">
                                                {/* Meta Info */}
                                                <ul className="meta-info d-flex justify-content-between">
                                                    <li>By <a href="#">{item.author}</a></li>
                                                    <li><a href="#">{item.date}</a></li>
                                                </ul>
                                                {/* Blog Title */}
                                                <h3 className="blog-title my-3"><a href="#">{item.title}</a></h3>
                                                <p>{item.content}</p>
                                                <a href="#" className="blog-btn mt-3">{item.btnText}</a>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })}
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    {/* Pagination */}
                                    <ul className="pagination justify-content-center">
                                        <li className="disabled px-1">
                                            <a href="#" aria-label="Previous">
                                                <i className="fas fa-arrow-left" />
                                            </a>
                                        </li>
                                        <li className="px-1"><a href="#">1</a></li>
                                        <li className="active px-1"><a href="#">2</a></li>
                                        <li className="px-1"><a href="#">3</a></li>
                                        <li>
                                            <a href="#" aria-label="Next">
                                                <i className="fas fa-arrow-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default blogThreeColumn;