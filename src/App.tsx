import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const items = ["spaghetti", "soup", "hamburger", "potato"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisibile, setAlertVisible] = useState(true);
  return (
    <div>
      {alertVisibile && (
        <Alert color="danger" onClose={() => setAlertVisible(false)}>
          You still owe my like 10ish dollars for letting u see this
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisible(false);
        }}
        color="primary"
      >
        Pay me ~$10
      </Button>
      <Button
        onClick={() => {
          setAlertVisible(true);
        }}
        color="warning"
      >
        Refund ~$10
      </Button>
      <ListGroup
        items={items}
        heading="food yum"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
