import React, { useState, createRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const addText = () => {
    setCount(count + 1);
  };
  const memeref = createRef();

  return (
    <>
      <div className="container">
        <div
          ref={memeref}
          className="meme mx-auto p-3"
          style={{ width: "500px", height: "350px" }}
        >
          <img src={params.get("url")} width="300px" height="300px" />
          {Array(count)
            .fill(0)
            .map((e) => (
              <Text />
            ))}
        </div>
        <div className="text-center m-3 p-3">
          <Button onClick={addText} className="mx-3">
            Add Text{" "}
          </Button>
          <Button
            variant="success"
            onClick={(e) => exportComponentAsJPEG(memeref)}
          >
            Download
          </Button>
        </div>
      </div>
    </>
  );
};
export default EditPage;
