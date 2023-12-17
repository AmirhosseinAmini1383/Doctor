import React, { useEffect, useState } from "react";
import TrashIcon from "../../../Images/Icon/trash.png";
import "./Data.css";
import axios from "axios";
import swal from "sweetalert";
const Data = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleDeleteUser = (itemId) => {
    swal({
      title: "حذف رکورد !",
      text: `آیا از حذف رکورد ${itemId} اطمینان دارید؟`,
      icon: "warning",
      buttons: ["خیر", "بله"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://jsonplaceholder.typicode.com/users/${itemId}`)
          .then((res) => {
            if (res.status == 200) {
              const newUsers = Users.filter((user) => user.id != itemId);
              setUsers(newUsers);
              swal("حذف با موفقیت انجام شد", {
                icon: "success",
                buttons: "متوجه شدم",
              });
            } else {
              swal("عملیات با خطا مواجه شد", {
                icon: "error",
                buttons: "متوجه شدم",
              });
            }
          });
      } else {
        swal("شما از حذف رکورد منصرف شدید", {
          icon: "warning",
          buttons: "متوجه شدم",
        });
      }
    });
  };
  return (
    <div>
      <div className="user_context">
        <p className="p-data">:مشخصات افرادی که امروز وقت مشاوره دارند</p>
        {Users.length ? (
          <div className="table_user">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {Users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <img
                        className="icon_table"
                        src={TrashIcon}
                        alt="trash"
                        onClick={() => {
                          handleDeleteUser(user.id);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <p className="waiting">...منتظر بمانید</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Data;
