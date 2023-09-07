import React from 'react'

interface CustomeFilterProps{
    title:string
}
const CustomFilter = ({title}:CustomeFilterProps) => {
    console.log("title",title);
  return (
    <div>CustomFilter</div>
  )
}

export default CustomFilter