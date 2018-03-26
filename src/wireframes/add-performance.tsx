import * as React from 'react'

export const AddPerformance = (): JSX.Element => {
  return (
    <form>
      <h2>Add Performance</h2>
      <label>Location</label>
      <input type="text" placeholder="location"/>
      <br />
      <label>Date</label>
      <input type="date" />
      <br />
      <label>Start time</label><input type="time" />
      <br />
      <label>End time</label><input type="time" />
      <button>Add Performance</button>
    </form>
  )
}