import styles from "./Project.module.css" ;
import { useEffect, useState } from "react";
// import projectsData from "../../Projects.json"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface DataItem {
    name: string;
    description: string;
    image: string;
    demo:string;
    repo:string;
    about:string;
  }

const Projects = () => {


const [error , setError] = useState<string | null>(null);
const [loading , setLoading] = useState<boolean>(true);
const [data , setData] = useState<DataItem[]>([])
const [isOverviewOpen , setIsOverviewOpen] = useState<boolean>(false);
const [currentItem , setCurrentItem] = useState<DataItem | null>(null);
useEffect(() => {
    const fetchData = async () => {
      try {
    setLoading(true)
        setData(projectsData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
const displayOvView = (item : DataItem) => {
    setIsOverviewOpen(true);
    setCurrentItem(item);

}
const closeOverview = () => {
    setIsOverviewOpen(false)
setCurrentItem(null);
}


 

    return (
        <>
        <section className={styles.sectionContent}>

<h1>My Projects</h1>

<div className={styles.contentProjects}>



{data.map((item) => (
          <div className={styles.card} key={item.name}>
          <div className={styles.imagess}>
              <img src={item.image} alt="Project images" loading="lazy" />
          
              </div> 
            <h3>{item.name}</h3>
            <p className={styles.aboutProj}>{item.about}</p>
<p className={styles.overParar} onClick={() => displayOvView(item)}>More</p>
            <div className={styles.divButtons}>
          <Link className={styles.linkDemo} to={item.demo}>Demo</Link>
          <Link className={styles.linkRepo} to={item.repo}><FontAwesomeIcon icon={faGithub} /></Link>

            </div>
          </div>
        ))}







</div>


        </section>


        {isOverviewOpen && (
        <div className={styles.overlay} onClick={closeOverview}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeOverview}>
            &times;

            </button>

            <div className={styles.cardov} >
          <div className={styles.imagessov}>
              <img src={currentItem?.image} alt="Project images" />
          
              </div> 
            <h3>{currentItem?.name}</h3>
            <p>{currentItem?.description}</p>
            <div className={styles.divButtonsov}>
          <Link className={styles.linkdemOver} to={currentItem?.demo || "#"}>Demo</Link>
          <Link className={styles.linkGithupOver} to={currentItem?.repo || "#"}><FontAwesomeIcon icon={faGithub} /></Link>

            </div>
          </div>


          </div>
        </div>
      )}




        </>
    );
};
export default Projects ;