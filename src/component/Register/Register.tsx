import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
const Register = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    //Destructuring Data
    const {
      admissionYear,
      age,
      gender,
      bloodGroup,
      district,
      mobile,
      name,
      thana,
      village,
      houseNo,
      guardian,
      email,
      classNo,
    } = data

    let mobileString = mobile.toString()

    //Id Form
    let studentId =
      admissionYear +
      gender +
      `${mobileString.toString().substring(mobileString.length - 3)}` +
      age +
      `${district.substring(0, 3).toUpperCase()}` +
      bloodGroup

    //Combine data with id
    let newData = {
      name: name,
      gender: gender,
      age: age,
      bloodGroup: bloodGroup,
      district: district,
      id: studentId,
      thana: thana,
      village: village,
      houseNo: houseNo,
      guardian: guardian,
      email: email,
      classNo: classNo,
      admissionYear: admissionYear,
      mobile: mobile,
    }
    try {
      fetch('http://localhost:5000/admin/student_register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data._id) {
            alert('Registration Successful')
            router.push({
              pathname: '/student/imageupload',
              query: { _id: data._id },
            })
          }
        })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="h-screen bg-blue-100 ">
      <h1 className="mb-2 p-5 text-center text-3xl font-bold">
        {' '}
        Registration Form
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex flex-col border bg-indigo-200 to-blue-50 shadow-md shadow-blue-500 md:w-3/5"
      >
        {/* name, gender, age, bloodGroup, classNo, admissionYear, guardian,  guardianImage, studentImage  */}
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          {/* First Column */}
          <div className="md: flex flex-col p-2 md:p-5">
            <label className="font-bold"> Full Name </label>
            <input
              className="rounded border p-1 "
              type="text"
              {...register('name')}
            />
            <label className="my-2 font-bold"> Gender </label>
            <select {...register('gender')} className="rounded border p-1.5 ">
              <option value="F">female</option>
              <option value="M">male</option>
            </select>
            <label className="my-2 font-bold"> Age </label>
            <select {...register('age')} className="rounded border p-1.5 ">
              <option value="C">5-12</option>
              <option value="T">13-19</option>
              <option value="A">20-25</option>
            </select>
            <label className="my-2 font-bold"> Blood Group </label>
            <select
              {...register('bloodGroup')}
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
                {...register('district')}
                className="mx-1 my-1 rounded border p-1"
                placeholder="District"
                type="text"
              />
              <input
                placeholder="Thana"
                className="my-1 mx-1 rounded border p-1 "
                {...register('thana')}
                type="text"
              />
              <input
                className="mx-1 my-1 rounded border p-1"
                placeholder="Village"
                type="text"
                {...register('village')}
              />
              <input
                placeholder="House"
                className="my-1 mx-1 rounded border p-1 "
                type="text"
                {...register('houseNo')}
              />
            </div>
          </div>
          {/* Second Column */}
          <div className="flex flex-col p-2  md:p-5">
            <label className="my-2 font-bold"> Local Guardian </label>
            <input
              {...register('guardian')}
              className="rounded border p-1 "
              type="text"
            />
            <label className="my-2 font-bold"> Mobile </label>
            <input
              {...register('mobile')}
              className="rounded border p-1 "
              type="number"
            />
            <label className="my-2 font-bold"> Email </label>
            <input
              {...register('email')}
              className="rounded border p-1 "
              type="email"
            />
            <label className="my-2 font-bold"> Class </label>
            <input
              {...register('classNo')}
              className="rounded border p-1"
              type="number"
            />
            <label className="my-2 font-bold"> Admission Year </label>
            <input
              {...register('admissionYear')}
              className="rounded border p-1 "
              type="text"
            />
            <div className="grid grid-cols-2">
              <div className="">
                <input
                  className=" hover:white mt-2 w-full rounded border bg-blue-300 font-bold hover:bg-blue-400 hover:underline"
                  type="submit"
                  value="Register"
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
