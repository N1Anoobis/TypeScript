export type State = {
    username: string
    password: string
    helperText: string
    isError: boolean
    isLogged: boolean
};

export const initialState: State = {
    username: '',
    password: '',
    helperText: '',
    isError: false,
    isLogged: false,
};

type Action = { type: 'setUsername', payload: string }
    | { type: 'setPassword', payload: string }
    | { type: 'loginSuccess', payload: string }
    | { type: 'loginFailed', payload: string }
    | { type: 'setIsError', payload: boolean }
    | { type: 'setIsLogged', payload: boolean }

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setUsername':
            return {
                ...state,
                username: action.payload
            };
        case 'setPassword':
            return {
                ...state,
                password: action.payload
            };
        case 'loginSuccess':
            return {
                ...state,
                isError: false,
                isLogged: true
            };
        case 'loginFailed':
            return {
                ...state,
                helperText: action.payload,
                isError: true
            };
        case 'setIsError':
            return {
                ...state,
                isError: action.payload
            };
        case 'setIsLogged':
            return {
                ...state,
                isLogged: action.payload
            };
    }
}
