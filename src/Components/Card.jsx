// import React from "react";
// import { useState } from "react";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// const Component1 = () => {
//   const [users, setUsers] = useState([
//     { id: 1, wirite: "Open", text: [{ name: "Task 1" }] },
//     { id: 2, wirite: "Pending", text: [{ name: "Task 2" }] },
//     { id: 3, wirite: "Inproge", text: [{ name: "Task 3" }] },
//     { id: 4, wirite: "Progress", text: [{ name: "Task 4" }] },
//   ]);

//   const [active, setActive] = useState(false);
//   const [name, setTitel] = useState("");
//   const [information, setInformation] = useState("");
//   const [editItem, setEditItem] = useState("");
//   const [editItem2, setEditItem2] = useState("");

//   const saveBtn = () => {
//     let payload = { name };
//     if (information !== "") {
//       users[information].text.push(payload);
//     } else {
//       users[editItem].text[editItem2].name = name;
//     }
//     setUsers([...users]);
//     setActive(false);
//   };

//   const deleteItems = (item, index, instend) => {
//     item.text.splice(instend, 1);
//     setUsers([...users]);
//   };

//   const modeEdit = (index, index2) => {
//     setEditItem(index);
//     setEditItem2(index2);
//     setActive(true);
//   };

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {users.map((item, index) => {
//           return (
//             <div className="col-md-3" key={index}>
//               <div className="card">
//                 <div className="card-header">
//                   <h1 className="text-center">{item.wirite}</h1>
//                 </div>
//                 {item.text.map((event, instend) => {
//                   return (
//                     <div key={instend} className="card-body">
//                       <span>{event.name}</span>
//                       <button
//                         onClick={() => modeEdit(index, instend)}
//                         className="btn btn-info mx-4"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className="btn btn-danger mx-1"
//                         onClick={() => deleteItems(item, index, instend)}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   );
//                 })}
//                 <div className="card-footer">
//                   <button
//                     className="btn btn-success"
//                     onClick={() => setActive(true)}
//                   >
//                     Add User
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <Modal isOpen={active} toggle={() => setActive(false)}>
//         <ModalHeader>
//           <h1>Add User</h1>
//         </ModalHeader>
//         <ModalBody>
//           <input
//             onChange={(event) => setTitel(event.target.value)}
//             className="form-control"
//             type="text"
//             placeholder="Titel"
//           />
//           <select
//             className="form-control mt-2"
//             onChange={(event) => setInformation(event.target.value)}
//           >
//             <option value="" hidden>
//               Select your table
//             </option>
//             {users.map((item, index) => {
//               return (
//                 <option key={index} value={index}>
//                   {item.wirite}
//                 </option>
//               );
//             })}
//           </select>
//         </ModalBody>
//         <ModalFooter>
//           <button className="btn btn-info" onClick={saveBtn}>
//             Save
//           </button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };

// export default Component1;

import React from "react";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Component1 = () => {
  const [users, setUsers] = useState([
    { id: 1, wirite: "Open", text: [{ name: "Task 1" }] },
    { id: 2, wirite: "Pending", text: [{ name: "Task 2" }] },
    { id: 3, wirite: "Inproge", text: [{ name: "Task 3" }] },
    { id: 4, wirite: "Progress", text: [{ name: "Task 4" }] },
  ]);
  const [inputValue, setInputVAlue] = useState("");
  const [check, setCheck] = useState(false);
  const [active, setActive] = useState(false);
  const [name, setTitel] = useState("");
  const [information, setInformation] = useState("");
  const [editItem, setEditItem] = useState("");
  const [editItem2, setEditItem2] = useState("");

  const deleteItems = (item, index, instend) => {
    item.text.splice(instend, 1);
    setUsers([...users]);
  };

  const modeEdit = (index, index2, value) => {
    setEditItem(index);
    setEditItem2(index2);
    setActive(true);
    setCheck(true);
    setInputVAlue(value.name);
  };
  const saveBtn = () => {
    if (check === true) {
      setCheck(false);
      let num = information - 1;
      let payload = { name };
      users.forEach((v, i) => {
        if (i == editItem) {
          users[editItem].text.splice(editItem2, 1);
          setUsers([...users]);
        }
        if (information == i) {
          v.text.push({ ...payload });
          setUsers([...users]);
        }
      });
    } else {
      let payload = { name };
      if (information !== "") {
        users[information].text.push(payload);
      } else {
        users[editItem].text[editItem2].name = name;
      }
      setUsers([...users]);
      setActive(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {users.map((item, index) => {
          return (
            <div className="col-md-3" key={index}>
              <div className="card">
                <div className="card-header">
                  <h1 className="text-center">{item.wirite}</h1>
                </div>
                {item.text.map((event, instend) => {
                  return (
                    <div key={instend} className="card-body">
                      <span>{event.name}</span>
                      <button
                        onClick={() => modeEdit(index, instend, event)}
                        className="btn btn-info mx-4"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={() => deleteItems(item, index, instend)}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
                <div className="card-footer">
                  <button
                    className="btn btn-success"
                    onClick={() => setActive(true)}
                  >
                    Add User
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Modal isOpen={active} toggle={() => setActive(false)}>
        <ModalHeader>
          <h1>Add User</h1>
        </ModalHeader>
        <ModalBody>
          <input
            onChange={(event) => setTitel(event.target.value)}
            className="form-control"
            type="text"
            defaultValue={inputValue}
            placeholder="Titel"
          />
          <select
            className="form-control mt-2"
            onChange={(event) => setInformation(event.target.value)}
          >
            <option value="" hidden>
              Select your table
            </option>
            {users.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item.wirite}
                </option>
              );
            })}
          </select>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-info" onClick={saveBtn}>
            Save
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Component1;
