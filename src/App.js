import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input type="email" className="form-control" id="email" placeholder="Entrez votre e-mail" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" className="form-control" id="password" placeholder="Entrez votre mot de passe" />
        </div>
        <button type="submit" className="btn btn-primary">Se connecter</button>
      </form>
    </div>
  );
}

export default App;
