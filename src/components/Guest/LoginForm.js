/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'
import {Input, Button, Spinner, FormGroup} from '../lib'
import React from 'react'
import useAsync from 'hooks/useAsync'
import {client} from 'utils/api-client'
import {login} from 'utils/auth-provider'

const LoginForm = () => {

  const {isLoading, isError, error, run} = useAsync()

  const handleSubmit = (e) => {
    e.preventDefault()

    const {username, password} = e.target.elements
    run(login({ username: username.value, password: password.value }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
      }}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input id="username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </FormGroup>
      <div>
        <Button>
          Login
        </Button>
        {/* {React.cloneElement(
          submitButton,
          {type: 'submit'},
          ...(Array.isArray(submitButton.props.children)
            ? submitButton.props.children
            : [submitButton.props.children]),
          isLoading ? <Spinner css={{marginLeft: 5}} /> : null,
        )} */}
      </div>
      {/* {isError ? <ErrorMessage error={error} /> : null} */}
    </form>
  )
}

export default LoginForm
