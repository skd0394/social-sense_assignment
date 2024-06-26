import Preview from '@/components/Frame1/preview';
import SideBar from '@/components/Frame1/sidebar';
import ThemeSelector from '@/components/Frame1/themeSelector';
import { Button } from '@/components/ui/button';
import React from 'react'

const Frame1 = () => {
  return (
    <>
      <div className="flex flex-wrap">
        {/* Sidebar for medium and larger screens */}
        <div className="hidden sm:block sm:w-1/5 border-2 h-screen">
          <SideBar />
        </div>
        <div className="w-full sm:w-4/5 border-2 px-4 sm:px-7 py-2 flex flex-col gap-4">
          <div className="flex w-full h-fit justify-between items-center">
            <p className="text-base font-semibold">Themes</p>
            <div className="bg-slate-300 flex gap-2 p-2 items-center justify-center rounded-md">
              <p>Shivkant Dubey</p>
              <div className="w-6 h-6 rounded-full bg-slate-500"></div>
            </div>
          </div>
          <div className="rounded-lg w-full border-2 h-16 px-4 sm:px-6 flex justify-between items-center">
            <p className="text-sm font-light sm:text-base sm:font-medium ">
              Apply a skin to your profile
            </p>
            <div className="flex gap-2">
              <button className="text-sm sm:text-normal border border-gray-400 text-gray-700 rounded-md px-1 py-1 sm:px-3 sm:py-1 hover:bg-gray-100">
                + Custom
              </button>
              <button className="text-sm sm:text-base bg-blue-500 text-white rounded-md px-1 py-1 sm:px-3 py-1 hover:bg-blue-600">
                Save
              </button>
            </div>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full sm:w-1/3">
              <ThemeSelector />
            </div>
            <div className="w-full sm:w-2/3 h-full">
              <Preview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frame1