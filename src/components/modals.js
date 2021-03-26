/** @jsxImportSource @emotion/react */

import * as React from 'react'
import {Dialog, CircleButton} from './lib'
import VisuallyHidden from '@reach/visually-hidden'


const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

const ModalContext = React.createContext()

// Returns a Provider with access to ModalContext
const Modal = (props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return(
    <ModalContext.Provider 
      value={[isOpen, setIsOpen]}
      {...props}
    />
  )
}

// Always opens the Modal
// Calls onClick next if passed
const ModalOpenButton = ({ children: child }) => {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.OnClick)
  })
}

function ModalDismissButton({children: child}) {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  })
}

// Gives us the Reach popup with 
// onClose context to ModalContext
const ModalContentsBase = (props) => {
  const [isOpen, setIsOpen] = React.useContext(ModalContext)
  return (
    <Dialog 
      isOpen={isOpen} 
      onDismiss={() => setIsOpen(false)} 
      {...props} 
    />
  )
}

const ModalContents = ({title, children, ...props}) => {
  return(
    <ModalContentsBase {...props}>
      <div css={{display: 'flex', justifyContent: 'flex-end'}}>
        <ModalDismissButton>
          <CircleButton>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </CircleButton>
        </ModalDismissButton>
      </div>
      <h3 css={{textAlign: 'center', fontSize: '2em'}}>{title}</h3>
      {children}
    </ModalContentsBase>
  )
}

export {Modal, ModalDismissButton, ModalOpenButton, ModalContents}
