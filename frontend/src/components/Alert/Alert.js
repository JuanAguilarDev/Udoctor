import React from 'react'

import {
    MDBIcon
} from 'mdb-react-ui-kit';

export const Alert = ({text}) => {
  return (
    <p>{text} <MDBIcon fab icon='facebook-f' /> </p>
  )
}
