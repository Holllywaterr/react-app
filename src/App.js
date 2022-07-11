import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props){
  return <header>
    <h1><a href="/index.html" onClick={(event) =>{
      // 기본동작을 못하게 하는 함수
      event.preventDefault();
      props.onSelect();
    }}> WEB </a></h1>
  </header>
}

function Article(props){
  //console.log('props', props)
  return <article>
  <h2>{props.title}</h2>
  {props.body}
  </article>
}

function Nav(props){
  // for문 이용한 태그 생성
  // const tag = []
  // for(let i=0; i<props.data.length; i++){
  //   tag.push(<li key={props.data[i].id}>
  //   <a href={'/read/'+ props.data[i].id}>
  //   {props.data[i].title}</a></li>);
  // }

  // map을 활용한 태그 생성
//  function callback(element){
//   return <li key={element.id}>
//     <a href={'/read/'+element.id}>
//     {element.title}</a></li>
//  }

// 함수 표현 다른 방식
// const callback = (element) => {
//   return <li key={element.id}>
//     <a href={'/read/'+element.id}>
//     {element.title}</a></li>
// }

// 더 간결한 함수 표현 방식
//const callback = element => <li key={element.id}><a href={'/read/'+element.id}>{element.title}</a></li>
//const tag = props.data.map(callback)
 return  <nav>
        <ol>
          {/* {tag} */}
          {props.data.map(element => <li key={element.id}>
            <a href={'/read/'+element.id} onClick={event=>{
              event.preventDefault();
              props.onSelect();
            }}>
              {element.title}</a></li>)}
        </ol>
      </nav>
}

function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('READ')

  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'js is...'}
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body = "Hello, WEB"></Article>
  } else if(mode === 'READ'){
    content = <Article title="READ" body = "Hello, READ"></Article>
  }

  return (
    <div>
      <Header onSelect={() => setMode('WELCOME')}></Header>
      {/* topics를 data라는 prop으로 전달 */}
      <Nav data={topics} onSelect={() => setMode('READ')}></Nav>
      {content}
    </div>
  );
}

export default App;
