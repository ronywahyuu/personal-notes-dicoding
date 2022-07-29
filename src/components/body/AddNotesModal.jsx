import React from 'react'
import "../styles/body.css";

class AddNotesModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            color: '#fff',
            archived: false,
            id: Date.now(),
            charactersLeft: 50
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    onTitleChange(e){
        this.setState({
            // title: e.target.value,
            title: e.target.value.slice(0, 49),
            charactersLeft: 50 - e.target.value.length
        })
    }

    onTextChange(e){
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.charactersLeft)
        if(this.state.title === "" || this.state.text === "") {
            alert('Please fill in all fields')
            // console.log('cannot add note')
            return false;
        }
        this.props.addNotes(this.state);

        this.setState({
            title: '',
            text: '',
            charactersLeft: 50
        })

        this.closeModal();
    }


    closeModal(e) {
        this.props.closeAddNotesModal();
    }

    render() {
        const hiddenClass = this.props.isOpen ? '' : 'hidden'; // default value is false
        return(
            <>
                <div className={`overlay ${hiddenClass}`}></div>
                <form action="" className={`add-form ${hiddenClass}`} onSubmit={this.handleSubmit}>
                    <div className="add-form__title">
                        <p>Add Notes</p>
                        <div className="close-button">
                            <i className="bx bx-x" onClick={this.closeModal}></i>
                        </div>
                    </div>
                    <div className="add-form__body">
                        <div className="form-input">
                            <div className="form-input__block">
                                {
                                    this.state.charactersLeft === 0 ? 
                                    <span className="form-alert">
                                        You have reached the maximum number of characters
                                    </span> :  ""
                                }
                                <div className="form-input__title">
                                    <label htmlFor="">Title</label>
                                    <span className="form-input__title--length">Characters Left: {this.state.charactersLeft}</span>
                                </div>
                                <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChange}  required/>
                            </div>
                            <div className="form-input__block">
                                <label htmlFor="">Notes</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Write your notes here..." value={this.state.text} onChange={this.onTextChange} required></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="add-form_submit">
                        <button className="add-form__button" type="submit" onClick={this.handleSubmit}>Add</button>
                    </div>
                </form>
            </>
        )
    }
}

export default AddNotesModal