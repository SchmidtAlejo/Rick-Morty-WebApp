import React from 'react'
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function DropdownFilter({ filterName, updateFilter}) {
  return (
    <DropdownButton id="dropdown-basic-button" title={filterName}>
      <Dropdown.Item onClick={()=>updateFilter('', '', 'No filter')}>No filter</Dropdown.Item>
      <Dropdown.Item onClick={()=>updateFilter('status', 'alive', 'Alive')}>Alive</Dropdown.Item>
      <Dropdown.Item onClick={()=>updateFilter('status', 'dead', 'Dead')}>Dead</Dropdown.Item>
      <Dropdown.Item onClick={()=>updateFilter('status', 'unknown', 'Status unknown')}>Status unknown</Dropdown.Item>
      <Dropdown.Item onClick={()=>updateFilter('gender', 'female', 'Female')}>Female</Dropdown.Item>
      <Dropdown.Item onClick={()=>updateFilter('gender', 'male', 'Male')}>Male</Dropdown.Item>
      <Dropdown.Item onClick={()=>updateFilter('gender', 'genderless', 'Genderless')}>Genderless </Dropdown.Item>
      <Dropdown.Item onClick={()=>updateFilter('gender', 'unknown', 'Gender Uknown')}>Gender Uknown</Dropdown.Item>
    </DropdownButton> 
  )
}
