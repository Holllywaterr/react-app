import logo from './logo.svg';
import './App.css';

function Header(){
  return <header>
    <h1><a href="/index.html"> WEB </a></h1>
  </header>
}

function Article(){
  return <article>
  <h2>Welcome</h2>
  Hello Web~!!!
  </article>
}

function Nav(){
 return  <nav>
        <ol>
          <li><a href="read/1.html">html</a></li>
          <li><a href="read/2.html">css</a></li>
          <li><a href="read/3.html">javascript</a></li>
        </ol>
      </nav>
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
