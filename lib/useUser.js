import {useEffect} from "react";
import Router from "next/router";
import useSWR from "swr";

export default function useUser({redirectTo = false, redirectIfFound = false} = {}) {
    const {data: user, mutate: mutateUser} = useSWR("https://localhost:8080/auth/me");

    useEffect(() => {
        if (!redirectTo || !user) {
            return;
        }

        if ((redirectTo && !redirectIfFound && !user?.isLoggedIn) || (redirectIfFound && user?.isLoggedIn)) {
            Router.push(redirectTo);
        }
    }, [user, redirectIfFound, redirectTo]);

    return {user, mutateUser};
}