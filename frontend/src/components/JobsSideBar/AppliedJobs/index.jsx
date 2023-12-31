/* eslint-disable */

import React from 'react';
import { useSelector } from 'react-redux';
import { ChevronRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router';

function AppliedJobsComponent() {
  const { jobs: appliedJobs } = useSelector((state) => state.appliedJobs);
  const navigate = useNavigate();
  const NavigateJobDetails = (id) => navigate(`/search-details/${id}`);
  return (
    <div className="list-group">
      <div className="list-group-item bg-primary">
        <h4 className="fw-bold mt-2 mb-1">Applied Jobs</h4>
      </div>
      {Array.isArray(appliedJobs) &&
        appliedJobs.map((job) => (
          <div
            key={job.job_id}
            className="list-group-item d-flex justify-content-between"
          >
            <div>
              <h6 className="fw-bold">{job.title}</h6>
              <span>{job.company_name}</span>
            </div>
            <div
              className="clickable mt-2"
              onClick={() => NavigateJobDetails(job.job_id)}
            >
              <h4>
                <ChevronRight />
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
}

export default AppliedJobsComponent;