import logo from './logo.svg';
import './App.css';

function Headers(props){
  console.log('props',props,props.title);
  return <heders>
    <h1><a href='/' onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode();
    }}>{props.title}</a></h1>
  </heders>
}
function Nav(props){
  const lis=[]
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id ={t.id} href={'/read/'+t.id}onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
      </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props){
  return <article>
    <h1>{props.title}</h1>
      {props.body}
  </article>
}

function App() {
  const topics =[
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}

  ]
  return (
    <div>
      <Headers title = "REACT" onChangeMode={()=>{
        alert('Heder');
      }}></Headers>
       <Nav topics={topics} onChangeMode={(id)=>{
          alert(id);
       }}></Nav>
       <Article title="Welcom" body="Hello, WEB"></Article>
       <Article title="Hi" body="Hello, REACT"></Article>
    </div>
  );
}

export default App;