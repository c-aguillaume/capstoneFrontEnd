export default function MemberListItem({ member }) {
  
  const photoUrl = "https://placehold.co/300x200";

  return (
    <div className="card mb-4" style={{ width: '18rem' }}>
      <img src={photoUrl} className="card-img-top" alt={`${member.demographics.name} photo`} />
      <div className="card-body">
        <h5 className="card-title">{member.demographics.name}</h5>
        <p className="card-text mb-1"><strong>Email:</strong> {member.demographics.email}</p>
        <p className="card-text mb-1"><strong>Phone:</strong> {member.demographics.phoneNumber}</p>

        <hr />

        <p className="card-text mb-1"><strong>Control Number:</strong> {member.fratDemographics.controlNumber}</p>
        <p className="card-text mb-1"><strong>Chapter Initiated:</strong> {member.fratDemographics.chapterInitiated}</p>
        <p className="card-text mb-1"><strong>Crossing Date:</strong> {member.fratDemographics.crossingDate}</p>

        <hr />

        <p className="card-text mb-1"><strong>Current Eboard:</strong> {member.eboard.currentEboard ? "Yes" : "No"}</p>
        <p className="card-text mb-1"><strong>Position:</strong> {member.eboard.position}</p>
      </div>
    </div>
  )
}
