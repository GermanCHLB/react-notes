import {makeAutoObservable} from "mobx";

class Notes {
    notes = [
        {id: 1, text: 'Купить хлеб', category: 'Без категории', isEditing: false},
    ]

    searchQuery = '';
    selectedCategory = 'all';


    constructor() {
        makeAutoObservable(this)
    }

    get categories() {
        const categoriesList = []
        for (const note of this.notes) {
            const category = note.category ? note.category : 'Без категории'
            if (!categoriesList.includes(category) ) {
                categoriesList.push(category);
            }
        }
        return categoriesList;
    }

    get sortedAndSearchedNotes() {
        return this.notes
            .filter(note => note.category === this.selectedCategory || this.selectedCategory === 'all')
            .filter(note => note.text.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }

    addNote() {
        this.notes.push({id: Date.now(), text: '', category: '', isEditing: true});
    }

    removeNote(note) {
        this.notes = this.notes.filter(n => n.id !== note.id);
    }

    toggleNote(note) {
        note.isEditing = !note.isEditing;
    }

    changeNote(note, text) {
        note.text = text;
    }

    changeNoteCategory(note, category) {
        note.category = category;
    }

    changeSelectedCategory(category) {
        this.selectedCategory = category;
    }

    changeSearchQuery(searchQuery) {
        this.searchQuery = searchQuery;
    }
}

export default new Notes();