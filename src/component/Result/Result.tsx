import Router from 'next/router'
import { useForm } from 'react-hook-form'

type resultInfo = {
  bangla: string
  banglaScore: number
  bGrade: string
  english: string
  eGrade: string
  englishScore: number
  egrade: string
  math: string
  mathScore: number
  mGrade: string
  science: string
  scienceScore: number
  scienceGrade: string
  socialScience: string
  socialGrade: string
  socialScienceScore: number
  gk: string
  gkGrade: string
  gkScore: number
  It: string
  itGrade: string
  ItScore: number
  grade: string
  student: string
  id: number
  ct: string
}

const Result = () => {
  const { register, handleSubmit, setValue } = useForm<resultInfo>()

  const settingGrade = (score: any, fieldGrade: any) => {
    if (score >= 80 && score <= 100) {
      setValue(fieldGrade, 'A+')
    } else if (score >= 70 && score <= 79) {
      setValue(fieldGrade, 'A')
    } else if (score >= 60 && score <= 69) {
      setValue(fieldGrade, 'A-')
    } else if (score >= 50 && score <= 59) {
      setValue(fieldGrade, 'B')
    } else if (score >= 40 && score <= 49) {
      setValue(fieldGrade, 'C')
    } else if (score >= 33 && score <= 39) {
      setValue(fieldGrade, 'D')
    } else {
      setValue(fieldGrade, 'F')
    }
  }
  const onSubmit = (data: resultInfo) => {
    const {
      student,
      id,
      bangla,
      banglaScore,
      bGrade,
      english,
      egrade,
      englishScore,
      math,
      mGrade,
      mathScore,
      science,
      scienceGrade,
      scienceScore,
      socialGrade,
      socialScience,
      socialScienceScore,
      gk,
      gkScore,
      gkGrade,
      It,
      itGrade,
      ItScore,
      ct,
    } = data

    let resultInfo = [
      { student: student },
      { id: id },
      { bangla: { score: banglaScore, grade: bGrade } },
      { english: { score: englishScore, grade: bGrade } },
      { math: { score: mathScore, grade: mGrade } },
      { science: { score: scienceScore, grade: scienceGrade } },
      { socialScience: { score: socialScienceScore, grade: socialGrade } },
      { gk: { score: gkScore, grade: gkGrade } },
      { It: { score: ItScore, grade: itGrade } },
      { ct: ct },
    ]

    fetch('http://localhost:5000/teacher/postresult', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resultInfo),
    }).then((res) => {

      console.log(res.url)
      // s
      Router.push(res.url)
      
    })
  }
  const handleDown = (e: any) => {
    let fieldName = e.target.name
    let keyValue = e.target.value
    console.log(fieldName)
    if (fieldName === 'englishScore') {
      if (e.key === 'Backspace') {
        setValue('eGrade', '')
      }
      if (keyValue.length === 2 || keyValue.length === 1) {
        settingGrade(keyValue, 'eGrade')
      }
    }
    if (fieldName === 'mathScore') {
      if (e.key === 'Backspace') {
        setValue('mGrade', '')
      }
      if (keyValue.length === 2 || keyValue.length === 1) {
        settingGrade(keyValue, 'mGrade')
      }
    }
    if (fieldName === 'banglaScore') {
      if (e.key === 'Backspace') {
        setValue('bGrade', '')
      }
      if (keyValue.length === 2 || keyValue.length === 1) {
        settingGrade(keyValue, 'bGrade')
      }
    }
    if (fieldName === 'scienceScore') {
      if (e.key === 'Backspace') {
        setValue('scienceGrade', '')
      }
      if (keyValue.length === 2 || keyValue.length === 1) {
        settingGrade(keyValue, 'scienceGrade')
      }
    }
    if (fieldName === 'socialScienceScore') {
      if (e.key === 'Backspace') {
        setValue('socialGrade', '')
      }
      if (keyValue.length === 2 || keyValue.length === 1) {
        settingGrade(keyValue, 'socialGrade')
      }
    }
    if (fieldName === 'gkScore') {
      if (e.key === 'Backspace') {
        setValue('gkGrade', '')
      }
      if (keyValue.length === 2 || keyValue.length === 1) {
        settingGrade(keyValue, 'gkGrade')
      }
    }
    if (fieldName === 'ItScore') {
      if (e.key === 'Backspace') {
        setValue('itGrade', '')
      }
      if (keyValue.length === 2 || keyValue.length === 1) {
        settingGrade(keyValue, 'itGrade')
      }
    }
  }
  return (
    <div className="h-full bg-blue-100 md:h-screen">
      <h1 className="mb-2 p-5 text-center text-3xl font-bold">
        Result Processing Form
      </h1>
      <div className="grid md:grid-cols-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" col-span-12 flex flex-col p-2 md:col-span-9 md:p-0 md:px-10 "
        >
          {/* Student and Id */}
          <div className="grid gap-2 md:grid-cols-3 ">
            <div className="flex justify-end">
              <input
                className="my-1 w-full gap-2 p-1"
                placeholder="studentName"
                {...register('student', { required: true })}
              />
            </div>
            <div>
              <input
                className="my-1 w-full border p-1"
                placeholder="Student Id"
                {...register('id', { required: true })}
              />
            </div>
            <div>
              <input
                className="my-1 w-full border p-1"
                placeholder="Course Teacher"
                {...register('ct', { required: true })}
              />
            </div>
          </div>
          {/* Subject and Marks */}
          <div className="flex flex-col">
            {/* Bangla */}
            <div className="my-1 flex justify-between">
              <input
                className="w-2/5 rounded p-2"
                defaultValue="Bangla"
                {...register('bangla', { required: true })}
              />
              <input
                className="mx-5 w-2/5 rounded p-2"
                placeholder="Bangla"
                id="bangla"
                {...register('bGrade', { required: true })}
              />

              <input
                className="w-1/5 rounded p-2"
                placeholder="Score"
                onKeyUp={(e) => handleDown(e)}
                {...register('banglaScore', { required: true })}
              />
            </div>
            {/* English */}
            <div className="my-1 flex justify-between">
              <input
                className="w-2/5 rounded p-2"
                defaultValue="English "
                {...register('english', { required: true })}
              />
              <input
                className="mx-5 w-2/5 rounded p-2"
                placeholder="English"
                {...register('eGrade', { required: true })}
              />
              <input
                className="w-1/5 rounded p-2"
                placeholder="Score"
                onKeyUp={(e) => handleDown(e)}
                {...register('englishScore', { required: true })}
              />
            </div>
            {/* Math */}
            <div className="my-1 flex justify-between">
              <input
                className="w-2/5 rounded p-2"
                defaultValue="Math"
                {...register('math', { required: true })}
              />
              <input
                className="mx-5 w-2/5 rounded p-2"
                placeholder="Math"
                {...register('mGrade', { required: true })}
              />
              <input
                className="w-1/5 rounded p-2"
                placeholder="Score"
                onKeyUp={(e) => handleDown(e)}
                {...register('mathScore', { required: true })}
              />
            </div>
            {/* Science */}
            <div className="my-1 flex justify-between">
              <input
                className="w-2/5 rounded p-2"
                defaultValue="Science"
                {...register('science', { required: true })}
              />
              <input
                className="mx-5 w-2/5 rounded p-2"
                placeholder="Science"
                {...register('scienceGrade', { required: true })}
              />

              <input
                className="w-1/5 rounded p-2"
                placeholder="Score"
                onKeyUp={(e) => handleDown(e)}
                {...register('scienceScore', { required: true })}
              />
            </div>
            {/* Social Science */}
            <div className="my-1 flex justify-between">
              <input
                className="w-2/5 rounded p-2"
                defaultValue="Social Science"
                {...register('socialScience', { required: true })}
              />
              <input
                className="mx-5 w-2/5 rounded p-2"
                placeholder="Social Science"
                {...register('socialGrade', { required: true })}
              />

              <input
                className="w-1/5 rounded p-2"
                placeholder="Score"
                onKeyUp={(e) => handleDown(e)}
                {...register('socialScienceScore', { required: true })}
              />
            </div>
            {/* GK */}
            <div className="my-1 flex justify-between">
              <input
                className="w-2/5 rounded p-2"
                defaultValue="GK"
                {...register('gk', { required: true })}
              />
              <input
                className="mx-5 w-2/5 rounded p-2"
                placeholder="GK"
                {...register('gkGrade', { required: true })}
              />

              <input
                className="w-1/5 rounded p-2"
                placeholder="Score"
                onKeyUp={(e) => handleDown(e)}
                {...register('gkScore', { required: true })}
              />
            </div>
            {/* IT */}
            <div className="my-1 flex justify-between">
              <input
                className="w-2/5 rounded p-2"
                defaultValue="IT"
                {...register('It', { required: true })}
              />
              <input
                className="mx-5 w-2/5 rounded p-2"
                placeholder="IT"
                {...register('itGrade', { required: true })}
              />

              <input
                className="w-1/5 rounded p-2"
                placeholder="Score"
                onKeyUp={(e) => handleDown(e)}
                {...register('ItScore', { required: true })}
              />
            </div>
          </div>

          <input
            className=" hover:white mt-2 w-2/5 rounded  border bg-blue-300 font-bold hover:bg-blue-400 hover:underline md:mx-auto"
            type="submit"
            value="Generate Result Sheet"
          />
        </form>
        {/* GPA and Number */}
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
