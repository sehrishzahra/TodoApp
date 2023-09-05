import { LuClock8 } from "react-icons/lu";
import React from 'react'

function Modal({ displayPopup , setDisplayPopup }) {
    return (
        <div>

            <div
                className={`sm:w-[360px] h-[122px] absolute pt-[15px] transition-700  sm:right-[30px] top-[30px] bg-[#FFFFFF] border rounded-lg shadow-sm shadow-[#F6F5F5] duration-300 right-[5px] max-[400px]:w-[255px] modal ${displayPopup ? "top-[30px]" : "top-[-180px]"} `}
            >
                <div className="flex justify-around mb-[1rem] p-[10px] max-[400px]:px-[10px] items-center">
                    <div className="pr-[10px]">
                        <h3 className="text-[18px] font-bold">Sent the Resume</h3>
                        <p className="text-[16px] text-[#575767] font-normal  max-[400px]:mr-10px ">
                            you have't completed your task yet
                        </p>
                    </div>
                    <div className="max-[400px]:w-[90px] bg-[#FABB18] w-[52px] h-[52px] flex justify-center rounded-lg items-center">
                        <LuClock8 />
                    </div>
                </div>
                <div className=" w-full flex sm:md:h-[38px] bg-[#F6F5F5] justify-end p-[10px] max-[400px]:px-[6px]" style={{ borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px' }}>
                    <button
                        type="button"
                        className="mr-[1rem] w-[24px] text-[12px] font-light tracking-wide"
                        onClick={() => setDisplayPopup(false)}
                    >
                        Skip
                    </button>

                    <button
                        type="button"
                        onClick={() => setDisplayPopup(false)}
                        className="mr-[1rem] w-[92px] text-[#000000] text-[12px] font-normal"
                    >
                        Remind me later
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Modal

