/* eslint-disable */

import JobsSideBar from '../JobsSideBar/index';
import ProfileCard from '../Home/ProfileCard';
import RecentJobLists from '../Home/recentJobLists/index';

function UserHome() {
  return (
    <div className="container-fluid">
      {/* <h2>Hi, LeanIn Job Seeker</h2> */}

      <div className="row mt-2">
        {/* <div className="col-3 col-md-2">
          <ProfileCard />
        </div> */}
        <div
          className="col col-md-10 col-lg-9"
          style={{ position: 'relative' }}
        >
          <ProfileCard />
          <RecentJobLists />
        </div>
        <div className="d-done d-sm-none d-lg-block col-lg-3">
          <JobsSideBar />
        </div>
      </div>
    </div>
  );
}

export default UserHome;