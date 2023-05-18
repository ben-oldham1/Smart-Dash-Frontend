import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Tile(props) {
    return (
        <>
            <Row className='mb-4'>
                <Col>

                    <div className='tile-header mb-2 px-3 py-1'>

                        <h1>
                            <span className='text-danger me-2'>&#x25A0;</span>{props.title}
                        </h1>

                    </div>

                    <div className='tile-background p-3'>
                        {props.children}
                    </div>

                </Col>
            </Row>
        </>
    )
}