import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import { markdownToDraft } from 'markdown-draft-js';


export default class RichEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  onEditorStateChange = (editorState) => {
    this.props.setText(draftToMarkdown(convertToRaw(editorState.getCurrentContent())))
    this.setState({
      editorState
    });
    // this.props.setText(editorState)
  };
  // onEditorStateChange2 = (editorState) => {
  //   console.log(draftToMarkdown(markdownToDraft(this.props.text))
  // );
    // this.props.setText(editorState)
  // };

  render() {
    const { editorState } = this.state;
    return (
        <>
            <Editor
            toolbar={{
                options: ['inline', 'list', 'textAlign', 'history'],
            }}
            // initialEditorState={editorState}
            editorState = {editorState}
            onEditorStateChange={this.onEditorStateChange}
            />
        </>
    )
  }
}
