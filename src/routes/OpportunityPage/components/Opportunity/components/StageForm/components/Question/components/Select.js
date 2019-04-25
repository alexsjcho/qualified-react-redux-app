import React from "react";
import { Label, Input, FormGroup } from "reactstrap";

export default class Select extends React.PureComponent {
  onSelect = event => {
    const { settings, setProspectsRole } = this.props;
    const role = settings.prospects.roles.find(
      role => role.value === event.target.value
    );
    setProspectsRole(role);
  };

  render() {
    const { questionId } = this.props;
    return (
      <FormGroup>
        return (
        <Label>
          <Input
            type="select"
            name={questionId}
            // checked={userInput.value === prospectsSetting.value}
            // value={prospectsSetting.value}
            onChange={this.onSelect}>
            <option>Individual Contributor</option>
            <option>Manager</option>
            <option>Executive</option>
            <option>CXO</option>
          </Input>
        </Label>
        )
      </FormGroup>
    );
  }
}

//Might not need to add Select component, to make app more simple, because core feature is points based scoring form, the radio buttons are enough to help score the form
