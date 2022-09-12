import React from 'react'
import { BiCategory as BiCategoryIcon } from 'react-icons/bi'
import { HiTerminal as HiTerminalIcon } from 'react-icons/hi'
import { ImFirefox as ImFirefoxIcon } from 'react-icons/im'
import {
  AiOutlineAreaChart as AiOutlineAreaChartIcon,
  AiOutlinePoweroff as AiOutlinePoweroffIcon,
} from 'react-icons/ai'
import { BsPieChartFill as BsPieChartFillIcon } from 'react-icons/bs'
import { MdStorage as MdStorageIcon } from 'react-icons/md'
const Polybar = () => {
  return (
    <div className="w-full font-bold bg-gray-800 h-10 flex justify-between px-2 flex-row fixed">
      <div className="flex items-center">
        <BiCategoryIcon color="red" size={'25'} />
        <div className="flex items-center ml-1">
          <button className="bg-green-400 h-8 w-8 flex justify-center items-center ml-1">
            <HiTerminalIcon size={'25'} />
          </button>
          <button className="bg-green-400 h-8 w-8 flex justify-center items-center ml-1">
            <ImFirefoxIcon size={'25'} />
          </button>
          <button className="bg-green-400 h-8 w-8 flex justify-center items-center ml-1">
            <HiTerminalIcon size={'25'} />
          </button>
          <button className="bg-green-400 h-8 w-8 flex justify-center items-center ml-1">
            <HiTerminalIcon size={'25'} />
          </button>
          <button className="bg-green-400 h-8 w-8 flex justify-center items-center ml-1">
            <HiTerminalIcon size={'25'} />
          </button>
        </div>
        <div className="ml-3 flex">
          <button className="flex items-center text-white ml-2">
            <AiOutlineAreaChartIcon size={'25'} />
            <span className="ml-1">50%</span>
          </button>
          <button className="flex items-center text-white ml-2">
            <BsPieChartFillIcon size={'20'} />
            <span className="ml-1">7770 MB</span>
          </button>
          <button className="flex items-center text-white ml-2">
            <MdStorageIcon size={'25'} />
            <span className="ml-1">200.2 GB</span>
          </button>
        </div>
      </div>
      <div className="flex items-center flex-row-reverse text-white ">
        <AiOutlinePoweroffIcon color={'red'} size={'20'} className={'ml-2'} />
        <h3>11:04 PM</h3>
      </div>
    </div>
  )
}

export default Polybar
