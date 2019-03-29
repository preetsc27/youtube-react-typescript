import React, { Component } from 'react'

interface ITodoProps{
    title: string
    checked: boolean
    date?: string
}

export default class Todo extends Component<ITodoProps, any> {
  render() {
    return (
      <div>
        {this.props.title}<br />
        {this.props.checked.toString()}
        {this.props.date}
      </div>
    )
  }
}
