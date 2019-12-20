import React from "react";

const Contact = () => {
    return(
        <div>
            <section className="bg-dark mt-5">
                <div className="container text-white text-center py-5">
                    <p className="lead">Contact</p>
                    <div className="row justify-content-center">
                        <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                            <a className="small" href="mailto:example@website.com">michael_lau@live.co.uk</a>
                            <p className="small">(+44)7583859907</p>
                            {/* <form action="" className="form-inline">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Your Email" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary">Join Now</button>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;