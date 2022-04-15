import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseIsbn, chooseTitle, chooseLength, chooseAuthor, chooseCover } from '../../redux/slices/RootSlices';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { api_routes } from '../../api';

interface BookFormProps {
    id?: string;
    data?:{}
}

interface BookState {
    isbn_number: string;
    book_title: string;
    book_length: string;
    author: string;
    cover_type: string;
}

export const BookForm = (props: BookFormProps) => {
    const dispatch = useDispatch();
    const store = useStore();
    const isbn_number = useSelector<BookState>(state => state.isbn_number);
    const {register, handleSubmit} = useForm({ })

    const onSubmit = (data:any, event:any) => {
        if(props.id!){
            api_routes.update(props.id!, data);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseIsbn(data.isbn_number));
            dispatch(chooseTitle(data.book_title));
            dispatch(chooseLength(data.book_length));
            dispatch(chooseAuthor(data.author));
            dispatch(chooseCover(data.cover_type));
            api_routes.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="isbn_number">ISBN</label>
                    <Input {...register('isbn_number')} name="isbn_number" placeholder='ISBN Number'/>
                </div>
                <div>
                    <label htmlFor="book_title">Book Title</label>
                    <Input {...register('book_title')} name="book_title" placeholder='Book Title'/>
                </div>
                <div>
                    <label htmlFor="book_length">Number of Pages</label>
                    <Input {...register('book_length')} name="book_length" placeholder='Number of Pages'/>
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <Input {...register('author')} name="author" placeholder='Author'/>
                </div>
                <div>
                    <label htmlFor="cover_type">Cover</label>
                    <Input {...register('cover_type')} name="cover_type" placeholder='Type of Cover'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}