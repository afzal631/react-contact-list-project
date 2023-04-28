// import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
// import { makeStyles } from "@mui/material";

function Conatct_Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  //   GET METHOD
  useEffect(() => {
    const fetchData = () => {
      fetch("https://contact-ward.onrender.com/users")
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.log("error", error));
    };
    fetchData();
  }, []);
  //   GET METHOD END
  // console.log(data);
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  const LoadRead = (id) => {
    navigate("/employee/read/" + id);
  };
  const Delete = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("https://contact-ward.onrender.com/users/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h2
        style={{
          fontFamily: "cursive",
          color: "burlywood",
          margin: "2rem",
        }}
      >
        You're Contact List
      </h2>
      <div className="container" style={{ width: "90%", margin: "auto" }}>
        <Button
          variant="contained"
          size="large"
          style={{
            display: "flex",
            backgroundColor: " #rgb(180 140 255)",
            // marginBottom: "2rem",
            margin: "1rem auto",
            borderRadius: "1rem",
          }}
        >
          <Link
            to="/Add-new"
            style={{
              textDecoration: "none",
              fontFamily: " cursive",
              color: "white",
            }}
          >
            Add new contact
          </Link>
        </Button>
        <TableContainer
          style={{
            border: "2px solid #8080802b",
            borderRadius: "5px",
            backgroundColor: "white",
            // boxShadow: "5px 10px #8582826b",
          }}
        >
          <Table sx={{ minWidth: 290 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    fontFamily: "system-ui",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "system-ui",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  User Name
                </TableCell>
                {/* <TableCell align="right"></TableCell> */}
                <TableCell
                  align="right"
                  style={{
                    fontFamily: "system-ui",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  phone Number&nbsp;
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontFamily: "system-ui",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Email&nbsp;
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontFamily: "system-ui",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Actions&nbsp;
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((datas) => (
                <TableRow key={datas.id}>
                  <TableCell
                    style={{
                      fontFamily: "cursive",
                    }}
                    component="th"
                    scope="row"
                  >
                    {datas.id}
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily: "cursive",
                    }}
                    component="th"
                    scope="row"
                  >
                    {datas.Name}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontFamily: "cursive",
                    }}
                  >
                    {datas.Phone_no}
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily: "cursive",
                    }}
                    align="right"
                  >
                    {datas.Email_id}
                  </TableCell>
                  <TableCell align="right">
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button
                        onClick={() => {
                          LoadEdit(datas.id);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => {
                          LoadRead(datas.id);
                        }}
                      >
                        Read
                      </Button>
                      <Button
                        onClick={() => {
                          Delete(datas.id);
                        }}
                        style={{ color: "red" }}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                  {/* <TableCell align="right">chalo</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <footer>
        @Tip : This website is just an project, Please do not add your personal
        details also delete the information added by clicking on DELETE option.
      </footer>
    </div>
  );
}

export default Conatct_Home;
