import * as React from 'react'

import * as moment from 'moment'

import { Form, InputOnChangeData } from 'semantic-ui-react'

export interface AddPerformanceFormData {
  date: string
  startTime: string
  endTime: string
  location: string
}
interface AddPerformanceFormProps {
  addPerformance: (data: AddPerformanceFormData) => void
}
interface AddPerformanceFormState extends AddPerformanceFormData { }
export class AddPerformanceForm extends React.Component<AddPerformanceFormProps, AddPerformanceFormState> {
  constructor(props: AddPerformanceFormProps) {
    super(props)

    this.state = {
      date: '',
      startTime: '18:00',
      endTime: '21:00',
      location: ''
    }
  }

  handleChange = (evt: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) => {
    const { name, value } = data
    switch ( name ) {
      case 'date':
        return this.updateDate(value)
      case 'startTime':
        return this.updateStartTime(value)
      case 'endTime':
        return this.updateEndTime(value)
      case 'location':
        return this.updateLocation(value)
      default:
        return
    }
  }

  get isValid(): boolean {
    const { date, location, startTime, endTime } = this.state
    return date !== '' && location !== '' && startTime !== '' && endTime !== ''
  }

  updateDate(date: string) {
    this.setState({ date })
  }
  updateStartTime(startTime: string) {
    this.setState({ startTime })
  }
  updateEndTime(endTime: string) {
    this.setState({ endTime })
  }
  updateLocation(location: string) {
    this.setState({ location })
  }

  handleSubmit = (evt: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>) => {
    evt.stopPropagation()
    evt.preventDefault()

    const { startTime, endTime, date, location } = this.state
    const data: AddPerformanceFormData = {
      date: this._formateDate(date),
      startTime: this._formatTime(startTime),
      endTime: this._formatTime(endTime),
      location
    }
    this.props.addPerformance(data)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          type="date"
          name="date"
          label="Date"
          onChange={this.handleChange}
          value={this.state.date}
          min="2018-03-31"
        />
        <Form.Input 
          type="text"
          name="location"
          label="Location"
          onChange={this.handleChange}
          value={this.state.location}
        />
        <Form.Group widths="equal">
          <Form.Input 
            type="time"
            name="startTime"
            label="Start time"
            onChange={this.handleChange}
            value={this.state.startTime}
          />
          <Form.Input 
            type="time"
            name="endTime"
            label="End time"
            onChange={this.handleChange}
            value={this.state.endTime}
          />
        </Form.Group>
        <Form.Group>
          <Form.Button
            color="blue"
            disabled={!this.isValid}
            onClick={this.handleSubmit}
          >
            Add Performance
          </Form.Button>
          <Form.Button basic color="blue">
            Reset
          </Form.Button>
        </Form.Group>
      </Form>
    )
  }

  private _formatTime(time: string): string {
    let hh = parseInt(time.split(':')[0], 10)
    if (hh >= 13) {
      hh -= 12
    } 

    return hh.toString(10) + ':00'
  }

  private _formateDate(date: string): string {
    return moment(date).format('dddd, M/D')
  }
}