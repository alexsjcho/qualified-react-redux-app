import uuid from "uuid";

const SETTINGS_KEY = "settings";
const OPPORTUNITIES_KEY = "opportunities";

export const SUPPORTED_INPUTS = ["radio"];

/**
 * Save the settings state into localStorage
 * @param  {Object} settings The settings object to save
 */
export function saveSettings(settings) {
  console.log("SETTINGS BEING SAVED");
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

/**
 * Get the settings object from localStorage
 * @return {Object} The settings from locaStorage or null if not available
 */
export function getSettings() {
  let settings = window.localStorage.getItem(SETTINGS_KEY);
  return settings ? JSON.parse(settings) : null;
}

/**
 * Insert a new opportunity entry into the database.
 * @param {Object} initialOpportunityValues here too
 * @param {String} initialOpportunityValues.companyName
 *  @param {String} initialOpportunityValues.opportunityName
 * @param {Number} initialOpportunityValues.closeDate,
 * @param {Number} initialOpportunityValues.moneyValue
 * @returns {String} The ID of the new function
 */
export function insertOpportunity(initialOpportunityValues) {
  const opportunityId = uuid();
  let opportunities = getAllOpportunities();
  opportunities.push({ ...initialOpportunityValues, opportunityId });
  window.localStorage.setItem(OPPORTUNITIES_KEY, JSON.stringify(opportunities));
  return opportunityId;
}

/**
 * Loads and opportunity from localStorage
 * @param  {String} opportunityId Identification for the target opportunity
 * @return {Object|null}               The opportunity or null if not found
 */
export function loadOpportunity(opportunityId) {
  let opportunities = getAllOpportunities();
  let opportunity = opportunities.find(function(opportunity) {
    return opportunity.opportunityId === opportunityId;
  });

  return opportunity || null;
}

/**
 * It updates the opportunity at localStorage
 * @param  {Object} opportunity The opportunity to update
 */
function updateOpportunity(opportunity) {
  let opportunities = getAllOpportunities();
  // opportunityIndex will never be -1. Opportunity will always be found in the array
  let opportunityIndex = opportunities.findIndex(function(currOpportunity) {
    return currOpportunity.opportunityId === opportunity.opportunityId;
  });
  opportunities[opportunityIndex] = opportunity;
  window.localStorage.setItem(OPPORTUNITIES_KEY, JSON.stringify(opportunities));
}

/**
 * This function loads all opportunities from localstorage to AllOppDash
 * @param {Object} getAllOpportunities
 * @returns {Array} of all the existing opportunities
 */
export function getAllOpportunities() {
  let opportunities = window.localStorage.getItem(OPPORTUNITIES_KEY) || "[]";
  opportunities = JSON.parse(opportunities);

  return opportunities;
}

/**
 * Deletes an opportunity for the Account AllOppDash
 * @param {Object} loadAllOpportunities
 * @returns {Boolean} Whether the delete was successful or not
 */
export function removeOpportunity() {
  let remainingOpportunities = loadOpportunity();

  return remainingOpportunities;
}

/**
 * This saves one stage of an opportunity into localStorage
 * @param  {String} opportunityId The id of the opportunity
 * @param  {Object} stage         The stage to be saved
 */
export function saveStage(opportunityId, stage) {
  const opportunity = loadOpportunity(opportunityId);
  const stageIndex = opportunity.stages.findIndex(
    currStage => currStage.stageId === stage.stageId
  );
  if (stageIndex === -1) {
    opportunity.currentStage = stage.stageId;
    opportunity.stages.push(stage); // insert a new stage
  } else {
    opportunity.currentStage = stage.stageId;
    opportunity.stages[stageIndex] = stage; // updates an existing stage
  }
  updateOpportunity(opportunity);
}
