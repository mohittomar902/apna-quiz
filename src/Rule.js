import "./Quiz.css";

const Rule = () => {
  return (
    <div className="info_box">
      <div className="info-title">
        <span>Choose Subject </span>
      </div>
      <a href="/javas" className="abtn">
        <button className="selectSub">JavaScript</button>
      </a>
      <a href="/react" className="abtn">
        <button className="selectSub">ReactJs</button>
      </a>
      <a href="/node" className="abtn">
        <button className="selectSub">NodeJs</button>
      </a>
      <a href="/html" className="abtn">
        <button className="selectSub">HTML</button>
      </a>
      <div className="buttons">
        <a href="/home">
          <button class="quit">Exit Quiz</button>{" "}
        </a>
      </div>
    </div>
  );
}
export default Rule;
