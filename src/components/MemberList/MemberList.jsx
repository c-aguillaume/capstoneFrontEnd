import MemberListItem from "../MemberListItem/MemberListItem"


export default function MemberList({ members}) {
  return (
    <div>
      {members && members.map(member => {
        return <MemberListItem  key={member._id} member={member} />
      })}
    </div>
  )
}
