import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto p-4">
        <Profile name="Saddam Tech" email="saddam@dev.com" />
        <Counter />
      </div>
    </div>
  );
}

export default App;
