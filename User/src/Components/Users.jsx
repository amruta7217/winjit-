import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { remove } from "../store/userSlice"

function Users() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const allUsers = useSelector(state => state.user)

  const handleRemove = (id) => {
      dispatch(remove(id))
  }

  console.log(allUsers)

  return (
    <div className="px-6 py-12">
      <h4>Users</h4>
      <p>A list of all the users in your account including their name, title, email.</p>
      <button 
        type="button" 
        className="flex mt-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => navigate("/adduser")}
      >
        Add User
      </button>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead
                  className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr>
                    <th scope="col" className="px-6 py-4">First Name</th>
                    <th scope="col" className="px-6 py-4">Last Name</th>
                    <th scope="col" className="px-6 py-4">Email</th>
                    <th scope="col" className="px-6 py-4">Address</th>
                    <th scope="col" className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers?.map((item) => (
                    <tr
                      className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                      key={item.id}
                    >
                      <td className="whitespace-nowrap px-6 py-4">{item.fname}</td>
                      <td className="whitespace-nowrap px-6 py-4">{item.lname}</td>
                      <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
                      <td className="whitespace-nowrap px-6 py-4">{`${item.address}, ${item.city}, ${item.state}, ${item.pincode}`}</td>
                      <td className="whitespace-nowrap px-6 py-4 flex">
                        <button 
                          type="button" 
                          className="flex mx-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          onClick={() => navigate(`/edit/${item.id}`)}
                        >
                          Edit
                        </button>
                        <button 
                          type="button" 
                          className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          onClick={() => handleRemove(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
