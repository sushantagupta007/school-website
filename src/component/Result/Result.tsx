import cogoToast from 'cogo-toast'
import React, { useState } from 'react'

let subjects = [
  'Bangla',
  'English',
  'Math',
  'Science',
  'Social Science',
  'GK',
  'IT',
]

const Result = () => {
  const [inputField, setInputField] = useState({
    student: '',
    sid: '',
    subject: '',
    number: '',
    grade: '',
  })

  const [data, setData] = useState()

  const handleChange = (e: any) => {
    console.log(e.target.value)
    setInputField({ ...inputField, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    if (
      !inputField.sid ||
      !inputField.number ||
      !inputField.grade ||
      !inputField.subject ||
      !inputField.student
    ) {
      cogoToast.warn('All Fields Are Required')
    }

    console.log(data)
    e.preventDefault()
  }

  let oldArray: any[] = []

  const handleAdd = () => {
    let inputSubject = inputField.subject
    oldArray.push(inputField)
    //Check subjet fields are empty or not
    if (!inputSubject) {
      cogoToast.warn('Subject Fields Are Mandatory')
    }

    if (inputSubject) {
      if (!localStorage.getItem('value')) {
        localStorage.setItem('value', JSON.stringify(oldArray))
      } else {
        let myArry = localStorage.getItem('value')
        let parseArray = JSON.parse(myArry)
        let localSubject = parseArray[0]?.subject
        let localSubject1 = parseArray[1]?.subject
        let localSubject2 = parseArray[2]?.subject
        let localSubject3 = parseArray[3]?.subject
        let localSubject4 = parseArray[4]?.subject
        let localSubject5 = parseArray[5]?.subject
        let localSubject6 = parseArray[6]?.subject

        if (
          localSubject === inputSubject ||
          localSubject1 === inputSubject ||
          localSubject2 === inputSubject ||
          localSubject3 === inputSubject ||
          localSubject4 === inputSubject ||
          localSubject5 === inputSubject ||
          localSubject6 === inputSubject
        ) {
          cogoToast.warn('Duplicated Fields Are not Allowed')
          return
        }

        console.log('matched')
        parseArray.push(inputField)
        localStorage.setItem('value', JSON.stringify(parseArray))

        console.log(inputField.subject)

        if (
          parseArray.length === subjects.length ||
          localStorage.length === subjects.length
        ) {
          setData(parseArray)
        }
        if (
          parseArray.length > subjects.length ||
          localStorage.length > subjects.length
        ) {
          localStorage.removeItem('value')
          window.location.reload()
        }
        console.log(parseArray.length)
      }
    }
  }

  return (
    <div className="h-full bg-blue-100 md:h-screen">
      <h1 className="mb-2 p-5 text-center text-3xl font-bold">
        Result Processing Form
      </h1>
      <div className="grid md:grid-cols-12">
        <form className=" col-span-12 flex flex-col p-2 md:col-span-9 md:p-0 md:px-10 ">
          <div className="grid gap-2 md:grid-cols-2 ">
            <div className="flex justify-end">
              <input
                name="student"
                className="my-1 w-full gap-2 p-1"
                placeholder="studentName"
                value={inputField.student}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="sid"
                className="my-1 w-full border p-1"
                placeholder="Student Id"
                value={inputField.sid}
                onChange={handleChange}
              />
            </div>
          </div>
          {subjects.map((item) => {
            return (
              <div key={item} className="grid gap-2 md:grid-cols-4">
                <div className="flex justify-end">
                  <select
                    className="my-1 w-full md:w-full"
                    name="subject"
                    // value={inputField.subject}
                    onChange={handleChange}
                  >
                    <option defaultValue="bangla">Bangla</option>
                    <option value="english">English</option>
                    <option value="math">Math</option>
                    <option value="social science">Social Science</option>
                    <option value="science">Science</option>
                    <option value="it">IT</option>
                    <option value="gk">GK</option>
                  </select>
                </div>
                <div>
                  <input
                    className="my-1 w-full  border p-1"
                    placeholder="Score"
                    type="text"
                    name="number"
                    // value={inputField.number}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <select
                    className="my-1 w-full border p-1 md:w-full"
                    name="grade"
                    onChange={handleChange}
                    // value={inputField.grade}
                  >
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="A">A-</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                  </select>
                </div>
                <div>
                  <button
                    className="mt-2 w-full rounded border bg-blue-200  font-bold hover:bg-blue-400 hover:text-white hover:text-white hover:underline md:mx-auto"
                    type="button"
                    onClick={handleAdd}
                  >
                    Add
                  </button>
                </div>
              </div>
            )
          })}
          <input
            className=" hover:white mt-2 w-1/5 rounded  border bg-blue-300 font-bold hover:bg-blue-400 hover:underline md:mx-auto"
            type="submit"
            value="Result"
            onClick={handleSubmit}
          />
        </form>
        <div className="col-span-12 p-2 md:col-span-3 md:p-0  ">
          <h1 className="text-center font-bold"> GPA and Number </h1>
          <table className="w-full table-auto">
            <thead className="bg-blue-200">
              <tr className="w-full">
                <th className=" bg-red-500 text-left ">Score</th>
                <th className=" bg-green-500 text-left">GPA</th>
                <th className=" bg-blue-500 text-left">Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-b-black py-2 text-left">80-100</td>
                <td className=" border border-b-black text-left">5.00</td>
                <td className="border border-b-black text-left">A+</td>
              </tr>
              <tr>
                <td className="border border-b-black  py-2 text-left">70-79</td>
                <td className=" border border-b-black text-left">4.00</td>
                <td className="border border-b-black text-left">A</td>
              </tr>
              <tr>
                <td className="border border-b-black  py-2 text-left">60-69</td>
                <td className=" border border-b-black text-left">3.50</td>
                <td className="border border-b-black text-left">A-</td>
              </tr>
              <tr>
                <td className="border border-b-black  py-2 text-left">50-59</td>
                <td className=" border border-b-black text-left">3.00</td>
                <td className="border border-b-black text-left">B</td>
              </tr>
              <tr>
                <td className="border border-b-black  py-2 text-left">40-49</td>
                <td className=" border border-b-black text-left">2.00</td>
                <td className="border border-b-black text-left">C</td>
              </tr>
              <tr>
                <td className="border border-b-black  py-2 text-left">33-39</td>
                <td className=" border border-b-black text-left">1.00</td>
                <td className="border border-b-black text-left">D</td>
              </tr>
              <tr>
                <td className="border border-b-black  py-2 text-left">0-32</td>
                <td className=" border border-b-black text-left">0.00</td>
                <td className="border border-b-black text-left">F</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Result
