export default function MemberListItem({ member}) {
  return (
    <div>
        <h2>{member.demographics.name}</h2>
        <p>{member.demographics.email}</p>
    </div>
  )
}
