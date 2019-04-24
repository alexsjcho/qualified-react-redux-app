import React from 'react'

export default class Question extends React.PureComponent {
  render () {
    const { settings, question, index, sectionId } = this.props
    return (
      <>
        {settings.type === 'radio' && <span>radio input</span>}
        {settings.type === 'select' && <span>select input</span>}
        {settings.type === 'date' && <span>date input</span>}
      </>
    )
  }
}
