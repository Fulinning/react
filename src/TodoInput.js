import React from 'react';
import './TodoInput.css'

function submit(props, e) {
  if (e.key === 'Enter') {
    if (e.target.value.trim() !== '') {
      props.onSubmit(e)
    }
  }
}
export default function (props) {
  return <input type="text" value={props.content}
    className="TodoInput"
    onChange={props.onChange}
    onKeyPress={submit.bind(null, props)} />
}
