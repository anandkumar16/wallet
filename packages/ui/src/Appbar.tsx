import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    };
    onSignin: () => void;
    onSignout: () => void;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
    return (
        <div className="flex justify-between items-center border-b px-4 py-2 border-slate-300 bg-white shadow-md">
            <div className="text-xl font-bold text-blue-600">
                {user ? `HI ${user.name ? user.name.toLocaleUpperCase() : 'USERNAME'}` : "PayTM"}
            </div>
            <div className="flex items-center">
                <Button onClick={user ? onSignout : onSignin}>
                    {user ? "Logout" : "Login"}
                </Button>
            </div>
        </div>
    );
};
