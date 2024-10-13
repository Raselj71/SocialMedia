'use client'
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { useRouter } from "next/navigation";
import Button from "./Button";
function Signup({ visible, close }: any) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [firstName, setFirstName]=useState("")
  const [lastName, setLasttName]=useState("")
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const[isloading, setLoading]=useState(false)


  const router=useRouter()

  const generateYears = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
      years.push(year);
    }
    return years;
  };

  const handleGenderChange = (e:any) => {
    setGender(e.target.value);
  };
  
  const handleSubmit= async(e:any)=>{
    e.preventDefault()

    try {
        setLoading(true)
        console.log("your are in  post route")
        const dateOfBirth = new Date(`${year}-${month}-${day}`);

        const signupData = {
            firstName,
            lastName,
            email,
            password,
            gender,
            dateOfBirth,
          };

          console.log(signupData)
    
         const reponse=await axios.post(`http://localhost:5000/user/signup` , signupData);
         if (reponse.status === 201) {
            console.log("User created successfully", reponse.data);
            // router.push('/dashbord')
             close()
           
          }
    } catch (error) {
        console.log(error)
        
    }finally{
      setLoading(false)
    }
           



  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md lg:max-w-lg w-full">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-2xl">Signup</h2>
            <p>It's quick and easy</p>
          </div>
          <button onClick={close} className="text-xl">
            <RxCross2 />
          </button>
        </div>
        <hr className="mt-5" />
        <form onSubmit={handleSubmit}>
          <div className="min-w-full mt-5 flex gap-2">
            <input
              className="w-1/2 h-12 border px-2 rounded-md focus:outline-blue-600"
              required
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e)=>{setFirstName(e.target.value)}}
            />
            <input
              className="w-1/2 border px-2 rounded-md focus:outline-blue-600"
              type="text"
              required
              placeholder="Last name"
              value={lastName}
              onChange={(e)=>{setLasttName(e.target.value)}}
            />
          </div>
          <div>
            <input
              className="w-full mt-3 border h-12 px-4 rounded-md focus:outline-blue-600"
              type="email"
              placeholder="email address"
              required
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div>
            <input
              className="w-full mt-3 border h-12 px-4 rounded-md focus:outline-blue-600"
              type="password"
              placeholder="new password"
              required
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <div className="mt-2">
            <label className="mt-2" htmlFor="Data of bird">
              {" "}
              Date of Birth ?
            </label>
            <br />

            <div className="flex justify-between mb-4 gap-2">
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="border p-2 rounded-md w-1/3 focus:outline-blue-600"
                required
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="border p-2 rounded-md w-1/3 focus:outline-blue-600"
                required
              >
                <option value="">Month</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month, index) => (
                  <option key={index} value={index + 1}>
                    {month}
                  </option>
                ))}
              </select>

              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="border p-2 rounded-md w-1/3 focus:outline-blue-600"
                required
              >
                <option value="">Year</option>
                {generateYears().map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="Gerner">Gender?</label><br/>

            <div className="flex justify-between gap-2">
                  <label className="flex items-center border justify-center rounded-md w-1/3 p-2 gap-4" htmlFor="Female">Female     <input type="radio" name="gender" value={"female"} checked={gender==="female"} onChange={handleGenderChange}/></label>
                  <label className="flex items-center border justify-center rounded-md w-1/3 p-2 gap-4" htmlFor="Male">Male  <input type="radio" name="gender" value={"male"} checked={gender==="male"} onChange={handleGenderChange}/></label>
                  <label className="flex items-center border justify-center rounded-md w-1/3 p-2 gap-4" htmlFor="Custom">Custom  <input type="radio" name="gender" value={'custom'} checked={gender==="custom"} onChange={handleGenderChange}/></label>
            </div>
             <div className="text-xs mt-5">

             By clicking Sign Up, you agree to our Terms, <span className="underline text-blue-600">Privacy Policy</span> and <span className="underline text-blue-600">Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any time.
             </div>
            <div>
                 <Button buttonType="submit" className="bg-[#42b72a] w-full text-white rounded-md mt-4 h-10 text-xl" text="Signup" isLoading={isloading} loadingText="creating account..."/>
                
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
