import React from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

function Header(){
    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/home')
    };

    const handleUserClick = () => {
        router.push('/user')
    };

    const handleListClick = () => {
        router.push('/list')
    };
    
    return(
        <div className={styles.button_container}>
            <button  className={styles.button} onClick={handleHomeClick}>Home</button>
            <button  className={styles.button} onClick={handleUserClick}>User</button>
            <button  className={styles.button}onClick={handleListClick}>List</button>
        </div>
    );
}

export default Header;
