/**
 * Checks if an objection is inisde the resoledObjectionsArray
 * @param  {Objection}  objection               The objection to search for
 * @param  {Array<Object>}  resolvedObjectionsArray The resolved objections
 * @return {Boolean}                         Whether the objetion is resolved.
 */
export function isResolvedObjection (objection, resolvedObjectionsArray) {
  const objectionIndex = resolvedObjectionsArray.findIndex(resolvedObjection => {
    return resolvedObjection.stageId === objection.stageId
        && resolvedObjection.sectionId === objection.sectionId
        && resolvedObjection.questionIndex === objection.questionIndex
  })
  return objectionIndex !== -1
}
