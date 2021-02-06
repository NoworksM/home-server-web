import Layout from "../components/layout";
import useUser from "../lib/useUser";
import {useState} from "react";
import apiClient from "../lib/apiClient";

export default function Home() {
    const {mutateUser} = useUser({
        redirectTo: "/",
        redirectIfFound: true
    });

    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const result = await apiClient.login(e.currentTarget.email.value, e.currentTarget.password.value);

        if (result) {

        } else {

        }
    }

    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-4 is-offset-4 is-12-mobile">
                        <div className="box">
                            <h1 className="is-size-3 has-text-centered">Login</h1>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input id="email" className="input" type="text"/>
                                </div>
                                <div>
                                    <label htmlFor="email">Password</label>
                                    <input id="password" className="input" type="password"/>
                                </div>
                                <div className="has-text-centered mt-2">
                                    <input type="submit" className="button">Login</input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
