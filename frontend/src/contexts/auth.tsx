import {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useState,
} from "react";
import { authToken, authUser } from "../constants";
import { api } from "../services";

type User = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
};

type AuthState = {
    token: string;
    user: User;
};

type LoginCredentials = {
    email: string;
    password: string;
};

type AuthContextData = {
    user: User;
    login(credentials: LoginCredentials): Promise<void>;
    logout(): void;
    updateUser(user: User): void;
};

type LoginRequest = {
    email: string;
    password: string;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem(authToken);
        const user = localStorage.getItem(authUser);

        if (token && user) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });

    const login = useCallback(async ({ email, password }: LoginRequest) => {
        const response = await api.post("/login", {
            email,
            password,
        });
        const { token, user } = response.data;
        localStorage.setItem(authToken, token);
        localStorage.setItem(authUser, JSON.stringify(user));

        setData({ token, user });
    }, []);

    const logout = useCallback(() => {}, []);

    const updateUser = useCallback((user: User) => {}, []);

    return (
        <AuthContext.Provider
            value={{ user: data.user, login, logout, updateUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context)
        throw new Error("useAuth must be used within an AuthProvider");

    return context;
}
