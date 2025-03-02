import React, { useEffect, useState } from 'react'
import { data, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AdminLogin() {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState("password");
  const [isLogedIn, setLogedIn] = useState(false)


  function handleSubmit(e) {
    e.preventDefault();
    //  console.log(username, password);

    let loginData = { "name": "Neha Desai", "username": data.username, "usertype": "admin" }

    if (username.toLowerCase() === "admin" && password.toLowerCase() === "admin") {

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });

      localStorage.setItem("data", JSON.stringify(loginData));
      setLogedIn(true);
      navigate("/admin")
    } else {
      //alert("Invalid Credential")

      Swal.fire({
        title: "Invalid Credential !",
        icon: "error",
        draggable: true
      });

      setUsername("")
      setPassword("")
    }
  }

  useEffect(() => {
    if (localStorage.getItem("data") == null) {
      setLogedIn(true);
      // alert("Hello")
    } else {
      navigate("/admin")
      // setLogedIn(false);
    }
  }, [])


  // --------------------------------------------------------------------------------------

  return (
    <>
      <div class="container d-flex justify-content-center align-items-center h-100 my-5">
        <div class="card p-4 shadow" style={{ width: "35rem" }}>
          <div class="text-center mb-3">
            <a href="#!">
              <img src={require("../../assets/images/trendyLogo.png")} style={{ width: "120px" }} />
            </a>
            {/* <h1>Login</h1> */}
          </div>
          <h2 class="fs-6 fw-normal text-center text-dark mb-4">Sign in to your account</h2>
          {/* <h1 class="text-center mb-4">Login</h1> */}
          <form>
            <div class="mb-4">
              <label for="username" class="form-label">Username</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                class="form-control"
                id="username"
                placeholder="Enter your username"
                style={{ height: "45px", fontSize: "16px" }}
              />
            </div>
            <div class="mb-4">
              <label for="password" class="form-label">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={isVisible}
                class="form-control"
                id="password"
                placeholder="Enter your password"
                style={{ height: "45px", fontSize: "16px" }}
              />
            </div>

            <div class="form-check mb-5">
              {/* <input onChange={() => setIsVisible("text")} class="form-check-input" type="checkbox" value="" name="rememberMe" id="rememberMe" />
              <label class="form-check-label text-secondary" for="rememberMe">
                Show Password
              </label> */}

              <input
                onChange={(e) => setIsVisible(e.target.checked ? "text" : "password")}
                class="form-check-input"
                type="checkbox"
                value=""
                name="rememberMe"
                id="rememberMe"
              />
              <label class="form-check-label text-secondary" for="rememberMe">
                Show Password
              </label>
            </div>

            <div class="d-flex justify-content-center">
              <button
                onClick={handleSubmit}
                type="submit"
                class="btn btn-primary px-5"
                style={{ padding: "10px 50px" }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AdminLogin