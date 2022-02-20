import { Middleware } from "redux"

// console log state and action
export const actionLog : Middleware = (store) => (next) => (action) => {
    console.log("state", store.getState())
    console.log("fire action", action);
    next(action) // action dispatch
    console.log("state updated", store.getState())
}