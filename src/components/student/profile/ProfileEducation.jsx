import React from 'react'

const ProfileEducation = () => {
  return (
    <div>
        <div className="flex flex-col w-[400px]">
            <label className="mb-4 text-lg font-bold">School</label>
            <input type="text" name="firstName" placeholder="Enter your school name" className="bg-gray-200 text-[#171717] placeholder-[#171717] rounded px-3 py-2 border-none" />
        </div>
        <div className="flex flex-col w-1/2 pt-12">
            <label className="mb-4 text-lg font-bold">Description</label>
            <textarea name="address" placeholder="Enter description" className="bg-gray-200 text-[#171717] placeholder-[#171717] rounded px-3 py-2 border-none"></textarea>
        </div>
        <div className="flex flex-col w-[400px] pt-12">
            <label className="mb-4 text-lg font-bold">Degree</label>
            <input type="text" name="firstName" placeholder="degree" className="bg-gray-200 text-[#171717] placeholder-[#171717] rounded px-3 py-2 border-none" />
        </div>
        <div className="flex flex-col md:flex-row pt-12 gap-4">
                <div className="flex flex-col w-[436px]">
                    <label className="mb-1 text-lg font-bold">Start Date</label>
                    <input type="text" name="firstName" placeholder="Enter your first name" className="bg-gray-200 text-[#171717] placeholder-[#171717] rounded px-3 py-2 border-none" />
                </div>
                <div className="flex flex-col w-[436px]">
                    <label className="mb-1 text-lg font-bold">End Date (or expected)</label>
                    <input type="text" name="lastName" placeholder="Enter your last name" className="bg-gray-200 text-[#171717] placeholder-[#171717] rounded px-3 py-2 border-none" />
                </div>
        </div>
    </div>
  )
}

export default ProfileEducation