import { useState } from "react";
import { Button } from "../lib/components/Button";

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setData("OPA");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button
        color="primary"
        onClick={fetchData}
        isLoading={isLoading}
        loadingMessage="Procurando..."
      >
        Procurar
      </Button>
      {data && data}
    </div>
  );
}

export default App;
