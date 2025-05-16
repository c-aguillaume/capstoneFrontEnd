import { useState, useEffect } from 'react';
import { getMembers } from '../../utilities/members-api.js';
import CreateMemberForm from '../../components/CreateMemberForm/CreateMemberForm.jsx';
import MemberList from '../../components/MemberList/MemberList.jsx';

export default function HomePage() {

const [members, setMembers] = useState(null);

 
 
useEffect(() => {
 
    getMembers().then(data => setMembers(data))
  }, [])



  
  return (
    <div>
      <CreateMemberForm />
      <MemberList members={members} />
    </div>
  )
}
