import styles from "./programs.module.css";
import image_one from "./images/How-to-schedule-TikTok-posts_Artboard-1-copy.jpg";
import image_two from "./images/51f9d524-5bc9-487e-8ed7-11f6a405b88e_master-schedule.png";
import image_three from "./images/Project-schedule.webp";

export const Programs = () => {
    return(
        <body >
            <h2>
                Find perfect program for your schedule.
                Or create your own one.
            </h2>

                <h3>
                    Schedules for working 9-5
                </h3>
            <section className={styles["working-section"]}>
                <div className={styles["working-first-div"]}>
                    <div>
                        <img className={styles["image-first-schedule"]} src={image_one}/>
                    </div>
                    <div className={styles["bottom-part"]}>
                        <p className={styles["paragraphs"]}>
                            first schedule
                        </p>
                        <button className={styles["button-go-to"]}>
                            Go to!
                        </button>
                    </div>
                </div>
                <div className={styles["working-second-div"]}>
                    <div>
                        <img className={styles["image-first-schedule"]} src={image_two} />
                    </div>
                    <div className={styles["bottom-part"]}>
                        <p className={styles["paragraphs"]}>
                            second schedule
                        </p>
                        <button className={styles["button-go-to"]}>
                            Go to!
                        </button>
                    </div>
                </div>
                <div className={styles["working-third-div"]}>
                    <div>
                        <img className={styles["image-first-schedule"]} src={image_three} />
                    </div>
                    <div className={styles["bottom-part"]}>
                        <p className={styles["paragraphs"]}>
                            third schedule
                        </p>
                        <button className={styles["button-go-to"]}>
                            Go to!
                        </button>
                    </div>
                </div>
            </section>
            
        </body>
        
    )
}