import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction, setJobListAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatcher = useDispatch();
  const jobs = useSelector((state) => state.jobList.jobs);

useEffect(() => {
  dispatcher(getJobsAction([]))
}, [])


  const handleChange = (e) => {
    setQuery(e.target.value);
  };

   const  handleSubmit = async (e) => {
    e.preventDefault();
    await dispatcher(setJobListAction(query));

  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.length > 0  && (jobs[0].map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          )))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
