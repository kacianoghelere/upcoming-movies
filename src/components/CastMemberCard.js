import React from 'react'

export default function CastMemberCard({ member }) {
  return (
    <div className="CastMemberCard card border-0 mb-2 h-100" key={member.id}>
      <img
        className="card-img"
        src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
        alt={member.name}
      />
      <div className="card-body text-center p-0">
        <small className="card-title">{member.name}</small><br />
        <small className="card-text text-muted">{member.character}</small>
      </div>
    </div>
  )
}
