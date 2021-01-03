import React, { Component } from 'react';

const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>
};

class Contact extends Component {
    render () {
        return (
            <div className="homescreen">
                <div>
                    <h3>I'm not singing professionally anymore, but if you need a website for yourself, please let me know!</h3>
                    <Mailto email="katie.t.abraham@gmail.com" obfuscate={true}>
                        Email me!
                    </Mailto>
                </div>
            </div>
        )
    }
}

export default Contact;