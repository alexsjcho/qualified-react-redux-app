import React from 'react'
import { Progress, Badge } from 'reactstrap'

export default class QualifiedScore extends React.PureComponent {
  progressBarColor (stage, maxPossibleStageScore) {
    let score = stage.score
    let maxScore = maxPossibleStageScore
    let percent = Math.round((score / maxScore) * 100)

    if (percent <= 0.1) {
      return 'danger'
    } else if (percent <= 0.5) {
      return 'primary'
    }
  }

  render () {
    const { stageSettings, maxPossibleStageScore, stage = {}, resolvedObjectionsScore } = this.props

    const max = maxPossibleStageScore - resolvedObjectionsScore
    const value = (stage.score || 0) - resolvedObjectionsScore

    return (
      <div>
        <h3 className='text-center'>
          <Badge color='primary'>{stageSettings.stageLabel} Stage Score</Badge>
        </h3>
        <Progress
          color={this.progressBarColor(stage, maxPossibleStageScore)}
          value={value}
          max={max}>
          {value} of {max}
        </Progress>
      </div>
    )
  }
}
