import React from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";

const RoutinePlus = () => {
  return (
    <>
      <div className="routinePlus">
        <div className="routineWrap lg:container pt-5">
          <h2
            className="text-center text-5xl font-bold"
            style={{ borderBottom: "1px solid #333", paddingBottom: "5px" }}
          >
            <AddTaskIcon
              className=""
              style={{ fontSize: "4rem", marginRight: "15px" }}
            />
            Routine+
          </h2>
        </div>
        <div className="userSubjectsForm lg:container">
          {/* form to take subject name and credit hours from students */}
          <div class="bg-white p-6 rounded-lg shadow-md">
          <form>
            <table class="w-full text-left">
              <thead>
                <tr>
                  <th class="text-sm font-medium text-gray-700 p-2 bg-gray-200">Name</th>
                  <th class="text-sm font-medium text-gray-700 p-2 bg-gray-200">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd:bg-gray-100">
                  <td class="p-2 border-t">
                    <input
                      class="w-full p-2 border border-gray-400"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </td>
                  <td class="p-2 border-t">
                    <input
                      class="w-full p-2 border border-gray-400"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-4">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
        
          {/** form ends here */}
        </div>
      </div>
    </>
  );
};

export default RoutinePlus;
