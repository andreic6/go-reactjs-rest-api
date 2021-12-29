const { useState } = React
function App() {
 const [typing, setTyping] = useState('')
 const [response, setResponse] = useState('')
function Send(e) {
	e.preventDefault();
const formData = new FormData()
      formData.append('value', typing) 
axios.post('http://192.168.1.1:3000',formData)
      .then(res => {
       setResponse(res.data);
       })
}
 return (
  <div>
   <form>
    <label> Name:
    <input type = "text" value={typing} onChange={e => setTyping(e.target.value)}/>
     </label>
     <button onClick={Send}>Add</button><br/>
     <span>{response}</span>
      </form>
   </div>
   )
}
ReactDOM.render(<App />, document.getElementById('mydiv'))  
