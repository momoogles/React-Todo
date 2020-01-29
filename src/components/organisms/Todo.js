import React from "react"
import styled from "styled-components"
import colors from "assets/colors"
import AddForm from "components/molecules/AddForm"
import TaskList from "components/molecules/TaskList"

const Root = styled.div`
  background-color: ${colors.sub};
  min-width: calc(100% - 80px);
  padding: 24px;
  margin: 12px;
  border-radius: 8px;
  box-shadow: 0 0 8px ${colors.stroke};

  @media (min-width: 992px) {
    min-width: 500px;
  }
`

function Todo() {
  return (
    <Root>
      <AddForm />
      <TaskList />
    </Root>
  )
}

export default Todo
