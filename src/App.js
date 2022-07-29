import {Fragment, Component} from 'react';
import Header from './components/header/Header';

import './App.css';
// import NotesContainer from './components/body/NotesContainer';

import {getInitialData} from './utils/index';
import NoteList from './components/body/NoteList';
import Search from './components/body/Search';
import AddNotesModal from './components/body/AddNotesModal';

class App extends Component {
  constructor(props){
    super(props);

    // this.tabRef = createRef();

    this.state={
      notes : getInitialData(),
      activeTab : "tabActive",
      openModal : false,
      searchCount : 0,
      notesCount : 0,
      isArchived : true
    }

    this.switchTabHandler = this.switchTabHandler.bind(this);
    this.addToArchive = this.addToArchive.bind(this);
    this.addToUnarchived = this.addToUnarchived.bind(this);
    this.openAddNotesModal = this.openAddNotesModal.bind(this);
    this.addNotes = this.addNotes.bind(this);
    this.closeAddNotesModal = this.closeAddNotesModal.bind(this);
    this.searchNotes = this.searchNotes.bind(this);
    this.deleteNotes = this.deleteNotes.bind(this);
  }

  // componentDidMount(){
  //   console.log('hehe')
  // }

  switchTabHandler(e, toggleTab1, toggleTab2){
    // console.log(e.target.getAttribute('data-tab'));
    const whichTab = e.target.getAttribute('data-tab');
    this.setState({
      activeTab : whichTab
    })
  }

  addNotes({title, text}){
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // const localDateTime = new Date().toLocaleDateString('id-ID', options);
    const localDateTime = new Date().toLocaleString()
    // console.log(title, text)
    this.setState({
      notes : [...this.state.notes, {
        id : +new Date(),
        title,
        body: text,
        archived : false,
        createdAt : localDateTime
      }]
    })
  }



  // open add notes modal method
  openAddNotesModal(){
    // console.log('open add notes modal')
    this.setState({
      openModal : true
    })
    // console.log(this.state.openModal)
  }
  
  // close add notes modal method
  closeAddNotesModal(){
    // console.log('close add notes modal')
    this.setState({
      openModal : false
    })
  }

  // addNotesHandler(note){
  //   console.log('add notes')
  // }

  addToArchive(note){
    console.log(note)
    const noteId = note.getAttribute('id');
    // let data = this.state.notes.filter(n=>{
    //   return n.id === +noteId 
    // });

    let mapped = this.state.notes.map(n=>{
      if(n.id === +noteId){
        n.archived = true;
      }
      return n;
    })
    console.log(mapped)
    // console.log(this.state.notes)

    this.setState({
      notes : mapped
    })

    console.log(this.state.notes)
    console.log(this.state.openModal)
  }

  addToUnarchived(note){
    console.log(note)
    const noteId = note.getAttribute('id');
    // let data = this.state.notes.filter(n=>{
    //   return n.id === +noteId 
    // });

    let mapped = this.state.notes.map(n=>{
      if(n.id === +noteId){
        n.archived = false;
      }
      return n;
    })
    console.log(mapped)
    // console.log(this.state.notes)

    this.setState({
      notes : mapped
    })

    console.log(this.state.notes)
    console.log(this.state.openModal)
  }
  // addToActive(note){
  //   console.log(note)


  // }

  searchNotes(query){
    // console.log(query)
    const searchResult = this.state.notes.filter(n=>{
      return n.title.toLowerCase().includes(query.toLowerCase()) || n.body.toLowerCase().includes(query.toLowerCase())
    })
    console.log(searchResult)
    this.setState({
       notes : searchResult,
    })

    if(query.length === 0 || query === ""){
      this.setState({
        notes : getInitialData(),
      })
    }
  }

  deleteNotes(note){
    const noteId = +note.getAttribute("id");
    const noteFiltered = this.state.notes.filter(n=>{
      return n.id !== noteId;
    })
    this.setState({
      notes : noteFiltered
    })
    console.log(noteFiltered)
    console.log(note)
  }
  render(){
    return(
      <Fragment>
        <Header 
          activeTab={this.state.activeTab}
          switchTabHandler={this.switchTabHandler}
          openAddNotesModal={this.openAddNotesModal}
          />
        <main>
          <Search 
            searchCount={this.state.searchCount}
            searchNotes={this.searchNotes}/>
          <AddNotesModal 
            isOpen={this.state.openModal}
            addNotes ={this.addNotes}
            closeAddNotesModal={this.closeAddNotesModal}
            openAddNotesModal={this.openAddNotesModal}/>
          <NoteList 
            notesCount = {this.state.notesCount}
            activeTab={this.state.activeTab} 
            notes={this.state.notes} 
            deleteNotes = {this.deleteNotes}
            addToArchive={this.addToArchive}
            addToUnarchived={this.addToUnarchived}
            />
        </main>
      </Fragment>
    )
  }
}

export default App;
