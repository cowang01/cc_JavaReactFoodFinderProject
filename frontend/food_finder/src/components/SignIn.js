import React from 'react'

const SignIn = (props) => {

const handleSubmit = (event) =>{
  event.preventDefault()

  {/* Check once DB set up */}
  const id = {
  "id": event.target.id.value
}
  props.handleSignIn(id);

}


  return (

    <div className="sign-in-form">
    <form onSubmit={handleSubmit}>
    <input type="number" placeholder="Please enter your user id" name="id" required/>
    <button type="submit">Sign in</button>
    </form>
    </div>

  )
}

export default SignIn