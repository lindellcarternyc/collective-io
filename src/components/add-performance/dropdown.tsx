import * as React from 'react'

import { FormField, Dropdown } from 'semantic-ui-react'

import { locationOptions } from './constants'

interface LocationDropdownProps {
  value: string
  handleChange: (location: string) => void
}
export const LocationDropdown = (props: LocationDropdownProps): JSX.Element => {
  const onChange = (evt: React.SyntheticEvent<HTMLInputElement>, data: { value: string }) => {
    props.handleChange(data.value)
  }
  return (
    <FormField>
      <label>Location</label>
      <Dropdown
        fluid
        options={locationOptions} 
        selection 
        placeholder="Pick a location" 
        onChange={onChange}
        value={props.value}
      />
    </FormField>
  )
}