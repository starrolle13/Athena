import "./App.css";
import CardContainer from "./components/CardContainer";
import { data } from "././data/nineCardData";

function App() {
  return (
    <div className="App">
      <div className="nineCards">
        {data.map((item, index) => {
          return (
            <CardContainer
              key={index}
              content={item.content}
              title={item.title}
              subtitle={item.subtitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
