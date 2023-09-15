import React from 'react';

function Contact() {
    return (
        <div className="d-flex flex-column">
            <div className="container text-lg-start text-center p-5">
                    <h1 className="display-6 fw-bold mb-3">
                        Contact me
                    </h1>
                    <p>
                        I am actively seeking opportunities as a junior web developer to gain valuable on-the-job experience.
                    </p>
                    <p>
                        Feel free to reach out to me through the following means:
                    </p>
                        <dl className="row justify-content-lg-start justify-content-center align-items-center">
                            <dt className="col-md-2 ms-md-4">E-mail:</dt>
                            <dd className="col-md-9">simone.muraro.95@gmail.com</dd>
                            <dt className="col-md-2 ms-md-4">Linkedin:</dt>
                            <dd className="col-md-9"><a href="https://www.linkedin.com/in/simone-muraro-aa703920a/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/simone-muraro-aa703920a/</a></dd>
                        </dl>
                    <p>
                        Please don't hesitate to contact me if you have any inquiries or potential opportunities.
                    </p>
            </div>
        </div>
    )
}

export default Contact;