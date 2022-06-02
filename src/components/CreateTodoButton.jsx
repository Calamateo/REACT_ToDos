import React from 'react'

function CreateTodoButton() {

  const onclickButton = () => {
    console.log('click');
    alert('click');
  }

  // var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json", "Access-Control-Allow-Origin");

  //   const [usuarios, setUsuarios] = React.useState([])

  //   React.useEffect(() => {
  //       fetchData()
  //   }, [])

  //   const fetchData = async () => {
  //       const data = await fetch('http://127.0.0.1:8000/OmniClass23/')
  //       const users = await data.json()
  //       // console.log(users)
        
  //       await setUsuarios(users.results)
  //       console.table(usuarios)
        
  //     }

      

  return (
    <div className="text-center py-5">
        <button
          className='btn btn-lg btn-primary'
          onClick={() => onclickButton()}
        >
          +
        </button>

{/* 
      <ul>
        {
          usuarios.map(data => (
            <li key={data.idOmc23}>
              {data.Codigo} {data.descriSpa} 
            </li>
          ))
        }
      </ul> */}
    </div>
  )
}

export {CreateTodoButton}