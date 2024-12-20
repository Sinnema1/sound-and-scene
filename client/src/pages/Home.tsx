import { useState, useLayoutEffect } from "react";
//import { retrieveUsers } from "../api/userAPI";
//import type { UserData } from "../interfaces/UserData";
//import ErrorPage from "./ErrorPage";
/*import UserList from '../components/Users';*/
import auth from '../utils/auth';

const Home = () => {

  const [loginCheck, setLoginCheck] = useState(false);


   // const [error, setError] = useState(false);


    /*useEffect(() => {
        if (loginCheck) {
            fetchUsers();
        }
    }, [loginCheck]);*/

    useLayoutEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = () => {
        if (auth.loggedIn()) {
            setLoginCheck(true);
        }
    };

    /*const fetchUsers = async () => {
        try {
            const data = await retrieveUsers();
            setUsers(data)
        } catch (err) {
            console.error('Failed to retrieve tickets:', err);
            setError(true);
        }
    }*/

    /*if (error) {
        return <ErrorPage />;
    }*/

    return (
        <>
            {
                !loginCheck ? (
                    <div className='login-notice'>
                        <h1>
                            Login to view all your friends!
                        </h1>
                    </div>
                ) : (
                    /*<UserList users={users} />*/
                    <h1>You are logged in</h1>
                )}
        </>
    );
  };

export default Home;