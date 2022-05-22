import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import TripsS1 from "../components/trips-s1";
import TripsS2 from "../components/trips-s2";
import TripsS3 from "../components/trips-s3";
import TripsS4 from "../components/trips-s4";
import TripsS5 from "../components/trips-s5";

class Trips extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <TripsS1/>
                <TripsS2/>
                <TripsS3/>
                <TripsS4/>
                <TripsS5/>
            </Container>    
        );
    }
}

export default Trips;
