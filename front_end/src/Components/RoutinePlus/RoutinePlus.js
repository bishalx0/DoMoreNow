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
            
          {/** form ends here */}
        </div>
      </div>
    </>
  );
};

export default RoutinePlus;
