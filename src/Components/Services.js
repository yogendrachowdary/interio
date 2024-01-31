import React from 'react';
import './Services.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />

            <section className="section services-section" id="services">
                <div className="section-title">
                    <h2>Interior Decor Services</h2>
                    <p>We provide interior decor services for homes and businesses, focusing on creating beautiful and functional spaces.</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="feature-box-1">
                                <div className="icon">
                                    <i className="fa fa-home"></i>
                                </div>
                                <div className="feature-content">
                                    <h5>Home Decor</h5>
                                    <p>We offer home decor solutions tailored to your style and preferences, creating cozy and inviting living spaces.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="feature-box-1">
                                <div className="icon">
                                    <i className="fa fa-building"></i>
                                </div>
                                <div className="feature-content">
                                    <h5>Commercial Spaces</h5>
                                    <p>Our interior decor services extend to commercial spaces, enhancing functionality and aesthetics for businesses.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="feature-box-1">
                                <div className="icon">
                                    <i className="fa fa-paint-brush"></i>
                                </div>
                                <div className="feature-content">
                                    <h5>Custom Designs</h5>
                                    <p>We create custom interior designs that reflect your personality and lifestyle, ensuring a unique and personalized space.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="feature-box-1">
                                <div className="icon">
                                    <i className="fa fa-bed"></i>
                                </div>
                                <div className="feature-content">
                                    <h5>Bedroom Decor</h5>
                                    <p>Elevate your bedroom with our decor solutions, combining comfort and style for a restful retreat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="feature-box-1">
                                <div className="icon">
                                    <i className="fa fa-couch"></i>
                                </div>
                                <div className="feature-content">
                                    <h5>Living Room Styling</h5>
                                    <p>Transform your living room into a chic and inviting space with our expert styling services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="feature-box-1">
                                <div className="icon">
                                    <i className="fa fa-table"></i>
                                </div>
                                <div className="feature-content">
                                    <h5>Dining Area Design</h5>
                                    <p>Create memorable dining experiences with our innovative dining area designs that balance functionality and aesthetics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
