import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faArrowRightFromBracket,
  faChartLine,
  faCheckDouble,
  faClockRotateLeft,
  faGear,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleQuestion,
  faEnvelope,
  faRectangleList,
} from "@fortawesome/free-regular-svg-icons";


//file Imports
import Task from "@/components/dashboard/taskInfo/Task";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MultiFileDropzoneUsage from "./fileUpload/fileUpload";

export default async function ChangeContent() {
  return (
    <MaxWidthWrapper>
      <div className="flex w-full box-border pb-4">
        <div className="min-w-44 bg-white px-5 rounded-md min-h-fit mr-2 hidden md:block ">
          <div className="h-full">
            <div className="border-b-2 mb-2 flex flex-col ">
              <a className="py-4 flex items-center">
                <FontAwesomeIcon
                  icon={faTableColumns}
                  style={{ width: "1.25rem", marginRight: "0.375rem" }}
                />
                Dashboard
              </a>
              <a className="py-4 flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ width: "1.25rem", marginRight: "0.375rem" }}
                />
                Emails
              </a>
              <a className="py-4 flex items-center">
                <FontAwesomeIcon
                  icon={faChartLine}
                  style={{ width: "1.25rem", marginRight: "0.375rem" }}
                />
                Activities
              </a>
              <a className="py-4 flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ width: "1.25rem", marginRight: "0.375rem" }}
                />
                Emails
              </a>
            </div>
            <div className="border-b-2 mb-2 flex flex-col mt-5">
              <a className="py-4 flex items-center">
                <FontAwesomeIcon
                  icon={faRectangleList}
                  style={{ width: "1.25rem", marginRight: "0.375rem" }}
                />
                Task
              </a>
              <a className="py-4 flex items-center">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ width: "1.25rem", marginRight: "0.375rem" }}
                />
                Progress
              </a>
              <a className="py-4 flex items-center">
                <FontAwesomeIcon
                  icon={faClockRotateLeft}
                  style={{ width: "1.25rem", marginRight: "0.375rem" }}
                />
                History
              </a>
            </div>
            <div className="mb-2 flex flex-col mt-5">
              <a className="py-4 flex items-center">
                <FontAwesomeIcon
                  icon={faGear}
                  style={{ width: "1.25rem", marginRight: "0.375rem" }}
                />
                Settings
              </a>
              <a className="py-4 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  style={{ width: "1.25rem", marginRight: "0.375rem" }}
                />
                Help
              </a>
              <a className="py-4 flex items-center">
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  style={{ width: "1.25rem", marginRight: "0.375rem" }}
                />
                Log Out
              </a>
            </div>
          </div>
        </div>
        <div className="w-full min-h-fit">
          <div className="bg-white rounded-md h-[40%] px-5 py-4 ">
            <h2 className="font-bold">Simulate Quiz</h2>
            <div className="grid grid-cols-4 ">
              <div>
                <div className="mt-2">
                  <label htmlFor="">Number of Questions</label>
                  <input
                    type="number"
                    className="border-2 border-black rounded-md p-1 ml-2"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="">Kind of Quiz</label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="multipleChoice"
                      className="mr-2 ml-2"
                    />
                    <label htmlFor="multipleChoice">Multiple Choice</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="enumeration"
                      className="mr-2 ml-2"
                    />
                    <label htmlFor="enumeration">Enumeration</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="identification"
                      className="mr-2 ml-2"
                    />
                    <label htmlFor="identification">Identification</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="description"
                      className="mr-2 ml-2"
                    />
                    <label htmlFor="description">Description</label>
                  </div>
                </div>
              </div>

              <div>
                <h3>Select Note</h3>
                <h3>Select File</h3>
              </div>
              <div className="">
                <h3>Upload File</h3>
                <MultiFileDropzoneUsage/>
              </div>
              <div>
                <h3>Time Line of Preparation</h3>
                <div>File Attachment</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md lg:h-[60%] md:h-fit px-5 py-4 mt-2 overflow-hidden">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 justify-between ">
              <form className="w-full mx-auto md:hidden">
                <h1>Select Option</h1>
                <select className=" text-sm rounded-md w-full p-2.5 ">
                  <option value="toDo">To Do</option>
                  <option value="review">Review</option>
                  <option value="completed">Completed</option>
                  <option value="events">Events</option>
                </select>
              </form>
              <Task />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
