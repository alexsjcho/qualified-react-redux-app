import * as selectors from './selectors'
import { fromJS } from 'immutable'
import settings from '../store/reducers/settings/settings.json'

const state = fromJS({ settings, opportunity: {}, allOppDash: {} })

describe('Selectors tests', () => {
  it('Gets all questions worth 10 points', () => {
    const testProps = { targetPoints: 10 }
    const optionsValues = selectors.getOptionsValuesByPoints(state, testProps)
    expect(optionsValues).toBeDefined()
    expect(optionsValues.constructor).toBe(Array)
    expect(optionsValues.length).toEqual(21)
    expect(optionsValues).toContain('Champions, they are manager level, have some influence in buying decision, but not main buying decision maker')
  })

  it('Gets all questions worth 5 points', () => {
    const testProps = { targetPoints: 5 }
    const optionsValues = selectors.getOptionsValuesByPoints(state, testProps)
    expect(optionsValues).toBeDefined()
    expect(optionsValues.constructor).toBe(Array)
    expect(optionsValues.length).toEqual(17)
    expect(optionsValues).toContain('less than $500')
  })

  it('Gets custom question worth 13 points', () => {
    const newOption = { value: 'A test option', points: 13 }
    const nextState = state.setIn(['settings', 'stages', 1, 'sections', 0, 'questions', 0, 'options', 0], fromJS(newOption))
    const testProps = { targetPoints: 13 }
    const optionsValues = selectors.getOptionsValuesByPoints(state, testProps)
    expect(optionsValues).toBeDefined()
    expect(optionsValues.constructor).toBe(Array)
    expect(optionsValues.length).toEqual(1)
    expect(optionsValues).toContain(newOption.value)
  })

  it('Can get multiple options with the same points value on the same question', () => {
    const newOption = { value: 'A test option', points: 20 }
    const nextState = state.setIn(['settings', 'stages', 1, 'sections', 0, 'questions', 0, 'options', 0], fromJS(newOption))
    const testProps = { targetPoints: 20 }
    const optionsValues = selectors.getOptionsValuesByPoints(state, testProps)
    expect(optionsValues).toBeDefined()
    expect(optionsValues.constructor).toBe(Array)
    expect(optionsValues.length).toEqual(18)
    expect(optionsValues).toContain(newOption.value)
  })
})
