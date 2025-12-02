import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-light py-5">
            <div className="container">
                <h2 className="text-center mb-5">What Clients Say</h2>

                <div className="row">

                    {/* Card 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm h-100 text-center p-3">
                            <img
                                src="/images/person-1.jpg"
                                alt="Client"
                                className="img-fluid rounded-circle mb-3"
                                style={{ width: "120px", height: "120px", objectFit: "cover", margin: "0 auto" }}
                            />

                            <p className="mb-3">
                                "Absolutely stunning photos! Every shot beautifully captured the emotions of our event.
                                Highly recommended!"
                            </p>
                            <h5 className="fw-bold mb-1">— Aditya Verma</h5>
                            <p className="text-muted mb-0">Event Planner</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm h-100 text-center p-3">
                            <img
                                src="/images/person-2.jpg"
                                alt="Client"
                                className="img-fluid rounded-circle mb-3"
                                style={{ width: "120px", height: "120px", objectFit: "cover", margin: "0 auto" }}
                            />

                            <p className="mb-3">
                                "The photoshoot experience was smooth and professional. The final edits were beyond my expectations!"
                            </p>
                            <h5 className="fw-bold mb-1">— Nitin Kulkarni</h5>
                            <p className="text-muted mb-0">Fashion Blogger</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm h-100 text-center p-3">
                            <img
                                src="/images/person-3.jpg"
                                alt="Client"
                                className="img-fluid rounded-circle mb-3"
                                style={{ width: "120px", height: "120px", objectFit: "cover", margin: "0 auto" }}
                            />

                            <p className="mb-3">
                                "Incredible attention to detail! Our product photos came out crisp, vibrant, and perfect for marketing."
                            </p>
                            <h5 className="fw-bold mb-1">— Karan Deshmukh</h5>
                            <p className="text-muted mb-0">Business Owner</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
