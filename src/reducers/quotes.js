export default (state = [], action) => {
  let index
  let stateClone = [...state]
  let newObj
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0,index), ...state.slice(index+1)]
    case "UPVOTE_QUOTE":
      index = stateClone.findIndex(quote => quote.id === action.quoteId)
      newObj = Object.assign({}, stateClone[index], stateClone[index].votes += 1)
      stateClone.splice(index, 1, newObj)
      return [...stateClone]
    case "DOWNVOTE_QUOTE":
      index = stateClone.findIndex(quote => quote.id === action.quoteId)
      if (stateClone[index].votes < 1) return [...stateClone]
      newObj = Object.assign({}, stateClone[index], stateClone[index].votes -= 1)
      stateClone.splice(index, 1, newObj)
      return [...stateClone]
    default:
      return state;
  }
}
