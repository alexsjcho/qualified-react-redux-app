import React from "react";
import Stage from "./components/Stage";
import { saveSettings } from "../../shared/utils";
import AppNavBar from "../../shared/components/AppNavBar";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

export default class Settings extends React.PureComponent {
  componentDidUpdate(prevProps) {
    const {
      settings,
      totalScore,
      updateStageScore,
      stage: { stageId }
    } = this.props;
    if (prevProps.totalScore !== totalScore) {
      updateStageScore(stageId, totalScore);
    } else if (prevProps.settings !== settings) {
      saveSettings(settings);
    }
  }

  render() {
    const { stage, submitStage, totalScore } = this.props;
    return (
      <Container>
        <AppNavBar />
        <Badge style={{ marginTop: "25px", fontSize: "13px" }} variant="info">
          Total Possible Score: {totalScore}
        </Badge>

        <Stage stage={stage} submitStage={submitStage} />
      </Container>
    );
  }
}
