import React from 'react'

const ImageUpload = () => {
  return (
    <form
      action="http://localhost:5000/admin/image"
      method="POST"
      encType="multipart/form-data"
    >
      <input type="file" name="myfile" />
      <input type="submit" value="Upload" />
    </form>
  )
}

export default ImageUpload
