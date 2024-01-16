import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import DismissableAlert from "./DismissableAlert";
import { addFavouriteAction } from "../redux/actions";

function Job({ data }) {
  const dispatch = useDispatch();
  const favouriteJobs = useSelector((state) => state.favourites.list);
  const [error, setError] = useState(false);

  function checkDuplicates(arr) {
    arr.map()
  }

  return (
    <>
      {error && <DismissableAlert show={setError} text="Job Already Favourited!!" type="warning"/>}
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={8}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
        <Col xs={1}>
          <Button
            onClick={() => {
              if (!favouriteJobs.find(elem => elem._id === data._id)) {
                dispatch(addFavouriteAction(data))
              } else {
                setError(true);
              }
            }}
          >
            Add
          </Button>
        </Col>
      </Row>
    </>
  );
}

function addToFavs() {}

export default Job;
