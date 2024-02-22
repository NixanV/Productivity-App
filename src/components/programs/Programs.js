import styles from "./programs.module.css";
import image_one from "./images/How-to-schedule-TikTok-posts_Artboard-1-copy.jpg";

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
                    <div>
                        <p>
                            first schedule
                        </p>
                        <button className={styles["button-go-to"]}>
                            Go to!
                        </button>
                    </div>
                </div>
                <div className={styles["working-second-div"]}>
                    <div>
                        <img />
                    </div>
                    <div>
                        <p>
                            second schedule
                        </p>
                    </div>
                </div>
                <div className={styles["working-third-div"]}>
                    <div>
                        <img />
                    </div>
                    <div>
                        <p>
                            third schedule
                        </p>
                    </div>
                </div>
            </section>
            
        </body>
        
    )
}