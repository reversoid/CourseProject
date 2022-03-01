import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import draftToMarkdown from 'draftjs-to-markdown';
// import FormattedOutput from './FormattedOutput';

export default class RichEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  render() {
    const { editorState } = this.state;
    return (
        <>
            <Editor
            toolbar={{
                options: ['inline', 'list', 'textAlign', 'history'],
            }}
    
            initialEditorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            />
        </>
    )
  }
}
