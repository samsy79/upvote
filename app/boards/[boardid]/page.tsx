import React from 'react'

export default function BoardPage({
    params,
    searchParams,
  }: {
    params: { boardid: string }
    searchParams: { [key: string]: string | string[] | undefined }
  })  {
    
  return (
    <div>BoardPage
        <p>{params.boardid}
        {JSON.stringify(searchParams)}</p>
    </div>
  )
}
