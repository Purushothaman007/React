import React ,{useState,useRef}from 'react'


function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    const logAction = (message) => {
      console.log(`[LOG]: ${message}`);
    };

    return <WrappedComponent {...props} logAction={logAction} />;
  };
}

function NotesApp({ logAction }) {
 const [notes,setNotes] =useState([]);
 const [editIndex,setEditIndex]=useState(null);
 const noteInputRef=useRef();


function handleEditNote(index) {
    noteInputRef.current.value = notes[index];
    setEditIndex(index);
    noteInputRef.current.focus();
  }

  function handleDelete(del_index)
  {
    logAction(`${notes[del_index]} is deleted`);
    const newnotes=notes.filter((_,index)=>del_index!==index)
    setNotes(newnotes)
  }

 function handleAddnote()
 {
    const newnote=noteInputRef.current.value.trim();
    if(!newnote) return ;


    if (editIndex !== null) {
      const updatedNotes = [...notes];
      logAction(`${notes[editIndex]}->${newnote}`);
      updatedNotes[editIndex] = newnote;
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      logAction(`${newnote} is added`);
      setNotes([...notes, newnote]);
    }

    noteInputRef.current.value='';
    noteInputRef.current.focus();
 }


  return (
    <div style={{display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    background: "lightblue",
    borderRadius: "10px",
    width:"500px",
    marginTop:"50px"}}>
    <h2>Note Taking App</h2> 
    <input type="text" style={{margin:"10px"}}ref={noteInputRef} placeholder="Enter the Task"/>  
    <button onClick={handleAddnote}>
      Add note
      </button>  
      <ul>
        {notes.map((note,index)=>(
          <li key={index}  style={{
        background: "#fff",
        margin: "8px 0",
        padding: "10px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}>{note}
            <button onClick={()=>handleEditNote(index)}>Edit</button>
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </li>
        )

      )}
      </ul> 
    </div>
  )
}

export default withLogger(NotesApp);
