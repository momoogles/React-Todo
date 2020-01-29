import { ACTION_TYPE } from "assets/constant"

const initialState = {
  tasks: [
    { id: "xx1", text: "洗濯" },
    { id: "xx2", text: "掃除" }
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD:
      //id生成わからないっ！
      const newTask = {
        id: new Date().getTime().toString(16),
        text: action.text
      }
      return {
        ...state,
        tasks: state.tasks.concat(newTask)
      }
    case ACTION_TYPE.EDIT:
      return console.log(action.payload)
    case ACTION_TYPE.DELETE:
      return console.log(action.payload)
    case ACTION_TYPE.END:
      return console.log(action.payload)
    case ACTION_TYPE.UP:
      return console.log(action.payload)
    default: {
      return state
    }
  }
}

export default rootReducer
