export type State = {
    helperText: string
    isError: boolean
    isLogged: boolean
};

export const initialState: State = {
    helperText: '',
    isError: false,
    isLogged: false,
};

export const LOGIN_SUCCES = 'LOGIN_SUCCES';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOGGED = 'SET_LOGGED';

interface LoginSuccess {
    type: typeof LOGIN_SUCCES,
}

interface LoginFailed {
    type: typeof LOGIN_FAILED
    payload: string
}

interface SetIsError {
    type: typeof SET_ERROR
    payload: boolean
}

interface SetIsLogged {
    type: typeof SET_LOGGED
    payload: boolean
}

type ActionType = LoginSuccess | LoginFailed | SetIsError | SetIsLogged;

export const loginSuccess = (): LoginSuccess => ({
    type: LOGIN_SUCCES,
});

export const loginFailed = (string): LoginFailed => ({
    type: LOGIN_FAILED,
    payload: string
});

export const setIsError = (boolean): SetIsError => ({
    type: SET_ERROR,
    payload: boolean
});

export const setIsLogged = (boolean): SetIsLogged => ({
    type: SET_LOGGED,
    payload: boolean
});

const reducer = (state: State = initialState, action: ActionType): State => {
    switch (action.type) {
        case LOGIN_SUCCES:
            return {
                ...state,
                isError: false,
                isLogged: true
            };
        case LOGIN_FAILED:
            return {
                ...state,
                helperText: action.payload,
                isError: true
            };
        case SET_ERROR:
            return {
                ...state,
                isError: action.payload
            };
        case SET_LOGGED:
            return {
                ...state,
                isLogged: action.payload
            };
        default:
            return state;
    }
}

export default reducer;