import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import background from './img/background.jpg'; // Importa a imagem de fundo

function App() {
  return (
    <div className='app' style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
