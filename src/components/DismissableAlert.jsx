import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";

function DismissableAlert(props) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      props.show(false);
    }, 666);
  });

  if (show) {
    return (
      <Alert variant={props.type} className="mt-3">
        <Alert.Heading>{props.text}</Alert.Heading>
      </Alert>
    );
  }
  ;
}

export default DismissableAlert;
