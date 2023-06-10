import './App.css'
import { useState } from 'react'
import * as yup from 'yup' // importing functions from yup library

function App() {
  const [firstName, setFirstName] = useState('') // useState to store First Name
  const [lastName, setLastName] = useState('') // useState to store Last Name
  const [mobile, setMobile] = useState('') // useState to store Mobile Number
  const [age, setAge] = useState('') // useState to store Age
  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [password, setPassword] = useState('') // useState to store Password

  // defining yup schema to validate our form

  const userSchema = yup.object().shape({
    // name can not be an empty string so we will use the required function
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    // email can not be an empty string so we will use the required function
    email: yup.string().email().required(),
    // password can not be an empty string so we will use the required function. Also, we have used the `min` function to set the minimum length of the password. Yup passwords by default handle the conditions of at least one upper case, at least one lower case, and at least one special character in the password
    password: yup.string().min(8).required(),
    age: yup.string(),
    mobile: yup.string().required(),
  })

  // Function which will validate the input data whenever submit button is clicked.

  async function validateForm() {
    // creating a form data object

    let dataObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      age: age,
      mobile: mobile,
    }

    // validating this dataObject concerning Yup userSchema

    const isValid = await userSchema.isValid(dataObject)

    if (isValid) {
      alert('Form is Valid')
    } else {
      alert('Form is Invalid')
    }
  }

  return (
    <div className=" w-[40%] media flex flex-col items-center mx-auto justify-center align-center text-center">

            <h1 className='text-white m-5 text-4xl '>
                Registration Form
            </h1>

      <form className=' text-white  flex flex-col w-full items-center justify-center gap-y-[20px] mt-[20px] '>
        
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          className='p-[10px] rounded-lg bg-slate-800 w-full'
        />

        {/* Input Field to insert Last Name */}
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          className='p-[10px] rounded-lg bg-slate-800 w-full'
        />

        {/* Input Field to insert Mobile Number */}
        <input
          placeholder="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
          className='p-[10px] rounded-lg bg-slate-800 w-full'
        />

        {/* Input Field to insert Age */}
        <input placeholder="Age" 
        onChange={(e) => setAge(e.target.value)} 
        className='p-[10px] rounded-lg bg-slate-800 w-full'
        />

        {/* Input Field to insert Email Address of the user */}
        <input 
          type='email'
        placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)} 
        className='p-[10px] rounded-lg bg-slate-800 w-full'
        />

        {/* Input Field to insert Password */}
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className='p-[10px] rounded-lg bg-slate-800 w-full'
        />

        <button
          type="submit"
          className=' text-white w-[150px] rounded-full outline p-[10px] bg-violet-500 hover:bg-violet-700  hover:scale-105 ease-in duration-300 mt-5'
          onClick={() => {
            validateForm()
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
