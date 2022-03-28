import Search from "../../../src/components/search";
// import Components Gif
import Gif from "../../../src/components/gif";
// import object data
import data from "../../data";

function Home() {
    return (
        <div className="home">
        <h1>Module 2</h1>
        <Search/>
        <Gif title={data.title} url={data.url}/>
        </div>
    );
}
export default Home;