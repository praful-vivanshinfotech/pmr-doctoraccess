import { Button, styled } from '@mui/material'
import React from 'react'

const CstButtonStyle = styled(Button)(({ theme }) => ({}))
export const CstButton = (props) => {
  const { children, ...rest } = props
  const customSize = {}
  let buttonStyle = {}
  if (props?.size === 'large') {
    buttonStyle = {
      ...customSize,
      padding: '14px',
    }
  }
  return (
    <CstButtonStyle
      {...rest}
      sx={{
        color: 'white',
        ...buttonStyle,
      }}
    >
      {children}
    </CstButtonStyle>
  )
}
