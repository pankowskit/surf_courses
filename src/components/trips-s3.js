import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class TripsS3 extends Component{
    render(){
        return( 
            <Container fluid className="trips-s3 d-flex minh-25vh bg-dark align-items-center py-5 border-top border-dark">
                <Row className="mx-0 w-100">
                    <Col xs={10} sm={8} md={6} lg={5} className="mx-auto">
                        <div className="w-100 text-center">
                            <h2 className="dispaly-6 fw-bold text-white">
                                Lorem ipsum dolor
                            </h2>
                            <p className="lead text-white">
                                Sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. 
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TripsS3;
