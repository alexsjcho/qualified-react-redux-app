import React from 'react'
import { Label, Input, FormGroup } from 'reactstrap'

export default class Radio extends React.PureComponent {

  onChange = (event) => {
    const { settings, setQuestionValue } = this.props
    const option = settings.options.find(option => option.value === event.target.value)
    setQuestionValue(option)
  }

  render () {
    const { settings, questionId, required, userInput } = this.props
    return (
      <FormGroup>
        {settings.options.map((optionSetting, index) => {
          return (
            <Label key={`${questionId}-${index}`} check style={{display: 'block'}}>
              <Input
                type="radio"
                name={questionId}
                checked={userInput.value === optionSetting.value}
                value={optionSetting.value}
                onChange={this.onChange}
                required={required}
              />
              {optionSetting.value}
            </Label>
          )
        })}
      </FormGroup>

    )
  }
}
