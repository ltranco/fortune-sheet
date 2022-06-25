import type { NextPage } from 'next'
import Spreadsheet from '../components/Spreadsheet';
import styles from '../styles/Home.module.css'



const htmlToElement = (html: string) => {
  var template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild as HTMLTableElement;
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Spreadsheet/>
    </div>
  )
}

export default Home
