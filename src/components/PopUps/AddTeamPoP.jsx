import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
const AddTeamPoP = ({ onClose }) => {
    const [teamName, setTeamName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [role, setRole] = useState('');

    const handleSendInvite = () => {
 
        setTeamName('');
        setEmailAddress('');
        setMobileNumber('');
        setRole('');
        
      };
    
  return (
    <div>
         <div
      className="w-full  min-w-full h-full min-h-[100vh] bg-black absolute z-[9999] flex left-0 top-0 bg-opacity-30 " 
    >
      <div className="py-12 bg-white shadow-md w-[500px] h-auto  mx-auto self-center rounded-lg bg-opactiy-10  px-12 flex flex-col justify-center gap-2 relative">
      <h3 className="text-xl font-semibold mb-4">Add Team</h3>
            <input
              type="text"
              placeholder="Team Name"
              className="bg-gray-200  rounded-md w-full  p-2 border-none"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-200  rounded-md w-full  p-2 border-none"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="bg-gray-200  rounded-md w-full  p-2 border-none"              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <select
className="bg-gray-200  rounded-md w-full  p-2 border-none"              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Role</option>
              <option value="Admin">Admin</option>
              <option value="Member">Member</option>
            </select>
            <div className="flex justify-end">
            <button
              className="bg-[#0052cc] w-[140px] mt-4  text-white px-4 py-2 rounded-xl text-sm font-bold"
              onClick={handleSendInvite}
            >
              Send Invite
            </button>
            </div>
           
            <button
                    className='h-6 w-6 text-[#2e3e4b] absolute right-4 top-4'
                   onClick={onClose}
                >
                <RxCross2 />
                </button>
        </div>
      </div>
    </div>
   
  )
}

export default AddTeamPoP