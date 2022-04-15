import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        isbn_number: 'ISBN',
        book_title: 'Book Title',
        book_length: 'Pages',
        author: 'Author',
        cover_type: 'Cover'
    },
    reducers: {
        chooseIsbn: (state, action) => {state.isbn_number = action.payload},
        chooseTitle: (state, action) => {state.book_title = action.payload},
        chooseLength: (state, action) => {state.book_length = action.payload},
        chooseAuthor: (state, action) => {state.author = action.payload},
        chooseCover: (state, action) => {state.cover_type = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseIsbn, chooseTitle, chooseLength, chooseAuthor, chooseCover } = rootSlice.actions;