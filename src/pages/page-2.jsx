import React from "react";
import '../styles/Page-2.css'
import { gql } from "apollo-boost";

const Props={
    status:true,
}

const FETCH_USERS=gql`
    {
        users{
            id,
            
        }
    }
`

const Page2 = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Fetch users</h2>
        {Props.status?<p>Testing</p>:<p>No</p>}
        <button className="page-2-button">Click to fetch</button>
      </div>
    </div>
  );
};

export default Page2;
