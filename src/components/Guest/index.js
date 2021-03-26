/** @jsxImportSource @emotion/react */
import React from 'react'
import LoginForm from './LoginForm'
import {Modal, ModalContents, ModalOpenButton} from '../modals'
import {Button} from '../lib'


const GuestApp = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gridGap: '0.75rem',
        }}
      >
        <Modal>
          <ModalOpenButton>
            <Button variant="primary">Login</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Login form" title="Login">
            <LoginForm/>
          </ModalContents>
        </Modal>
        <Modal></Modal>
      </div>
    </div>
  )
}

export default GuestApp
