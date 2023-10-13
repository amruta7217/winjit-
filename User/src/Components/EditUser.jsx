import React, {useState} from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { update } from "../store/userSlice";

function EditUser() {
    const {id} = useParams()
    const user = useSelector(state => state.user)
    const existinguser = user.filter(f => f.id === id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        username,
        password,
        confirmPassword,
        fname,
        lname,
        email,
        address,
        city,
        state,
        pincode
    } = existinguser[0]

    const [uname, setUserName] = useState(username)
    const [pass, setPassword] = useState(password)
    const [cpass, setConfirmPassword] = useState(confirmPassword)
    const [name, setFname] = useState(fname)
    const [lastname, setLname] = useState(lname)
    const [uemail, setEmail] = useState(email)
    const [uaddress, setAddress] = useState(address)
    const [ucity, setCity] = useState(city)
    const [ustate, setState] = useState(state)
    const [upincode, setPincode] = useState(pincode)

    const handleUpdate = () => {
        dispatch(update({
            id,
            username: uname,
            password: pass,
            confirmPassword: cpass,
            fname: name,
            lname: lastname,
            email: uemail,
            address: uaddress,
            city: ucity,
            stateu: ustate,
            pincode: upincode
        }))
        navigate("/users")
    }

  return (
    <form className="mx-60 my-24">
      <div className="space-y-24">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label for="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input 
                    type="text" 
                    name="username" 
                    className="pl-1.5 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                    placeholder="janesmith" 
                    value={uname}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label for="username" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input 
                    type="text" 
                    name="password" 
                    className="pl-1.5 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={pass}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label for="username" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input 
                    type="text" 
                    name="confirmpassword" 
                    className="pl-1.5 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={cpass}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
              <div className="mt-2">
                <input type="text" 
                  name="first-name" 
                  id="first-name" 
                  className="pl-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                  value={name}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
              <div className="mt-2">
                <input 
                  type="text" 
                  name="last-name" 
                  id="last-name" 
                  className="pl-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                  value={lastname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input 
                  id="email" 
                  name="email" 
                  type="email"  
                  className="pl-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                  value={uemail}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label for="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
              <div className="mt-2">
                <input 
                  type="text" 
                  name="street-address" 
                  id="street-address"
                  className="pl-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                  value={uaddress}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label for="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
              <div className="mt-2">
                <input 
                  type="text" 
                  name="city" 
                  id="city" 
                  className="pl-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                  value={ucity}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label for="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
              <div className="mt-2">
                <input 
                  type="text" 
                  name="region" 
                  id="region"
                  className="pl-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                  value={ustate}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label for="postal-code" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
              <div className="mt-2">
                <input 
                  type="text" 
                  name="postal-code" 
                  id="postal-code" 
                  className="pl-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                  value={upincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-4">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
        <button 
          type="button" 
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </form>
  )
}

export default EditUser
