import { useState } from "react"
import styles from "./login.module.css"


export const Login = () =>{
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const onChangeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name] : ev.target.value
        }));
    };

    return(
    <div className={styles["container"]}>
        <div className={styles["card"]}>
            <div className={styles["card-image"]}>	
                <h2 className={styles["card-heading"]}>
                    Get started
                    <small>Let us create your account</small>
                </h2>
            </div>
            <form className={styles["card-form"]}>
            
                <div className={styles["input"]}>
                    <input
                    type="email" 
                    className={styles["input-field"]}
                    name="email"
                    value={data.email}
                    onChange={(ev) => onChangeHandler(ev)}
                    required/>
                    <label className={styles["input-label"]}>Email</label>
                </div>
                <div className={styles["input"]}>
                    <input 
                    type="password" 
                    className={styles["input-field"]} 
                    name="password"
                    value={data.email}
                    onChange={(ev) => onChangeHandler(ev)}
                    required/>
                    <label className={styles["input-label"]}>Password</label>
                </div>
                <div className={styles["action"]}>
                    <button className={styles["action-button"]}>Get started</button>
                </div>
            </form>
            <div className={styles["card-info"]}>
                <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
            </div>
        </div>
    </div>

    )
}