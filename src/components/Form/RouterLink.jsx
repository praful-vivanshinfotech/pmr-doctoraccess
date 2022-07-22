import { styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const RLink = styled(Link)(({ theme }) => ({}))
export const RouterLink = (props) => {
  return <RLink {...props}></RLink>
}
