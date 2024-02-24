import styles from "./programs.module.css";
import image_one from "./images/How-to-schedule-TikTok-posts_Artboard-1-copy.jpg";
import image_two from "./images/51f9d524-5bc9-487e-8ed7-11f6a405b88e_master-schedule.png";
import image_three from "./images/Project-schedule.webp";
import excel_table from "./files/data.xlsx"

export const Programs = () => {

    // const handleDownload = () => {
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute("download", "./files/data.xlsx");

    // }

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
                        <a
                        className={styles["a-download"]}
                        href={excel_table}
                        download="excel-table"
                        target="_blank"
                        rel="noopener noreferrer">
                            
                        <button className={styles["button-go-to"]}>
                            Go to!
                        </button>
                        </a>
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
                        <a
                        className={styles["a-download"]}
                        href={excel_table}
                        download="excel-table"
                        target="_blank"
                        rel="noopener noreferrer">
                            
                        <button className={styles["button-go-to"]}>
                            Go to!
                        </button>
                        </a>
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
                        <a
                        className={styles["a-download"]}
                        href={excel_table}
                        download="excel-table"
                        target="_blank"
                        rel="noopener noreferrer">

                        <button className={styles["button-go-to"]}>
                            Go to!
                        </button>
                        </a>
                    </div>
                </div>
            </section>
            <section className={styles["create-own"]}>
                <h3>
                    You didn't find what you want. Let's create program for your time schedule.
                </h3>
                
                <button className={styles["button-create"]}>
                    <span>
                        Create
                    </span>
                </button>
            </section>
        </body>
        
    )
}