

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faArrowRightFromBracket,
  faChartLine,
  faCheckDouble,
  faClockRotateLeft,
  faGear,
  faTableColumns,
  faCircle,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleQuestion,
  faEnvelope,
  faRectangleList,
} from "@fortawesome/free-regular-svg-icons";

export default async function Task() {
    const response = await axios.get("http://localhost:3001");
  return (
    <>
      <div className="hidden md:block ">
        <h2 className="text-blue-600 flex items-start ">
          <FontAwesomeIcon
            icon={faCircle}
            style={{ width: "1.25rem", marginRight: "0.375rem" }}
          />{" "}
          To Do
        </h2>
        <div className="lg:h-[60%] md:h-[80%] overflow-y-auto p-2 scrollbar-track-transparent  scrollbar-thumb-blue-500 scrollbar-thin">
          {response.data.map((res, int) => {
            return (
              <div
                key={int}
                className="hover:bg-blue-800 hover:text-white rounded-lg"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                }}
              >
                <div className="mt-2 p-2">
                  <div className="text-xs  text-gray-400 flex justify-between items-center">
                    <p>{res.subject}</p>
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      style={{ width: "1.25rem" }}
                    />
                  </div>
                  <h3>{res.task}</h3>
                  <div className="text-xs mt-2">
                    <p>{res.status}</p>
                    <p>{res.duedate}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden md:block ">
        <h2 className="text-red-600 flex items-start ">
          <FontAwesomeIcon
            icon={faCircle}
            style={{ width: "1.25rem", marginRight: "0.375rem" }}
          />{" "}
          Review
        </h2>
        <div className="lg:h-[60%] md:h-[80%] overflow-y-auto p-2 scrollbar-track-transparent  scrollbar-thumb-red-500 scrollbar-thin">
          {response.data.map((res, int) => {
            return (
              <div
                key={int}
                className="hover:bg-red-800 hover:text-white rounded-lg"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                }}
              >
                <div className="mt-2 p-2">
                  <div className="text-xs text-gray-400 flex justify-between items-center">
                    <p>{res.subject}</p>
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      style={{ width: "1.25rem" }}
                    />
                  </div>
                  <h3>{res.task}</h3>
                  <div className="text-xs mt-2">
                    <p>{res.status}</p>
                    <p>{res.duedate}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden md:block ">
        <h2 className="text-green-600 flex items-start ">
          <FontAwesomeIcon
            icon={faCircle}
            style={{ width: "1.25rem", marginRight: "0.375rem" }}
          />{" "}
          Completed
        </h2>
        <div className="lg:h-[60%] md:h-[80%] overflow-y-auto p-2 scrollbar-track-transparent  scrollbar-thumb-green-500 scrollbar-thin">
          {response.data.map((res, int) => {
            return (
              <div
                key={int}
                className="hover:bg-green-800 hover:text-white rounded-lg"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                }}
              >
                <div className="mt-2 p-2">
                  <div className="text-xs text-gray-400 flex justify-between items-center">
                    <p>{res.subject}</p>
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      style={{ width: "1.25rem" }}
                    />
                  </div>
                  <h3>{res.task}</h3>
                  <div className="text-xs mt-2">
                    <p>{res.status}</p>
                    <p>{res.duedate}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden md:block ">
        <h2 className="text-yellow-600 flex items-start ">
          <FontAwesomeIcon
            icon={faCircle}
            style={{ width: "1.25rem", marginRight: "0.375rem" }}
          />{" "}
          Events
        </h2>
        <div className="lg:h-[60%] md:h-[80%] rounded-lg border-2 overflow-y-auto p-2 scrollbar-track-transparent  scrollbar-thumb-green-500 scrollbar-thin">
          
        </div>
      </div>
    </>
  );
}
