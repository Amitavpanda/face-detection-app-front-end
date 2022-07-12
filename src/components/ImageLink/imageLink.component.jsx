import React from "react";
import { Form, Button } from "react-bootstrap";
const ImageLink = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <Form>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h2 style={{ marginTop: 20, color: "white", marginBottom: 20 }}>
              {" "}
              Enter the image Link{" "}
            </h2>{" "}
            <Form.Control
              type="email"
              placeholder="Image Link"
              onChange={onInputChange}
            />
          </Form.Group>{" "}
        </div>
        <Button variant="primary" type="submit" onClick={onButtonSubmit}>
          Submit{" "}
        </Button>{" "}
      </Form>{" "}
    </div>
  );
};

export default ImageLink;
