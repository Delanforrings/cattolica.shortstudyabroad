import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBBadge } from 'mdbreact';
import milan_card from './milan_card.jpg';
import "./milan_card.css"

const Milan_Card = () => {
    return (
        <MDBCol id="Milan_Card" >
            <MDBCard style={{ width: "15rem" }} className="card_shadow">
                <MDBCardImage className="img-fluid img_size_adjust" src={milan_card} waves />
                <MDBCardBody className="card_body_bg">
                    <MDBCardTitle>
                        <h5><MDBBadge color="danger">New!!!</MDBBadge></h5>
                        <span><a href="/program_milan">Milan Campus</a></span>

                    </MDBCardTitle>
                    <MDBCardText className="white-text">
                        Study Abroad program in Milan
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default Milan_Card;