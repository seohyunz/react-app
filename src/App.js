import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Headers(props){
  //console.log('props',props,props.title);
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
          props.onChangeMode(Number(event.target.id));
        }}>{t.title}</a>
      </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.value;
      const body = event.target.body.value;
      props.onCreate(title,body);
    }}>
     <p> <input type = "text" name ="title" placeholder='title'></input></p>
     <p> <textarea name ="body" placeholder='body'></textarea></p>
     <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}

function Article(props){
  return <article>
    <h1>{props.title}</h1>
      {props.body}
  </article>
}

function App() {
  const[ mode, setModel]=useState('WELCOM')
  const [id, setId] = useState(null);
  const topics =[
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  let content = null;
  if(mode == 'WELCOM'){
    content = <Article title="Welcom" body="Hello, WEB"></Article>
  }
  else if(mode === 'READ'){
    let title, body = null;
    for(let i =0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  else if(mode ==='CREATE'){
    content=<Create onCreate={(title,body)=>{

    }}></Create>
  }
  return (
    <div>
      <Headers title = "REACT" onChangeMode={()=>{
        setModel('WELCOME');
      }}></Headers>
       <Nav topics={topics} onChangeMode={(id)=>{
          setModel('READ');
          setId(id);
       }}></Nav>
        {content}
        <a href="/create" onClick={event=>{
          event.preventDefault();
          setModel('CREATE');
        }}>Create</a>
    </div>
  );
}

export default App;