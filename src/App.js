import './App.css';
import NoteList from "./components/NoteList";
import SortingPanel from "./components/SortingPanel/SortingPanel";
function App() {
    return (
        <div className="App">
            <SortingPanel/>
            <NoteList/>
        </div>
    );
}

export default App;
