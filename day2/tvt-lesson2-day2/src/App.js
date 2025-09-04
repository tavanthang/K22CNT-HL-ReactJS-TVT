import './App.css';
import TvtClassComp from './components/TvtClassComp';
import TvtFuncComp from './components/TvtFuncComp';
import TvtJsExpression from './components/TvtJsExpression';

function App() {
  return (
    <div className="container border">
        <h1>Làm việc với các thành phần cơ bản trong ReactJs</h1>
        <hr/>
        <TvtJsExpression />

        <TvtFuncComp />
        <TvtFuncComp name="Ta Van Thang" age="21"></TvtFuncComp>

        <TvtClassComp ></TvtClassComp>
        <TvtClassComp fullName="Ta Van Thang" company="FitNTU" />
        <TvtClassComp fullName="TaVan Thang" company="K22CNT2" />
    </div>
  );
}

export default App;