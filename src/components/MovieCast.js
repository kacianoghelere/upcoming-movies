import React from 'react'

import CastMemberCard from './CastMemberCard'

export default function MovieCast({ movie }) {
  if (! movie.main_cast || movie.main_cast.lenth === 0) {
    return null
  }

  const mainCast = (movie.main_cast || []).map((member) => (
    <div
      className="col-2 col-sm-4 col-md-3 p-1"
      key={member.id}
    >
      <CastMemberCard member={member} />
    </div>
  ))

  return (
    <div className="MovieCast my-3">
      <h3>Main cast</h3>
      <div className="row my-3 mx-0 justify-content-stretch">
        {mainCast}
      </div>
    </div>
  )
}
