import React from 'react';
import classes from './SortingPanel.module.css'
import Notes from "../../store/notes";
import {observer} from "mobx-react-lite";
const SortingPanel = observer(() => {
    return (
        <div className={classes.sortingPanel}>
            <input type="text" placeholder={'Поиск...'} onChange={event => Notes.changeSearchQuery(event.target.value)} value={Notes.searchQuery} />
            <select onChange={event => Notes.changeSelectedCategory(event.target.value)} value={Notes.selectedCategory}>
                <option value="all">Все</option>
                {Notes.categories.map(category => <option key={category} value={category}>{category}</option>)}
            </select>
        </div>
    );
});

export default SortingPanel;