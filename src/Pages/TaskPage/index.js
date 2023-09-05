import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FcAlarmClock } from "react-icons/fc";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { LuClock8 } from "react-icons/lu";
import { MdOutlineSubject } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import Modal from "../../Components/Modal";

function TaskPage() {
  const arr = [
    {
      id: 1,
      summary: "Submit my Resume",
      description: "",
      date: "today 17: pm",
    },
    {
      id: 2,
      summary: "Go to Market",
      description: "",
      date: "Tommorow 10:00 PM ",
    },
    {
      id: 3,
      summary: "Complete a test",
      description: "",
      date: "24 Feb 15:00 pm",
    },
    {
      id: 4,
      summary: "Buy a Chocolate for Mom",
      description: "",
      date: "24 Feb 17:00 pm",
    },
    {
      id: 5,
      summary: "Facetime with dad",
      description: "",
      date: "24 Feb 19PM ",
    },
  ];

  const arr2 = [
    {
      id: 1,
      summary: "Respond to mail",
      description: "",
      date: "24 Feb 17:00 pm",
    },
    {
      id: 2,
      summary: "Rechedule weekly meeting",
      description: "",
      date: "24 Feb 19PM ",
    },
    {
      id: 3,
      summary: "Service my bike",
      description: "",
      date: "24 Feb 17:00 pm",
    },
    {
      id: 4,
      summary: "Recheck the agreement document",
      description: "",
      date: "24 Feb 19PM ",
    },
    {
      id: 5,
      summary: "check the latest on community",
      description: "",
      date: "24 Feb 19PM ",
    },
  ];

  const [isTaskButton, setIsTaskButton] = useState(true);
  const [isLocButton, setIsLocButton] = useState(false);
  const [isTaskForm, setIsTaskForm] = useState(false);

  const [items, setItems] = useState(arr);
  const [summary, setSummary] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(arr2);
  const [displayPopup, setDisplayPopup] = useState(false);

  const addTask = (e) => {
    e.preventDefault();
    let obj = {
      id: items.length + 1,
      summary: summary,
      description: desc,
      date: date,
    };
    console.log(obj);
    items.push(obj);
    setItems([...items]);
    setIsTaskForm(false);
  };

  const TaskCompleted = (id) => {
    const find = items.find((task) => {
      return task.id === id;
    });
  
    completed.push(find);
    setCompleted([...completed]);

    const remain = items.filter((task) => {
      return task.id !== id;
    });
    setItems(remain);
  };


  const undoTask = (itemId , itemSummary  , itemDesc , itemDate) => {

    let obj =   {
      id: itemId,
      summary: itemSummary ,
      description: itemDesc,
      date: itemDate
    }

    items.push(obj);
    setItems([...items]);

    const remain = completed.filter((t) => {
      return t.id !== itemId;
    });
    setCompleted(remain);
  }

  return (
    // ---------------left side -----------------------
    <div className=" h-[720px] relative" style={{overflowX: 'clip'}}>

      <div className=" md:h-[100%] md:fixed md:pt-[40px] top-[0] left-[0] flex justify-between md:flex-col">

        <div className="flex md:gap-[12px] justify-start md:flex-col w-[100%] ">
          <button
            className={`md:w-[250px] w-[150px] h-[55px] flex items-center justify-start gap-[10px] md:gap-[20px] font-medium text-[18px] max-[769px]:items-center max-[769px]:w-[200px] max-[769px]:text-center max-[769px]:rounded-tl-[25px] md:rounded-tr-[25px] rounded-br-[25px] max-[769px]:justify-center
                     ${
                      isTaskButton
                        ? "text-white bg-[#000000]"
                        : "text-[#000000] bg-white"
                    }`}
            onClick={() => {
              setIsTaskButton(true);
              setIsLocButton(false);
            }}
          >
            <HiOutlineClipboardList className="md:ml-[40px]" />
            Task
          </button>
          <button
            className={`md:w-[250px] w-[150px] h-[55px] flex items-center justify-start gap-[10px] md:gap-[20px] font-medium text-[18px] max-[769px]:items-center max-[769px]:w-[200px] max-[769px]:text-center max-[769px]:rounded-tl-[25px] md:rounded-tr-[25px] rounded-br-[25px] max-[769px]:justify-center
                    ${
                      isLocButton
                        ? "text-white bg-[#000000]"
                        : "text-[#000000] bg-white"
                    }`}
            onClick={() => {
              setIsLocButton(true);
              setIsTaskButton(false);
            }}
          >
            <SlLocationPin className="md:ml-[40px]" />
            Location
          </button>
        </div>
        <div className="">
          <Link
            className="md:m-[10px] p-[20px] flex items-center justify-start gap-[20px] font-medium invisible sm:visible"
            to={"/"}
          >
            <FiLogOut />
            Logout
          </Link>
        </div>
      </div>

      {/* ----------------------right side ----------task bar ----------------------- */}

      {isTaskButton ? (
        <div className=" h-[100%] md:fixed pt-[35px] top-[0] right-[0] px-[10px] py-[20px] lg:fixed lg:right-[350px] xl:right-[500px] sm:right-[100px] sm:flex flex-col">
          <div className=" flex items-center font-bold text-[18px] text-[#575767] mb-[10px]">
            <BiPlus />
            <button className="" onClick= { () =>
                setIsTaskForm(true) }>
              Add new Task
            </button>
          </div>
          <div
            className="flex flex-col justify-between"
            style={{
              overflowY: "scroll",
              scrollBehavior: "smooth",
              height: "-webkit-fill-available",
            }}
          >
            <div
              className="w-[342px] pb-[10px] "
              style={{ height: "max-content" }}
            >
              <h3 className="text-[#575767] font-bold mb-[10px] text-[18px]">
                Incomplete
              </h3>

              {items.map((item) => (
                <div className="flex task gap-[16px] mb-[1rem]" key={item.id}>
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    onClick={() => {
                      TaskCompleted(item.id);
                      setDisplayPopup(true);

                    }}
                    className="w-4 mt-[7px] h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-black "
                  />

                  <div className="flex flex-col w-[302px] h-[fitContent] ">
                    <h3> {item.summary}</h3>
                    <p className=" text-[15px]">{item.description}</p>
                    <div className="flex items-center">
                      <FcAlarmClock className="mr-[5px]" />
                      <p className=" text-[#B9B9BE] font-semibold text[14px]">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-[20px]">
              <h3 className="text-[#575767] font-bold mb-[20px] text-[18px]">
                Completed
              </h3>
              {completed.map((item) => (
                <div className="flex task gap-[16px]" key={item.id}>
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value= 'true'
                    onChange={() => undoTask(item.id , item.summary , item.desc , item.date)}
                    defaultChecked
                    className=" accent-black w-4 mt-[7px] h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  focus:ring-2 "
                  />

                  <div className=" w-[302px] h-[45px] ">
                    <h3 className="text-[#B9B9BE] text-[18px]">
                      {/* {" "} */}
                      {item.summary}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[100%] md:fixed pt-[35px] top-[0] right-[0] px-[10px] py-[20px] lg:fixed lg:right-[350px] xl:right-[500px] sm:right-[100px] sm:flex flex-col">
          <button className=" flex items-center font-bold text-[18px] text-[#575767] mb-[10px]">
            + Check In
          </button>
          <h3 className="text-[#575767] font-bold mb-[10px] text-[18px]">
            Current Location
          </h3>

          <div
            className="flex flex-col "
            style={{
              overflowY: "scroll",
              scrollBehavior: "smooth",
              height: "-webkit-fill-available",
            }}
          >
            <div className="w-[342px] h-[371px]">
              <div className="flex gap-[16px]">
                <div className=""> 📍</div>
                <div className="flex flex-col ">
                  <p className="text-[18px] text-[#575767]">
                    Pustegränd, Stockholm, SE
                  </p>
                  <p className="text-[#575767] text-[14px]">
                    59.3293° N, 18.0686° E{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-[20px]">
              <h3 className="text-[#575767] font-bold mb-[10px] text-[18px]">
                Previous Location
              </h3>
              <div className="flex  gap-[16px]">
                <div className=""> 📍</div>
                <div className="flex flex-col ">
                  <p className="text-[18px] text-[#575767]">
                    Halsingegätan, Stockholm, SE
                  </p>
                  <p className="text-[#575767] text-[14px]">
                    59.3293° N, 18.0686° E{" "}
                  </p>
                </div>
              </div>
              <div className="flex  gap-[16px]">
                <div className=""> 📍</div>
                <div className="flex flex-col ">
                  <p className="text-[18px] text-[#575767]">
                    Halsingegätan, Stockholm, SE
                  </p>
                  <p className="text-[#575767] text-[14px]">
                    59.3293° N, 18.0686° E{" "}
                  </p>
                </div>
              </div>
              <div className="flex  gap-[16px]">
                <div className=""> 📍</div>
                <div className="flex flex-col ">
                  <p className="text-[18px] text-[#575767]">
                    Halsingegätan, Stockholm, SE
                  </p>
                  <p className="text-[#575767] text-[14px]">
                    59.3293° N, 18.0686° E{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-[16px]">
                <div className=""> 📍</div>
                <div className="flex flex-col ">
                  <p className="text-[18px] text-[#575767]">
                    Halsingegätan, Stockholm, SE
                  </p>
                  <p className="text-[#575767] text-[14px]">
                    59.3293° N, 18.0686° E{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="">
        <Link
          className="w-[70%] p-[20px] text-black flex items-center justify-start rounded-lg gap-[20px] font-medium m-[20px] sm:invisible"
          to={"/"}
        >
          <FiLogOut />
          Logout
        </Link>
      </div>

      <Modal  displayPopup ={displayPopup} setDisplayPopup ={setDisplayPopup}/>
      <CreateTask
        isTaskForm={isTaskForm}
        setIsTaskForm={setIsTaskForm}
        summary={summary}
        setSummary={setSummary}
        desc={desc}
        setDesc={setDesc}
        date={date}
        setDate={setDate}
        addTask={addTask}
      />
      {console.log(displayPopup)}
    </div>
  );
}

export default TaskPage;

function CreateTask({
  isTaskForm,
  setIsTaskForm,
  summary,
  setSummary,
  desc,
  setDesc,
  date,
  setDate,
  addTask,
}) {
  return (
    <div
      className={`flex justify-center fixed items-center h-[100%] top-[0] left-[0] w-[100%]
         ${isTaskForm ? "" : "hidden"}`}
      style={{
        zIndex: "9999",
        overflow: "auto",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="w-[765px] h-[501px] border relative bg-white sm:md:p-[30px] rounded-md max-[435px]:P-[10PX] max-[435px]:w-[380px] m-[10px]">
        <h2 className="font-semibold text-[20px] pb-[20px] max-[640px]:text-center max-[640px]:mt-[20px]">New Task</h2>

        <form
          action=""
          className="flex m-[10px] flex-col gap-[10px] p-[10px] m-[10px]  max-[435px]:w-[360px] max-[390px]:w-[230px]"
          onSubmit={addTask}
        >
          <div className="flex items-start gap-[12px] p-[10px] ">
            <BiMessageRoundedDetail className="w-[20px] h-[20px] text-[#575767] " />
            <input
              type="text"
              placeholder="Summary"
              name="summary"
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className=" text-[16px] text-black focus:outline-none"
            />
          </div>
          <hr className="h-[1px] text-gray-200 " />

          <div className="flex items-start gap-[12px] p-[10px]  ">
            <MdOutlineSubject className="w-[20px] h-[20px] text-[#575767] " />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="3"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Description"
              className="text-[16px] focus:outline-none text-black"
            ></textarea>
          </div>
          <hr className="h-[1px] text-gray-200 " />

          <div className="flex items-start gap-[12px]  p-[10px] ">
            <LuClock8 className="w-[20px] h-[20px] text-[#575767] " />
            <input
              type="text"
              placeholder="Duedate"
              name="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-[16px] focus:outline-none text-black "
            />
          </div>
          <hr className="h-[1px] text-gray-200" />

          <div className="flex flex-col items-center gap-[10px] p-[10px]">
            <button
              className="w-[348px] h-[51px] text-white bg-[#000000]  max-[460px]:w-[200px] "
              style={{ borderRadius: "25px 25px 25px 25px", fontSize: "18px" }}
              type="submit"
            >
              Save
            </button>
            <button
              className="w-[250px] h-[55px] text-black "
              style={{ borderRadius: "25px 25px 25px 25px", fontSize: "18px" }}
              type="button"
              onClick={() => setIsTaskForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
