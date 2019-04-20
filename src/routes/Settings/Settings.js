import React from 'react'
import Stage from './components/Stage'

export default class Settings extends React.PureComponent {
  render () {
    const { stage } = this.props
    return (
      <Stage stage={stage} />
    )
  }
}
