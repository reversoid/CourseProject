import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import FormattedOutput from './FormattedOutput';


export default class UncontrolledEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange= (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    console.log(draftToMarkdown(convertToRaw(editorState.getCurrentContent())))
    return (
        <>
            <Editor
            toolbar={{
                options: ['inline', 'list', 'textAlign', 'history'],
            }}
            initialEditorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
            />
            {/* <textarea disabled value={}/> */}
            {/* <FormattedOutput text = {draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}/> */}
        </>
    )
  }
}
