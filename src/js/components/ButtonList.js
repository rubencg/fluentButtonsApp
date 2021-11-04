import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { API } from 'aws-amplify';

function getButtonsData() {
    const apiName = 'fluentapi';
    const path = '/buttons';
    const myInit = {
        headers: {},
    };
    return API.get(apiName, path, myInit);
}

function ButtonList({onButtonClick}) {
    const [loading, setLoading] = useState(true);
    const [buttons, setButtons] = useState([]);

    useEffect(() => {
        getButtonsData().then(response => {
            setLoading(false);
            if (response.data) {
                setButtons(response.data);
            }
        });
    }, []);

    return loading ? <>Cargando botones...</> : (
        <Row>
            {buttons.map(button => {
                return <Col className="text-center" key={button.name}>
                    <button
                    onClick={() => onButtonClick(button.name)}
                        className="btn btn-info btn-lg"
                        key={button.name}>
                        {button.name}
                    </button>
                </Col>
            })}
        </Row>
    );
}

export default ButtonList;