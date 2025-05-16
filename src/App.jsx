import { useState, useEffect } from 'react'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MemberCard from './components/MemberCard'
import sampleMembers from './membersData/data'   ///Hard coded Test Data



function App() {
  // useEffect(() => {
  //   fetch((`http://127.0.0.1:8000/api/v1/members`)
  // .then(response => response.json())
  // )
  // })
  return (
    <div className="container mt-4">
      <div className="row">
        {sampleMembers.map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <MemberCard member={member} />
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;