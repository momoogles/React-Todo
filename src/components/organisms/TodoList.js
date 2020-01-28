import React from "react"
import styled from "styled-components"
import colors from "assets/colors"
import AddForm from "components/molecules/AddForm"

const Root = styled.div`
  background-color: ${colors.sub};
  min-width: calc(100% - 80px);
  padding: 40px;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0 0 8px ${colors.stroke};

  @media (min-width: 992px) {
    min-width: 500px;
  }
`

function TodoList() {
  return (
    <Root>
      <AddForm />
    </Root>
  )
}

export default TodoList
