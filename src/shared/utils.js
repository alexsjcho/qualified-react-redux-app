const SETTINGS_KEY = 'settings'

/**
 * Save the settings state into localStorage
 * @param  {Object} settings The settings object to save
 */
export function saveSettings (settings) {
  console.log('SETTINGS BEING SAVED')
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
}

/**
 * Get the settings object from localStorage
 * @return {Object} The settings from locaStorage or null if not available
 */
export function getSettings () {
  let settings = window.localStorage.getItem(SETTINGS_KEY)
  return settings ? JSON.parse(settings) : null
}
