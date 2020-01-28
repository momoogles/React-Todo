import React from "react"
import styled from "styled-components"
import colors from "assets/colors"

const Root = styled.div`
  margin: 12px;

  @media (min-width: 992px) {
    padding: 24px;
  }
`
const Guide = styled.p`
  color: ${colors.texts.dim};
`

function TodoList() {
  return (
    <Root>
      <h2>Docs</h2>
      <Guide>
        ReactベースのTodoリストです。Redux と Typescript と Styled
        Componentsを採用しています。最低限のCRUDが実装されています。
      </Guide>
    </Root>
  )
}

export default TodoList
