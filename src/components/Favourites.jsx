import { useSelector, useDispatch } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import DismissableAlert from "./DismissableAlert";

function Favourites() {
  const favourites = useSelector((state) => state.favourites);
  const dispatcher = useDispatch();
  const [removed, setRemoved] = useState(false);

  console.log(favourites);

  return (
    <>
      {favourites.length === 0 && (
        <Alert variant="info">
          You haven't added any favourites yet. Start by adding some!
        </Alert>
      )}
      {removed && (<DismissableAlert show={setRemoved} text="Job successfully removed!" type="info"/>)}
      <ListGroup>
        {favourites.map((item) => {
          return (
            <ListGroupItem key={item._id}>
              <div className="d-flex justify-content-between">
                <div>
                  <h4>{item.company_name}</h4>
                  <p>{item.title}</p>
                </div>
                <Button
                  onClick={() => {
                    dispatcher({ type: "removeFavourite", payload: item });
                    setRemoved(true);
                  }}
                  className="btn-danger"
                >
                  Remove
                </Button>
              </div>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </>
  );
}

export default Favourites;
