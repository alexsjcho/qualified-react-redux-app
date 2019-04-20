import React from 'react'
import Stage from './components/Stage'
import { saveSettings } from '../../shared/utils'

export default class Settings extends React.PureComponent {

  componentDidUpdate (prevProps) {
    const { settings } = this.props
    if (prevProps.settings !== settings) {
      saveSettings(settings)
    }
  }

  render () {
    const { stage, submitStage } = this.props
    return (
      <Stage stage={stage} submitStage={submitStage} />
    )
  }
}
