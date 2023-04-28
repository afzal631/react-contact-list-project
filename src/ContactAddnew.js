import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Email } from "@mui/icons-material";

function ContactAddnew() {
  const [id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [val, setVal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Name, Phone, email);
    const submit = () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        Name: Name,
        Phone_no: Phone,
        Email_id: email,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://contact-ward.onrender.com/users", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // alert("Added successfully.");
          window.confirm("Added successfully.");
          window.location.reload();
        })
        .catch((error) => console.log("error", error));
    };
    submit();
    setName("");
    setPhone("");
    setEmail("");
  };
  return (
    <div
      className="container"
      style={{ textAlign: "center", marginTop: "2rem" }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          display: "inline-flex",
          backgroundColor: "#cbe4fad1",
          boxShadow: "3px 3px grey",
          borderRadius: "1rem",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          style={{ margin: "5px", width: "300px", backgroundColor: "white" }}
          label="ID"
          variant="filled"
          value={id}
          disabled="disabled"
          // onChange={(e) => setName(e.target.value)}
        />
        <TextField
          style={{ margin: "5px", width: "300px", backgroundColor: "white" }}
          label="Name"
          variant="filled"
          required
          value={Name}
          onMouseDown={(e) => setVal(true)}
          onChange={(e) => setName(e.target.value)}
        />
        {/* {Name.length == 0 && val && (
          <span style={{ color: "red" }}>Enter the name</span>
        )} */}
        <TextField
          style={{ margin: "5px", width: "300px", backgroundColor: "white" }}
          label="Phone Number"
          variant="filled"
          required
          value={Phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {/* {Phone.length === 0 && (
          <span style={{ color: "red" }}>Enter the Phone Number</span>
        )} */}
        <TextField
          style={{ margin: "5px", width: "300px", backgroundColor: "white" }}
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* {Email.length === 0 && (
          <span style={{ color: "red" }}>Enter the Email_id</span>
        )} */}
        {/* <TextField
          style={{ margin: "5px", width: "300px", backgroundColor: "white" }}
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        <div>
          <Button variant="contained" style={{ marginRight: "1rem" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Cancel
            </Link>
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            // style={{ margin: "2rem" }}
          >
            Add User
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactAddnew;
