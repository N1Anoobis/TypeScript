import Axios from 'axios';

export type State = {
    helperText: string
    isError: boolean
    isLogged: boolean
    msg: string
    error: object
    status: number
};

export const callMockedEndpoint = () => {
    return async (dispatch, getState) => {

        dispatch(fetchStart());
        try {
            let res = await Axios.get(`https://run.mocky.io/v3/8f996db2-bc37-4a4e-95e9-0220955f51e7`)
            dispatch(fetchSuccess(res.data));
            dispatch(setStatus(res.status));
        }
        catch (e) {
            dispatch(fetchError(e.message || true));
        }
    };
};

export const initialState: State = {
    helperText: '',
    isError: false,
    isLogged: false,
    msg: '',
    error: {},
    status: 404
};

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const LOGIN_SUCCES = 'LOGIN_SUCCES';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOGGED = 'SET_LOGGED';

export const SET_STATUS = 'SET_STATUS';

interface FetchStart {
    type: typeof FETCH_START
}

interface FetchError {
    type: typeof FETCH_ERROR,
    payload: object
}

interface FetchSuccess {
    type: typeof FETCH_SUCCESS,
    payload: string
}

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

interface SetStatus {
    type: typeof SET_STATUS
    payload: number
}

type ActionType = FetchStart | FetchSuccess | FetchError | LoginSuccess | LoginFailed | SetIsError | SetIsLogged | SetStatus;

export const fetchStart = (): FetchStart => ({
    type: FETCH_START,
});

export const fetchSuccess = (res: string): FetchSuccess => ({
    type: FETCH_SUCCESS,
    payload: res
});

export const fetchError = (error: object): FetchError => ({
    type: FETCH_ERROR,
    payload: error
});

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

export const setStatus = (number): SetStatus => ({
    type: SET_STATUS,
    payload: number
});

const reducer = (state: State = initialState, action: ActionType): State => {
    switch (action.type) {
        case FETCH_START: {
            return {
                ...state,
            };
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                msg: action.payload
            };
        }
        case FETCH_ERROR: {
            return {
                ...state,
                error: action.payload
            };
        }
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
                isError: true,
                msg: ''
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
        case SET_STATUS: {
            return {
                ...state,
                status: action.payload
            };
        }
        default:
            return state;
    }
}

export default reducer;