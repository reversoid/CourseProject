import React, { Component } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { markdownToDraft } from 'markdown-draft-js';

export default class RichViewer extends Component {
    constructor(props) {
        super(props)
        const contentState = convertFromRaw(markdownToDraft(this.props.text));
        this.state = {
            editorState: EditorState.createWithContent(contentState)
        }
    }

    render() {
        const { editorState } = this.state;
        return (
            <>
                <Editor
                    toolbarHidden={true}
                    editorState={editorState}
                    readOnly={true}
                />
            </>
        )
    }
}
