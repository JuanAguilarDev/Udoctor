import { useState } from 'react';

export const useForm = (initialState = { }) => {
    
    const [formState, setFormState] = useState( initialState );

    const reset = () => {
        setFormState(initialState);
    }

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState, 
            [name]: value
        });
    }

    const onSetValue = ({target}) => {
        let { name, value } = target;
        value = formState[name];
        return value;
    }
  
    return {
        ...formState, 
        formState,   
        onInputChange,
        reset,
        onSetValue
    }
}
