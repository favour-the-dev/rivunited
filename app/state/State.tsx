import {create} from 'zustand';

interface AppStateProps{
    loading: boolean,
    setLoading: (loading: boolean)=> void;
}

export const AppState = create<AppStateProps>((set)=>({
    loading: false,
    setLoading: (loading) => set(()=> ({loading: loading})),  // update Loading state
}))

