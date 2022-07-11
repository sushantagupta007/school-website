import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const ImageUpload = () => {
  const router = useRouter()
  let id = router.query._id
  // const collectImage = () => {
  //   console.log('hello')
  //   fetch('http://localhost:5000/admin/getImage').then((res) =>
  //     console.log(res)
  //   )
  // }

  const { register, handleSubmit } = useForm()
  const [picture, setPicture] = useState(false)
  const onSubmit = async (data: any) => {
    const formData = new FormData()
    formData.append('file', data.file[0])

    const res = await fetch(
      `http://localhost:5000/admin/student_register?id=${id}`,
      {
        method: 'POST',
        body: formData,
      }
    ).then((res) => {
      // if (res) {
      //   collectImage()
      // }
    })
  }
  return (
    <div className="mx-auto flex h-screen w-2/5 flex-col items-center justify-center">
      <form
        className=" flex flex-col items-center justify-center border border-indigo-500/50 p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="file" {...register('file')} />

        <input
          className=" hover:white mt-2 w-full rounded border bg-blue-300 font-bold hover:bg-blue-400 hover:underline"
          type="submit"
        />
      </form>
      <div>
        <h2 className="text-center font-bold"> Uploaded Image</h2>
        {picture ? (
          <img
            style={{ width: '100px', height: '100px' }}
            src=""
            alt="profilepic"
          />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default ImageUpload
