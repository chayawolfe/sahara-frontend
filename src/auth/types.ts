// ----------------------------------------------------------------------

export type ActionMapType<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key;
          }
        : {
              type: Key;
              payload: M[Key];
          };
};

export type AuthUserType = null | Record<string, any>;

export type AuthStateType = {
    status?: string;
    loading: boolean;
    user: AuthUserType;
};

// ----------------------------------------------------------------------

type CanRemove = {
    login?: (email: string, password: string) => Promise<void>;
    register?: (
        email: string,
        password: string,
        firstname: string,
        lastname: string,
        username: string,
        country: string,
        currency: string
    ) => Promise<void>;
    //
    confirmRegister?: (email: string, code: string) => Promise<void>;
    forgotPassword?: (email: string) => Promise<void>;
    resendCodeRegister?: (email: string) => Promise<void>;
    newPassword?: (email: string, code: string, password: string) => Promise<void>;
};

export type JWTContextType = CanRemove & {
    user: AuthUserType;
    method: string;
    loading: boolean;
    authenticated: boolean;
    unauthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (
        email: string,
        password: string,
        firstname: string,
        lastname: string,
        country: string,
        username: string,
        currency: string
    ) => Promise<void>;
    logout: () => Promise<void>;
};
