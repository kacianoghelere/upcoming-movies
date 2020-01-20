import React from 'react'

export default function MovieVideos({ movie }) {
  if (! movie.videos || movie.videos.lenth === 0) {
    return null
  }

  const movieVideos = (movie.videos || []).map((video) => (
    <div class="col p-1" key={video.id}>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
        />
      </div>
    </div>
  ))

  return (
    <div className="MovieVideos">
      <h3>Videos</h3>
      <div className="row row-cols-1 row-cols-sm-2 my-3 mx-0">
        {movieVideos}
      </div>
    </div>
  )
}
