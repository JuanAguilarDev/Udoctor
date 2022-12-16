import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    
    const initialState = {
        data: null,
        isLoading: true,
        hasError: null
    }; 

    const [state, setState] = useState(initialState);

    const getFetch = async () => {
        setState({
            ...state, 
            isLoading: true
        });

        const reponse = await fetch(url);
        const data = await reponse.json();
        
        setState({
            data,
            isLoading: false,
            hasError: null
        });
    }

    useEffect(() => {
        getFetch();
    }, [url]);
  
    return {
            ...state
    }
    
}
