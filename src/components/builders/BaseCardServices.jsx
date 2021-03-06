import React from "react";
import ModaleServices from "./ModaleServices";
import ReactHtmlParser from "react-html-parser";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import DeleteService from "./DeleteService";

const BaseCardServices = ({ descriptif, logo, titre, uuid, getService }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={logo} alt={uuid} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardText>description: {ReactHtmlParser(descriptif)}</CardText>
          <Row>
            <Col xs="12" className="pb-2">
              <ModaleServices
                uuid={uuid}
                title={titre}
                logo={logo}
                description={descriptif}
                getService={getService}
              />
            </Col>
            <Col xs="12" className="pb-2">
              <DeleteService uuid={uuid} getService={getService} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardServices;
