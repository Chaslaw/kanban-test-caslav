import Column from "./components/Column/Column";
import './App.css';
import columnHeaderData from './components/ColumnHeader/columnHeaderData'
import ColumnHeader from "./components/ColumnHeader/ColumnHeader";
import Card from "./components/Card/Card";
import CardTitle from "./elements/CardTitle/CardTitle";
import cardDataColumnOne from "./components/Card/cardData";
import DueDate from "./elements/DueDate/DueDate";
import SigniferGroup from "./elements/SigniferGroup/SigniferGroup";
import StartDueDate from "./elements/StartDueDate/StartDueDate";
import Avatar from "./elements/Avatar/Avatar";
import Scroller from "./elements/Scroller/Scroller";
import LabelsGroup from "./elements/LabelsGroup/LabelsGroup";
import AddTaskList from "./components/AddTaskList/AddTaskList";


function App() {

  return (
    <div className="App">
      <ColumnHeader headers={columnHeaderData} />
      <Column>
        <Card>
          <CardTitle title={cardDataColumnOne[0].cardTitle} />
          <DueDate dueDate={cardDataColumnOne[0].dueDate} />
        </Card>
        <Card>
          <CardTitle title={cardDataColumnOne[1].cardTitle} />
          <SigniferGroup numberOne={cardDataColumnOne[1].numberOne}
            numberTwo={cardDataColumnOne[1].numberTwo} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <StartDueDate startDate={cardDataColumnOne[2].startEndDate} />
            <Avatar avatar={cardDataColumnOne[3].avatar} />
          </div>
        </Card>
        <Card>
          <CardTitle title={cardDataColumnOne[4].cardTitle} />
        </Card>
        <Card>
          <CardTitle title={cardDataColumnOne[5].cardTitle} />
          <div style={{ display: 'flex' }}>
            <LabelsGroup />
            <SigniferGroup numberOne={cardDataColumnOne[1].numberOne}
              numberTwo={cardDataColumnOne[1].numberTwo} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <StartDueDate startDate={cardDataColumnOne[2].startEndDate} />
            <Avatar avatar={cardDataColumnOne[3].avatar} />
          </div>
        </Card>
        <Card>
          <CardTitle title={cardDataColumnOne[6].cardTitle} />
          <div style={{ display: 'flex' }}>
            <LabelsGroup />
            <SigniferGroup numberOne={cardDataColumnOne[1].numberOne}
              numberTwo={cardDataColumnOne[1].numberTwo} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <StartDueDate startDate={cardDataColumnOne[2].startEndDate} />
            <Avatar avatar={cardDataColumnOne[3].avatar} />
          </div>
        </Card>
        <Scroller/>
      </Column>
      <Column height={'388px'}>
        <Card>
          <CardTitle title={cardDataColumnOne[7].cardTitle} />
          <div style={{ display: 'flex' }}>
            <LabelsGroup />
            <SigniferGroup numberOne={cardDataColumnOne[1].numberOne}
              numberTwo={cardDataColumnOne[1].numberTwo} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <StartDueDate startDate={cardDataColumnOne[2].startEndDate} />
            <Avatar avatar={cardDataColumnOne[3].avatar} />
          </div>
        </Card>
        <Card>
          <CardTitle title={cardDataColumnOne[8].cardTitle} />
          <LabelsGroup />
          <Avatar avatar={cardDataColumnOne[3].avatar} />
        </Card>
        <Card>
          <CardTitle title={cardDataColumnOne[9].cardTitle} />
          <Avatar avatar={cardDataColumnOne[3].avatar} />
        </Card>
      </Column>
      <Column height={'350px'}>
        <Card>
        <CardTitle title={cardDataColumnOne[10].cardTitle} />
          <LabelsGroup style={{display: 'flex', width: '84%'}}/>
          <StartDueDate startDate={cardDataColumnOne[2].startEndDate} />
        </Card>
        <Card>
        <CardTitle title={cardDataColumnOne[10].cardTitle} />
          <DueDate dueDate={cardDataColumnOne[10].dueDate} />
        </Card>
        <Card>
        <CardTitle title={cardDataColumnOne[11].cardTitle} />
        </Card>
        </Column>
        <Column height={'174px'}>
        <Card style={{gap: '3px' }}>
          <CardTitle title={cardDataColumnOne[12].cardTitle} />
          <div style={{ display: 'flex' }}>
            <LabelsGroup />
            <SigniferGroup numberOne={cardDataColumnOne[1].numberOne}
              numberTwo={cardDataColumnOne[1].numberTwo} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <StartDueDate startDate={cardDataColumnOne[2].startEndDate} />
            <Avatar avatar={cardDataColumnOne[3].avatar} />
          </div>
        </Card>
        </Column>
        <AddTaskList/>
    </div>
  );


}

export default App;
