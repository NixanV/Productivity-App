import styles from "./home.module.css"
import video from "./images/vecteezy_business-concept-in-2d_28379580.mp4";
import gif from "./images/f4c36571-ff98-412e-acf4-5d6c06de6e7a_rw_1200.gif"



export const Home = () =>{


    return(
        <main>
            <section className={styles["first-section"]}>
            <div className={styles["left-side-first-section"]}>
                    <h3 className={styles["h3-motivation"]}>
                        Here we will show you how to manage your time. <br/>You can do all you want and still have a free time.
                        <br/> Reading, writing, working out everything is possible. Trust us.
                    </h3>
                </div> 
                <div className={styles["right-side-first-section"]}>
                    <img className={styles["gif"]} src={gif} />
  
                </div>
                
            </section>
            <hr className={styles["horizontal-line"]}/>
            <section className={styles["second-section"]}>
                <div className={styles["left-side-second-section"]}>
                    <h2>
                        Why you need <br/>us?
                    </h2>

                </div>
                <div className={styles["right-side-second-section"]}>
                    <div className={styles["first-square"]}>
                        <div className={styles["icons"]}>
                            <ul>
                                <li><i className="fa-solid fa-clock"></i></li>
                            </ul>
                        </div>
                        <p>
                            Better time management
                        </p>
                    </div>
                    <div className={styles["second-square"]}> 
                    <div className={styles["icons"]}>
                            <ul>
                                <li><i class="fa-solid fa-check"></i></li>
                            </ul>
                        </div>
                        <p>
                            Improved productivity
                        </p>
                    </div>
                    <div className={styles["third-square"]}>
                        <div className={styles["icons"]}>
                            <ul>
                                <li><i class="fa-regular fa-hand-point-up"></i></li>
                            </ul>
                        </div>
                    
                        <p>
                            Self-improvement
                        </p>
                    </div>
                    <div className={styles["fourth-square"]}>
                        <div className={styles["icons"]}>
                            <ul>
                                <li><i class="fa-solid fa-heart-pulse"></i></li>
                            </ul>
                        </div>
                    
                        <p>
                            Health improvement
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );
}