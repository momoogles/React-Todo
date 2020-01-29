import React, { useState } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import colors from "assets/colors"
import { ACTION_TYPE } from "assets/constant"

const Root = styled.div`
  display: flex;
  flex-direction: row;
`

const Input = styled.input`
  background-color: white;
  border-radius: 4px;
  border: 3px solid ${colors.stroke};
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
`
const SubmitBtn = styled.button`
  background-color: ${colors.highlight};
  color: ${colors.texts.dark};
  border: 3px solid ${colors.stroke};
  margin: 0px 12px;
  padding: 8px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
`
function AddForm({ onAddTask }) {
  const [text, setText] = useState("")
  return (
    <Root>
      <Input type="text" onChange={e => setText(e.target.value)} />
      <SubmitBtn onClick={() => onAddTask(text)}>追加</SubmitBtn>
    </Root>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: text => dispatch({ type: ACTION_TYPE.ADD, text })
  }
}

export default connect(null, mapDispatchToProps)(AddForm)
