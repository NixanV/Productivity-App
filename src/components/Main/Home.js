import styles from "./home.module.css"
import video from "./images/vecteezy_business-concept-in-2d_28379580.mp4"

export const Home = () =>{

    return(
        <main>
            <section className={styles["first-section"]}>
                <div className={styles["left-side-first-section"]}>
                    <video className={styles["video"]} controls loop autoPlay>
                        <source src={video} type="video/mp4" />
                            there is no video
                    </video>
                </div>
                <div className={styles["right-side-first-section"]}>
                    <h3 className={styles["h3-motivation"]}>
                        Here we will show you how to manage your time. <br/>You can do all you want and still have a free time.
                        <br/> Reading, writing, working out everything is possible. Trust us.
                    </h3>
                </div>
            </section>
        </main>
    );
}