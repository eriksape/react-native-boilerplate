/**
 * # deviceReducer.js
 *
 * The reducer for all the actions from the various log states
 */
'use strict'
/**
 * ## Imports
 *
 * InitialState
 */
import InitialState from './clientdeviceInitialState'

/**
 * Device actions to test
 */
 import {
  SET_PLATFORM,
  SET_VERSION
 } from './clientdeviceConstants'

const initialState = new InitialState

/**
 * ## deviceReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function deviceReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state)

  switch (action.type) {

    /**
     * ### set the platform in the state
     *
     */
  case SET_PLATFORM:
    const platform = action.payload
    return state.set('platform', platform)

    /**
     * ### set the version in the state
     *
     */
  case SET_VERSION:
    const version = action.payload
    return state.set('version', version)
  }

  return state
}
