import React, { Component } from 'react';

import FileDrop from 'react-file-drop';

import FileInput from './components/Button/FileInput';
import './App.css';

/**
 * Main app component used to add file via drag and drop or File input button
 */
class App extends Component {

    constructor (props) {
        super (props);
        this.fileReader = new FileReader();
        this.state = {
            fileAdded: false,
            fileText: '',
            fileObjectsCount: 0
        }
    }

    /**
     * Drop or add file via "fileInput" component
     * @param files
     */
    onAfterAddFile (files) {
        this.readFile(files[0]);
    }

    /**
     * Read JSON file as text and send it to objects counter
     * @param file
     * @returns {boolean}
     */
    readFile (file) {
        // check file resolution
        if (file.type !== 'application/json') {
            alert ('Invalid file type! \n Choose another one file');
            return false;
        }

        this.fileReader.onload = function (readeFile) {
            this.jsonObjectsCounter(readeFile.target.result);
        }.bind(this);
        this.fileReader.readAsText(file);
    }

    /**
     * Count only objects if JSON file
     * @param file
     */
    jsonObjectsCounter (file) {
        let objectsCount = 0;
        let jsonObject = null;
        try {
            // JSON parse is supported in IE >= 9
            jsonObject = JSON.parse(file, function (key, value) {
                if ({}.toString.call(value).slice(8, -1) === 'Object') {
                    objectsCount++;
                }
                return value;
            });
        } catch (e) {
            alert ('Неверный формат файла JSON');
        }
        if (jsonObject) {
            this.setState({
                fileAdded: true,
                fileText: file,
                fileObjectsCount: objectsCount
            });
        }
    }

    /**
     * Returns state to default value
     */
    cleanState () {
        this.setState({
            fileAdded: false,
            fileText: '',
            fileObjectsCount: 0
        });
    }

    /**
     * Main render method
     * @returns {*}
     */
    render() {
        return (
            <div className='app'>
                <h1 className='app__title'>Counting the number of objects in JSON file</h1>
                <div className='app__inner'>
                    <div className='app__inner__wrapper'>
                        {
                            !this.state.fileAdded &&
                            <FileDrop onDrop={this.onAfterAddFile.bind(this)}>
                                <p className='app__inner__p'>
                                    Drop here one JSON file <br/>
                                    or use this button
                                </p>
                                <FileInput generalButtonStyle='buttonAddFile' onAfterAddFileHandler={this.onAfterAddFile.bind(this)} />
                            </FileDrop>
                        }
                        {
                            this.state.fileAdded &&
                            <div className='app__inner__wrapper__result'>
                                <h2>Count of objects: {this.state.fileObjectsCount}</h2>
                                <h2>JSON TEXT:</h2>
                                <pre> { this.state.fileText } </pre>
                            </div>
                        }
                    </div>
                </div>
                {
                    this.state.fileAdded &&
                    <div className='button' onClick={this.cleanState.bind(this)}>
                        Add another file
                    </div>
                }
            </div>
        );
    }
}

export default App;
