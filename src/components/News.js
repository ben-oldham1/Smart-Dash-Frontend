import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function News(props) {
    return (
        <>
            <Row>

                <Col xs={12}>
                    <div className='news-block mb-3'>
                        <h4>
                            Man abducted and sexually assaulted schoolgirl while dressed as woman
                        </h4>
                    </div>
                    <div className='news-block mb-3'>
                        <h4>
                            Nurse Lucy Letby says doctors conspired to blame her
                        </h4>
                    </div>
                    <div className='news-block'>
                        <h4>
                            Italy floods leave nine dead and force 13,000 from their homes
                        </h4>
                    </div>
                </Col>

            </Row>

        </>
    )
}
