import React from 'react';

export default function InfoBar(props: {title: string}) {
  return (
    <div className='select-none cursor-normal relative'>
      <h1>{props.title}</h1>
    </div>
  )
}