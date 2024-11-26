import { FormFilmes } from "./components/FormFilmes";
import { Header } from "./components/Header";
import { ListarFilmes } from "./components/ListarFilmes";


function App() {
  
  return(
    <div>
      <Header />
      <FormFilmes/>
      <ListarFilmes/>
    </div>
  );
}

export default App
