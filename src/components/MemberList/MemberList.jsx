import MemberListItem from "../MemberListItem/MemberListItem"


export default function MemberList({ members }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {members && members.map(member => (
          <div key={member._id} className="col-3 mb-4">
            <MemberListItem member={member} />
          </div>
        ))}
      </div>
    </div>
  )
}