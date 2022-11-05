import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';

import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
    entries: Entry[];
}

interface Props {
    children: JSX.Element;
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        _id: uuidv4(),
        description: 'Probando datos',
        status: 'pending',
        createdAt: Date.now(),
    ],
}

export const EntriesProvider:FC<Props> = ({ children }) => {

const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

return (
        <EntriesContext.Provider value={{
            entries: []
        }}>
            { children }
        </EntriesContext.Provider>
    )
}