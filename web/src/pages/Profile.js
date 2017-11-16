import React from "react";
import Layout from "../templates/Layout";

import DATAPROFILES from "../data/users";

const Profile = props => (
  <Layout>
    <div>
      {DATAPROFILES.filter(user => {
        return user._id === Number(props.match.params.id);
      }).map(user => {
        return (
          <div key={user._id}>
            <h2>{user.name}</h2>
            {user.title && <h3>{user.title}</h3>}
            <h3>id: {user._id}</h3>
          </div>
        );
      })}
    </div>
  </Layout>
);

export default Profile;
