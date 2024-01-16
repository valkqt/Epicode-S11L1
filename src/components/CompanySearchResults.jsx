import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCompanyJobsAction } from '../redux/actions'


const CompanySearchResults = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobList.jobs);
  
  useEffect(() => {
    dispatch(getCompanyJobsAction(params.companyName))
  }, [])


  return (
    <Container>
      <Row>
        <Col>
          {jobs.length > 0 && (jobs[0].map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          )))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
