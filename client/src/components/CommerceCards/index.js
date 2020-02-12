import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip } from "mdbreact";

const CommerceCards = () => {
  return (
    <section className="text-center my-5">
      <MDBRow>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg"
              top
              alt="sample photo"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Camera</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">GoPro</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                veniam elit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>1439$</strong>
                </span>
                <span className="float-right">
                  
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (49).jpg"
              top
              alt="sample photo"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Photography</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Camera</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                veniam elit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>1160$</strong>
                </span>
                <span className="float-right">
                  
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg"
              top
              alt="sample photo"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Smartphone</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">iPhone 6S</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                veniam elit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>2160$</strong>
                </span>
                <span className="float-right">
                  
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default CommerceCards;