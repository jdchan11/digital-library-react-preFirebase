import React, { useState, useEffect } from 'react';
import { api_routes } from '../api'

export const useGetData = () => {
    const [bookData, setData] = useState<[]>([]);

    async function handleDataFetch(){
        const result = await api_routes.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])
        return {bookData, getData:handleDataFetch}
}