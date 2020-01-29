import React from "react"
import styled from "styled-components"
import colors from "assets/colors"
import { connect } from "react-redux"

const Root = styled.div`
  color: ${colors.texts.dark};
`

function TaskList({ tasks }) {
  const taskList = () => {
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    )
  }

  return <Root>{taskList()}</Root>
}

const mapStateToProps = state => ({ tasks: state.tasks })

export default connect(mapStateToProps)(TaskList)
