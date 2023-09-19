import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

function Admin() {
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const history = useHistory()
  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (

    
    <div >
        <div class="container-fluid">
  <div class="row">
  <div class="col-md-4">
    <a href="/create">  <button>
Blog Post
</button></a>
  </div>

  <div class="col-md-4">
  <a href="/additems">  <button>
Add Item to Store
</button></a>
  </div>
  <div class="col-md-4">
    <button onClick={logout}>
Logout
</button>

      </div>
  </div>
  
  </div>
</div>

  );
}

export default Admin;