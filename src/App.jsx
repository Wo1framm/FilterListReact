import { useState } from 'react'


function App() {
  const [filterInput, setFilterInput] = useState('');
  const [userList, setUserList] = useState(['Pedro', 'Paco', 'Manolo', 'Daniel', 'Luis', 'Jose', 'Francisco', 'Isabel', 'Carrasco', 'Enmanuel', 'Maluma', 'Maria', 'Pilar', 'Sanchez'])
  const [ogUserList, setOgUserList] = useState(['Pedro', 'Paco', 'Manolo', 'Daniel', 'Luis', 'Jose', 'Francisco', 'Isabel', 'Carrasco', 'Enmanuel', 'Maluma', 'Maria', 'Pilar', 'Sanchez'])

  const filter = () => {
    const tempUserList =  [ ...ogUserList]
    const tempFilteredUserList = tempUserList.filter((user) => user.toLowerCase().includes(filterInput.toLowerCase()))
    setUserList(tempFilteredUserList);
  }

  const reset = () => {
    setUserList(ogUserList);
  }

  return (
    <>
      <input type="text" className='filter' value={filterInput} onChange={(e) => setFilterInput(e.target.value)} />
      <button onClick={() => filter()}>Filtrar</button>
      <button onClick={() => reset()}>Reiniciar</button>
      <ul>
        {userList.map(user => <li key={user}>{user}</li>)}
      </ul>
    </>
  )
}

export default App
