import styles from "./home.module.css"
import video from "./images/vecteezy_business-concept-in-2d_28379580.mp4"

export const Home = () =>{

    return(
        <main>
            <section className={styles["first-section"]}>
                <div className={styles["left-side-first-section"]}>
                    <video className={styles["video"]}>
                        <source src={video} type="video/mp4" />
                            there is no video
                    </video>
                </div>
            </section>
        </main>
    );
}