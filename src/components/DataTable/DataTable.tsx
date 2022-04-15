import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { api_routes } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { BookForm } from '../BookForm';
import { useDispatch, useSelector } from 'react-redux';
import { chooseAuthor, chooseCover, chooseIsbn, chooseLength, chooseTitle } from '../../redux/slices/RootSlices';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'isbn_number', headerName: 'ISBN', flex: 1 },
    { field: 'book_title', headerName: 'Book Title', flex: 1.5 },
    { field: 'book_length', headerName: 'Pages', flex: 1 },
    { field: 'author', headerName: 'Author', flex: 1 },
    {field: 'cover_type', headerName: 'Cover', flex: 1}
];

interface gridData {
    data: {
        id?:string
    }
}

export const DataTable = () => {

    let { bookData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel, setSelectionModel] = useState<any>([]);
    

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        api_routes.delete(selectionModel);
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>My Books</h2>

        <DataGrid rows={ bookData } columns={ columns } pageSize={ 5 } checkboxSelection={true} 
        onSelectionModelChange={ (item) => {
            setSelectionModel(item)
        }}/>

        <Button variant='contained' color='default' onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Book {selectionModel}</DialogTitle>
            <DialogContent>
                <DialogContentText>Update Book</DialogContentText>
                    <BookForm id={selectionModel!}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color="primary">Done</Button>
            </DialogActions>
        </Dialog>
            
        </div>
    )
}
