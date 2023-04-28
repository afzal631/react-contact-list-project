import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ContactDetails() {
  const { id } = useParams();

  const [empdeta, setEmpdeta] = useState({});

  useEffect(() => {
    fetch("https://contact-ward.onrender.com/users/" + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpdeta(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        // textAlignLast: "center",
      }}
    >
      <Box
        sx={{
          paddingTop: "3rem",
          width: "66rem",
          //   height: "66rem",
          //   backgroundColor: "primary.dark",
          "&:hover": {
            // backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <div>
          {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

          <div className="container">
            <div className="card row" style={{ textAlign: "center" }}>
              <div className="card-title">
                <h2>Employee Details</h2>
              </div>
              <div className="card-body"></div>

              {empdeta && (
                <div>
                  <h2>
                    Employee name : <br></br>
                    <h4 style={{ padding: "0", margin: "0" }}>
                      {empdeta.Name}
                    </h4>{" "}
                    ({empdeta.id})
                  </h2>
                  <h3>Contact Details</h3>
                  <h5>Email is : {empdeta.Email_id}</h5>
                  <h5>Phone is : {empdeta.Phone_no}</h5>
                  <Link className="btn btn-danger" to="/">
                    Back to Listing
                  </Link>
                </div>
              )}
            </div>
          </div>
          {/* </div>
            </div> */}
        </div>
      </Box>
    </div>
  );
}

export default ContactDetails;
