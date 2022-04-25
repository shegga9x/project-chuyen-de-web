import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useAuth(shouldRedirect) {
    const [session] = useSession();
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (session?.error === "RefreshAccessTokenError") {
            signOut({ callbackUrl: '/account', redirect: shouldRedirect });
        }

        if (session === null) {
            if (router.route !== '/account') {
                window.location.href = '/account'
            }
            setIsAuthenticated(false);
        } else if (session !== undefined) {
            if (router.route === '/account') {
                window.location.href = '/'
            }
            setIsAuthenticated(true);
        }
    }, [session]);

    return [isAuthenticated];
}