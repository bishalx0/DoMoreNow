import React from "react";
import { useState } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";

const RoutinePlus = () => {
  const [subject1, setSubject1] =useState("");
  const [subject1credit, setSubject1Credit] = useState("");

  const [subject2, setSubject2] =useState("");
  const [subject2credit, setSubject2Credit] = useState("");

  const [subject3, setSubject3] =useState("");
  const [subject3credit, setSubject3Credit] = useState("");

  const [subject4, setSubject4] =useState("");
  const [subject4credit, setSubject4Credit] = useState("");


  const [subject5, setSubject5] =useState("");
  const [subject5credit, setSubject5Credit] = useState("");

  const [subject6, setSubject6] =useState("");
  const [subject6credit, setSubject6Credit] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8000/todoapi/subject/", {
        method: "POST",
        body: JSON.stringify({
          name:subject1,
          credit:subject1credit,
          // subject2:subject2,
          // subject2credit:subject2credit,
          // subject3:subject3,
          // subject3credit:subject3credit,
          // subject4:subject4,
          // subject4credit:subject4credit,
          // subject5:subject5,
          // subject5credit:subject5credit,
          // subject6:subject6,
          // subject6credit:subject6credit,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setSubject1("");
        setSubject1Credit("");

        // setSubject2("");
        // setSubject2Credit("");

        // setSubject3("");
        // setSubject3Credit("");


        // setSubject4("");
        // setSubject4Credit("");

        // setSubject5("");
        // setSubject5Credit("");


        // setSubject6("");
        // setSubject6Credit("");

        console.log("data submitted successfully");

        // setMessage("User created successfully");
      } else {
        console.log("error ecountered");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
          <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="text-sm font-medium text-gray-700 p-2 bg-gray-200">Subject Name</th>
                  <th className="text-sm font-medium text-gray-700 p-2 bg-gray-200">Credit</th>
                </tr>
              </thead>
              <tbody>
                {/**subject 1 name and credits */}
                <tr className="odd:bg-gray-100">
                  <td className="p-2 border-t">
                    <input
                      className="w-full p-2 border border-gray-400"
                      type="text"
                      placeholder="subject 1"
                      name="subject1"
                      onChange={ (e)=>setSubject1(e.target.value) }
                    />
                  </td>
                  <td className="p-2 border-t">
                    <input
                      className="w-full p-2 border border-gray-400"
                      type="number"
                      placeholder="Total Credit"
                      name="subject1Credit"
                      onChange={ (e)=>setSubject1Credit(e.target.value) }
                    />
                  </td>
                </tr>
                {/**subject 1 ends here */}

                {/**subject 2 starts here */}
                <tr className="odd:bg-gray-100">
                  <td className="p-2 border-t">
                    <input
                      className="w-full p-2 border border-gray-400"
                      type="text"
                      placeholder="subject 2"
                      name="subject2"
                      onChange={ (e)=>setSubject2(e.target.value) }
                    />
                  </td>
                  <td className="p-2 border-t">
                    <input
                      className="w-full p-2 border border-gray-400"
                      type="number"
                      placeholder="Total Credit"
                      name="subject2Credit"
                      onChange={ (e)=>setSubject2Credit(e.target.value) }
                    />
                  </td>
                </tr>
                {/**subject2 ends here */}


                {/**subject 3 starts here */}
                <tr className="odd:bg-gray-100">
                  <td className="p-2 border-t">
                    <input
                      className="w-full p-2 border border-gray-400"
                      type="text"
                      placeholder="subject 3"
                      name="subject3"
                      onChange={ (e)=>setSubject3(e.target.value) }
                    />
                  </td>
                  <td className="p-2 border-t">
                    <input
                      className="w-full p-2 border border-gray-400"
                      type="number"
                      placeholder="Total Credit"
                      name="subject3Credit"
                      onChange={ (e)=>setSubject3Credit(e.target.value) }
                    />
                  </td>
                </tr>
                {/**subject3 ends here */}


                {/**subject 4 starts here */}
                <tr className="odd:bg-gray-100">
                  <td className="p-2 border-t">
                    <input
                      className="w-full p-2 border"
                      type="text"
                      placeholder="subject 4"
                      name="subject4"
                      onChange={ (e)=>setSubject4(e.target.value) }
                    />
                  </td>
                  <td className="p-2 border-t">
                    <input
                      className="w-full p-2 border border-gray-400"
                      type="number"
                      placeholder="Total Credit"
                      name="subject4Credit"
                      onChange={ (e)=>setSubject4Credit(e.target.value) }
                    />
                  </td>
                </tr>
                {/**subject4 ends here */}


                {/**subject 5 starts here */}
                <tr className="odd:bg-gray-100">
                  <td className="p-2 border-t">
                    <input
                      className="w-full p-2 border border-gray-400"
                      type="text"
                      placeholder="subject 5"
                      name="subject5"
                      onChange={ (e)=>setSubject5(e.target.value) }
                    />
                  </td>
                  <td className="p-2 border-t">
                    <input
                      className="w-full p-2 border border-gray-400"
                      type="number"
                      placeholder="Total Credit"
                      name="subject5Credit"
                      onChange={ (e)=>setSubject5Credit(e.target.value) }
                    />
                  </td>
                </tr>
                {/**subject5 ends here */}


                {/**subject 6 starts here */}
                <tr className="odd:bg-gray-100">
                  <td className="p-2 border-t">
                    <input
                      className="w-full p-2 border border-gray-400"
                      type="text"
                      placeholder="subject 6"
                      name="subject6"
                      onChange={ (e)=>setSubject6(e.target.value) }
                    />
                  </td>
                  <td className="p-2 border-t">
                    <input
                      className="w-full p-2 border border-gray-400"
                      type="number"
                      placeholder="Total Credit"
                      name="subject6Credit"
                      onChange={ (e)=>setSubject6Credit(e.target.value) }
                    />
                  </td>
                </tr>
                {/**subject2 ends here */}

              </tbody>
            </table>
            <div class="mt-4">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
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
