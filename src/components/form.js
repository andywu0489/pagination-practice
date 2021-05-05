import React, {useState} from 'react'

export default function Form() {

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}

const [errorMessage, setErrorMessage] = useState('')

const [form, setForm] = useState(
  {
    username: '',
    password: ''
  }
)

const checkLength = () => {
    if (form.password.length < 8) {
        setErrorMessage('Password needs to be 8 characters or more!')
    } else {
        setErrorMessage('')
    }
}

const handleSubmit = (e) => {
  e.preventDefault()
    checkLength()
}

  return (
    <form onSubmit={handleSubmit}>
    <label>
      Username:
    <input
    value={form.username}
    name='username'
    onChange={handleChange}
    >
    </input>
    </label>
    <label>
      Password:
    <input
    value={form.password}
    name='password'
    type='password'
    onChange={handleChange}
    >
    </input>
    </label>

    <button>Submit</button>
    <p>{errorMessage}</p>
    </form>
  );
}