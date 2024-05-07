import ColorBoxRow from './ColorBoxRow';

export default function ColorBoxGrid(){
  //Or use a loop to create an array of components and print them all in one go
  const rows = [];
    for(let i = 0; i < 5; i++)
    rows.push(<ColorBoxRow key={i}/>);
    return <div>
        {rows}
    </div>
}