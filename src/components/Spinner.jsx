import React from 'react'
import ClipLoader  from 'react-spinners/ClipLoader'

const override = {
    display:'bolck',
    margin: '100px auto'
}

const Spinner = ({ loading }) => {
  return (
    <ClipLoader 
    color='#1cc7a4' 
    loading={loading}
    cssOverride={override}
    size={150}
    />
  )
}

export default Spinner