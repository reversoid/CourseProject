import React from 'react'
import ReactMarkdown from 'react-markdown'
export default function FormattedOutput(props){
  return(
    <ReactMarkdown>{props.text}</ReactMarkdown>
  )
}