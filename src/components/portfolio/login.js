import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../../services/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/portfolio/portfolio`)
    }

    return (
      <>
       <div className="columns is-centered">
        <h1 className="title">Log in</h1>
       </div>
       <div className="columns is-centered">
          <div className="column is-4">
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/portfolio/portfolio`)
          }}
        >
          <div class="field">
  <label class="label"> Username</label>
  <div class="control">
  <input className="input" type="text" name="username" onChange={this.handleUpdate} />
  </div>
</div>
<div class="field">
  <label class="label">Password</label>
  <div class="control">
  <input className="input"
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
  </div>
</div>
          
<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" type="submit">Login</button>
  </div>
  </div>
         
        </form>
        </div>
        </div>
      
      </>
    )
  }
}

export default Login