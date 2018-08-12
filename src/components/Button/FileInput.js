import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './FileInput.css';

/**
 * Pure component used to add file by button
 */
class FileInput extends PureComponent {
    constructor (props) {
        super(props);
        this.fileInput = React.createRef();
    }

    static propTypes = {
        onAfterAddFileHandler: PropTypes.func.isRequired
    };

    /**
     * Send file to a parent component if it is possible
     */
    onChangeHandler () {
        if (this.props.onAfterAddFileHandler) {
            this.props.onAfterAddFileHandler(this.fileInput.current.files);
        }
    }

    /**
     * Main render method
     * @returns {*}
     */
    render () {
        return (
            <div className={this.props.generalButtonStyle || ''}>
                <input
                    id='buttonFile'
                    type='file'
                    className='buttonFile'
                    ref={this.fileInput}
                    onChange={this.onChangeHandler.bind(this)}
                />
                <label htmlFor='buttonFile'>Choose a file</label>
            </div>
        );
    }
}

export default FileInput;
