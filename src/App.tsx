import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { direction } = useLanguage();
  
  return (
    <div 
      className="text-[#1e40af] app min-w-[280px] min-h-screen bg-background"
      dir={direction}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
