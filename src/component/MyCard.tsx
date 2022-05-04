import Image from 'next/image'
import React from 'react'

interface PropObj {
  num: string
  img: any
  dex: string
  alt: string
}

const MyCard = ({ num, img, dex, alt }: PropObj) => {
  return (
    <div className="border bg-white p-4 md:my-5">
      <Image className="w-100 h-100" src={img} alt={alt} />

      <p className="my-2  text-sm font-semibold"> ${num} online courses</p>

      <p> {dex}</p>
    </div>
  )
}

export default MyCard
