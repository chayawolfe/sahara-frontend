import { useEffect, useReducer, useCallback, useMemo } from 'react';
// utils
import axios, { endpoints } from 'src/utils/axios';
//
import { AuthContext } from './auth-context';
import { setSession } from './utils';
import { ActionMapType, AuthStateType, AuthUserType } from '../../types';

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

enum Types {
    INITIAL = 'INITIAL',
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
    LOGOUT = 'LOGOUT'
}

type Payload = {
    [Types.INITIAL]: {
        user: AuthUserType;
    };
    [Types.LOGIN]: {
        user: AuthUserType;
    };
    [Types.REGISTER]: {
        user: AuthUserType;
    };
    [Types.LOGOUT]: undefined;
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
    user: null,
    loading: true
};

const reducer = (state: AuthStateType, action: ActionsType) => {
    if (action.type === Types.INITIAL) {
        return {
            loading: false,
            user: action.payload.user
        };
    }
    if (action.type === Types.LOGIN) {
        return {
            ...state,
            user: action.payload.user
        };
    }
    if (action.type === Types.REGISTER) {
        return {
            ...state,
            user: action.payload.user
        };
    }
    if (action.type === Types.LOGOUT) {
        return {
            ...state,
            user: null
        };
    }
    return state;
};

// ----------------------------------------------------------------------

const STORAGE_KEY = 'accessToken';

type Props = {
    children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const initialize = useCallback(async () => {
        try {
            console.clear();
            console.log('initialize');
            const accessToken = localStorage.getItem(STORAGE_KEY);

            if (accessToken) {
                setSession(accessToken);

                const res = await axios.get(endpoints.auth.me);
                const { user } = res.data;

                dispatch({
                    type: Types.INITIAL,
                    payload: {
                        user: {
                            ...user,
                            accessToken
                        }
                    }
                });
            } else {
                dispatch({
                    type: Types.INITIAL,
                    payload: {
                        user: null
                    }
                });
            }
        } catch (error) {
            console.error(error);
            dispatch({
                type: Types.INITIAL,
                payload: {
                    user: null
                }
            });
        }
    }, []);

    // setTimeout(() => {
    //     initialize();
    // }, 10 * 1000);

    useEffect(() => {
        setInterval(() => {
            initialize();
        }, 10 * 1000);
        initialize();
    }, [initialize]);

    // LOGIN
    const login = useCallback(async (email: string, password: string) => {
        const config = {};
        const ip: any = await axios
            .get('https://ipapi.co/json/', config)
            .then((response) => {
                // Handle the response
                console.log(response.data, '--ip success--');
                return response.data;
            })
            .catch((error) => {
                // Handle the error
                console.error(error, '--ip error--');
            });
        const data = {
            email,
            password,
            ipAddress: ip?.ip
        };

        console.log(data, 'data');

        const res = await axios.post(endpoints.auth.login, data);
        const { accessToken, user } = res.data;

        setSession(accessToken);

        dispatch({
            type: Types.LOGIN,
            payload: {
                user: {
                    ...user,
                    accessToken
                }
            }
        });
    }, []);

    // REGISTER
    const register = useCallback(
        async (
            email: string,
            password: string,
            firstname: string,
            lastname: string,
            username: string,
            country: string,
            currency: string
        ) => {
            const data = {
                email,
                password,
                firstname,
                lastname,
                username,
                country,
                currency
            };

            const res = await axios.post(endpoints.auth.register, data);
            const { accessToken, user } = res.data;

            localStorage.setItem(STORAGE_KEY, accessToken);

            dispatch({
                type: Types.REGISTER,
                payload: {
                    user: {
                        ...user,
                        accessToken
                    }
                }
            });
        },
        []
    );

    // LOGOUT
    const logout = useCallback(async () => {
        await axios.post(endpoints.auth.logout);
        setSession(null);
        dispatch({
            type: Types.LOGOUT
        });
    }, []);

    // ----------------------------------------------------------------------

    const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';

    const status = state.loading ? 'loading' : checkAuthenticated;

    const memoizedValue = useMemo(
        () => ({
            user: state.user,
            method: 'jwt',
            loading: status === 'loading',
            authenticated: status === 'authenticated',
            unauthenticated: status === 'unauthenticated',
            //
            login,
            register,
            logout
        }),
        [login, logout, register, state.user, status]
    );

    return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
