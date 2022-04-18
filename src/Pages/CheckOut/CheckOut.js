import React from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {

    const {serviceId} = useParams()

    return (
        <div>
            This is Contact page for {serviceId}
        </div>
    );
}

export default Contact;