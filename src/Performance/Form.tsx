// import * as React from 'react'

// import { Form } from 'semantic-ui-react'
// import { PerformanceDetailsType } from '../../constants/performance-details-type'

// interface AddPerformanceProps {
//   mode: 'add'
// }
// interface EditPerformanceProps {
//   mode: 'edit'
//   initialState: PerformanceDetailsType
// }

// type PerformanceFormProps = AddPerformanceProps | EditPerformanceProps
// interface PerformanceFormState extends PerformanceDetailsType {
//   pristine: boolean
// }

// const NEW_PERFORMANCE_DETAILS: PerformanceDetailsType = {
//   location: '',
//   date: '',
//   startTime: '', endTime: ''
// }
// export class PerformanceForm extends React.Component<PerformanceFormProps, PerformanceFormState> {
//   constructor(props: PerformanceFormProps) {
//     super(props)

//     if (this.props.mode === 'add') {
//       this.state = { ...NEW_PERFORMANCE_DETAILS, pristine: true }
//     } else {
//       this.state = { ...this.props.initialState, pristine: true }
//     }
//   }

//   onChange = (evt: React.SyntheticEvent<HTMLInputElement>, data: { name: string, value: string }) => {
//     const { name, value } = data
//     const pristine = false

//     if (name === 'location') {
//       this.setState({ location: value, pristine })
//     } else if (name === 'date') {
//       this.setState({ date: value, pristine })
//     } else if (name === 'startTime') {
//       this.setState({ startTime: value, pristine })
//     } else if (name === 'endTime') {
//       this.setState({ endTime: value, pristine })
//     }
    
//   }

//   resetForm = (evt: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>) => {
//     evt.preventDefault()
//     evt.stopPropagation()

//     if (this.props.mode === 'add') {
//       this.setState({ ...NEW_PERFORMANCE_DETAILS, pristine: true })
//     } else {
//       this.setState({ ...this.props.initialState, pristine: true })
//     }
//   }

//   submit = (evt: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>) => {
//     evt.preventDefault()
//     evt.stopPropagation()
//     console.dir(this.state)
//   }

//   get isValid(): boolean {
//     const { location, date, startTime, endTime, pristine } = this.state

//     return !pristine 
//       && location !== ''
//       && date !== ''
//       && startTime !== ''
//       && endTime !== ''
//   }

//   render() {
//     const { mode } = this.props
//     return (
//       <Form onSubmit={this.submit}>
//         <Form.Input
//           name="location"
//           label="Location"
//           onChange={this.onChange}
//           value={this.state.location}
//         />
//         <Form.Input
//           name="date" 
//           label="Date"
//           type="date"
//           onChange={this.onChange}
//           value={this.state.date}
//         />
//         <Form.Group widths="equal">
//           <Form.Input
//             name="startTime"
//             label="Start Time"
//             type="time"
//             onChange={this.onChange}
//             value={this.state.startTime}
//           />
//           <Form.Input
//             name="endTime"
//             label="End Time"
//             type="time"
//             onChange={this.onChange}
//             value={this.state.endTime}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Button 
//             onClick={this.submit} 
//             disabled={!this.isValid}
//             color="blue"
//           >
//             {`${mode === 'add' ? 'Add' : 'Edit'} Performance`}
//           </Form.Button>
//           <Form.Button 
//             onClick={this.resetForm} 
//             basic 
//             color="blue"
//             disabled={!this.state.pristine}
//           >
//             {`${mode === 'add' ? 'Clear' : 'Reset'}`}
//           </Form.Button>
//           <Form.Button
//             basic
//             color="blue"
//           >
//             Cancel
//           </Form.Button>
//         </Form.Group>
//       </Form>
//     )
//   }
// }