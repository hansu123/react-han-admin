import { SET_SIGNINFO } from "../../actionType"
export function changeSignInfoAction(value) {
  return {
      type: SET_SIGNINFO,
      value
  }
}