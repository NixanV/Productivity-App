import styles from "./programs.module.css"


export const Programs = () => {
    return(
        <>
            <h2>
                Find perfect program for your schedule.
                Or create your own one.
            </h2>
            
            <section className={styles["working-section"]}>
                <div className={styles["working-first-div"]}>
                    <div>
                        <img />
                    </div>
                    <div>
                        <p>
                            first schedule
                        </p>
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
            
        </>
        
    )
}