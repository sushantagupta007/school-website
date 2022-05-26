import React from 'react'

const Button = ({ handleSubmit, width }) => {
  return (
    <input
      className="width hover:white mt-2 w-full rounded border bg-blue-300 font-bold hover:bg-blue-400 hover:underline"
      type="submit"
      value="Register"
      onClick={handleSubmit}
    />
  )
}

export default Button
