import React, { useState } from 'react'

const Register = () => {
  const [inputField, setInputField] = useState({
    name: '',
    age: '',
    classNo: '',
    gender: '',
    bloodGroup: '',
    guardian: '',
    mobile: '',
    email: '',
    admissionYear: '',
    district: '',
    thana: '',
    village: '',
    houseNo: '',
    studentImage: '',
  })

  const [image, setImage] = useState('')
  const [showImage, setShowImage] = useState(false)
  const handleChange = (e: any) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value })
  }

  const handleImageUpload = (e: any) => {
    console.log(e.target.files[0])
    setInputField({ ...inputField, studentImage: e.target.files[0] })
    console.log(inputField)
  }

  const handleSubmit = (e: any) => {
    const { admissionYear, age, gender, bloodGroup, district, mobile } =
      inputField
    let mobileString = mobile.toString()
    let studentId =
      admissionYear +
      gender +
      `${mobileString.toString().substring(mobileString.length - 3)}` +
      age +
      `${district.substring(0, 3).toUpperCase()}` +
      bloodGroup

    const formData = new FormData()
    console.log('==', inputField.studentImage.name)
    formData.append(
      'file',
      inputField.studentImage,
      inputField.studentImage.name
    )
    formData.append('name', inputField.name)
    formData.append('age', inputField.age)
    formData.append('classNo', inputField.classNo)
    formData.append('gender', inputField.gender)
    formData.append('guardian', inputField.guardian)
    formData.append('bloodGroup', inputField.bloodGroup)
    formData.append('district', inputField.district)
    formData.append('village', inputField.village)
    formData.append('thana', inputField.thana)
    formData.append('houseNo', inputField.houseNo)
    formData.append('mobile', inputField.mobile)
    formData.append('admissionYear', inputField.admissionYear)
    formData.append('id', studentId)
    formData.append('email', inputField.email)

    console.log(formData)
    try {
      fetch('http://localhost:5000/admin/student_register', {
        method: 'POST',
        headers: {},
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.file)
          setImage(data.file)
          setShowImage(true)
          setTimeout(() => {
            setImage('')
            setShowImage(false)
          }, 1000)
        })
    } catch (err) {
      console.log(err)
    }
    e.preventDefault()
  }
  return (
    <div className="h-screen bg-blue-100 ">
      <h1 className="mb-2 p-5 text-center text-3xl font-bold">
        {' '}
        Registration Form
      </h1>
      <form className="mx-auto flex flex-col border bg-indigo-200 to-blue-50 shadow-md shadow-blue-500 md:w-3/5">
        {/* name, gender, age, bloodGroup, classNo, admissionYear, guardian,  guardianImage, studentImage  */}
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          {/* First Column */}
          <div className="md: flex flex-col p-2 md:p-5">
            <label className="font-bold"> Full Name </label>
            <input
              className="rounded border p-1 "
              type="text"
              name="name"
              value={inputField.name}
              onChange={handleChange}
            />
            <label className="my-2 font-bold"> Gender </label>
            <select
              name="gender"
              onChange={handleChange}
              value={inputField.gender}
              className="rounded border p-1.5 "
            >
              <option value="F">female</option>
              <option value="M">male</option>
            </select>
            <label className="my-2 font-bold"> Age </label>
            <select
              name="age"
              onChange={handleChange}
              value={inputField.age}
              className="rounded border p-1.5 "
            >
              <option value="C">5-12</option>
              <option value="T">13-19</option>
              <option value="A">20-25</option>
            </select>
            <label className="my-2 font-bold"> Blood Group </label>
            <select
              name="bloodGroup"
              onChange={handleChange}
              value={inputField.bloodGroup}
              className="rounded border p-1.5 "
            >
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <label className="my-2 font-bold"> Local Address </label>
            <div className="grid grid-cols-2">
              <input
                className="mx-1 my-1 rounded border p-1"
                placeholder="District"
                type="text"
                name="district"
                value={inputField.district}
                onChange={handleChange}
              />
              <input
                placeholder="Thana"
                className="my-1 mx-1 rounded border p-1 "
                type="text"
                name="thana"
                value={inputField.thana}
                onChange={handleChange}
              />
              <input
                className="mx-1 my-1 rounded border p-1"
                placeholder="Village"
                type="text"
                name="village"
                value={inputField.village}
                onChange={handleChange}
              />
              <input
                placeholder="House"
                className="my-1 mx-1 rounded border p-1 "
                type="text"
                name="houseNo"
                value={inputField.houseNo}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Second Column */}
          <div className="flex flex-col p-2  md:p-5">
            <label className="my-2 font-bold"> Local Guardian </label>
            <input
              name="guardian"
              value={inputField.guardian}
              onChange={handleChange}
              className="rounded border p-1 "
              type="text"
            />
            <label className="my-2 font-bold"> Mobile </label>
            <input
              name="mobile"
              value={inputField.mobile}
              onChange={handleChange}
              className="rounded border p-1 "
              type="number"
            />
            <label className="my-2 font-bold"> Email </label>
            <input
              name="email"
              value={inputField.email}
              onChange={handleChange}
              className="rounded border p-1 "
              type="email"
            />
            <label className="my-2 font-bold"> Class </label>
            <input
              name="classNo"
              value={inputField.classNo}
              onChange={handleChange}
              className="rounded border p-1"
              type="number"
            />
            <label className="my-2 font-bold"> Admission Year </label>
            <input
              name="admissionYear"
              value={inputField.admissionYear}
              onChange={handleChange}
              className="rounded border p-1 "
              type="text"
            />
            <input
              type="file"
              name="file"
              // value={inputField.studentImage}
              onChange={handleImageUpload}
              className="rounded border p-1 "
            />
            <div className="grid grid-cols-2">
              <div className="">
                <input
                  className=" hover:white mt-2 w-full rounded border bg-blue-300 font-bold hover:bg-blue-400 hover:underline"
                  type="submit"
                  value="Register"
                  onClick={handleSubmit}
                />
              </div>
              <div className="w-25">
                <img
                  hidden={!showImage ? true : false}
                  className="w-full"
                  src={`http://localhost:5000/public/image/${image}`}
                  alt="profilePic"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
