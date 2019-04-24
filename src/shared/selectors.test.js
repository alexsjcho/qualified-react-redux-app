import * as selectors from './selectors'
import { fromJS } from 'immutable'

// TODO: Add as many tests for each selector as you can think of.
// That means happy path and edge cases.

describe('Selectors tests', () => {
  it('gets stages id from prop stageId', () => {
    const testProps = { stageId: 'testId' }
    const testState = fromJS({})
    const stageId = selectors.getStageId(testState, testProps)
    expect(stageId).toEqual(testProps.stageId)
  })
})
