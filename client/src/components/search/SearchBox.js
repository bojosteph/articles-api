import React from 'react'

const SearchBox = (props) => {
  return (
    <input
    className='form-group'
    type='search'
    placeholder='search articles'
    onChange={props.onSearchChange}
    style={searchStyle}
  />
  )
}

const searchStyle = {
  marginLeft: 'auto',
  marginRight: 'auto', 
  display: 'inline-block',
  border: 'none',
  outline: 'none',
  padding: '10px',
  width: '250px',
  lineHeight: '30px',
  marginBottom: '30px'
}
export default SearchBox



