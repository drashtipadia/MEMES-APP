import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MemeCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }} className="p-1 m-2 border border-black">
      <Card.Img variant="top" src={props.img} width={250} height={200} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <div className="text-center">
          <Button
            onClick={(e) => navigate(`/edit?url=${props.img}`)}
            variant="primary"
            style={{ width: "120px" }}
          >
            Edit
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};
export default MemeCard;
