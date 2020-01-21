import React from 'react'

export default function LoadingIndicator() {
  return (
    <div class="LoadingIndicator text-muted">
      <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </div>
  )
}
