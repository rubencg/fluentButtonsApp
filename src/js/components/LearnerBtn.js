import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { API } from 'aws-amplify';

function getUsersData() {
    const apiName = 'fluentapi';
    const path = '/users';
    const myInit = {
        headers: {},
    };
    return API.get(apiName, path, myInit);
}

function LearnerBtn({onPersonClick}) {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const handlePersonClick = (name) => {
        onPersonClick(name);
    };

    useEffect(() => {
        getUsersData().then(response => {
            setLoading(false);
            if (response.data) {
                setUsers(response.data);
            }
        });
    }, []);

    return loading ? <>Cargando personas...</> : (
        <Row>
            {users.map(user => {
                const logo = `${process.env.PUBLIC_URL}/images/${user.image}`;
                return <Col className="text-center" key={user.name}>
                    <button className="learner-btn" onClick={() => handlePersonClick(user.name)} >
                        <Image src={logo} rounded />
                    </button>
                </Col>
            })}
        </Row>
    );
}

export default LearnerBtn;