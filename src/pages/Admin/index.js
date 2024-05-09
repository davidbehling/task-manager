import { useState, useEffect } from 'react'
import { auth, db } from '../../firebaseConnection'
import { signOut } from 'firebase/auth'
import { addDoc, collection, onSnapshot, query, where, orderBy, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import './index.css'

export default function Admin() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [user, setUset] = useState({})
  const [edit, setEdit] = useState({})

  useEffect(() => {
    async function loadTasks() {
      const userDetail = localStorage.getItem("@detailUser")
      const data = JSON.parse(userDetail)
      setUset(data)

      if(userDetail) {
        const taskRef = collection(db, "tasks")
        const q = query(taskRef, orderBy("created", "desc"), where("userUid", "==", data?.uid))
        const unsub = onSnapshot(q, (snapshot) => {
          let list = []

          snapshot.forEach((doc) => {
            list.push({
              id: doc.id,
              task: doc.data().task,
              userUid: doc.data().userUid
            })
          })

          console.log(tasks)
          setTasks(list)
        })
      }
    }

    loadTasks()
  }, [])

  async function handleRegister(e) {
    e.preventDefault()

    if (task === "") {
      alert("Input Input your task!")
      return
    }

    if (edit?.id) {
      handleUpdateTask();
      return
    }

    await addDoc(collection(db, "tasks"), {
      task: task,
      created: new Date(),
      userUid: user?.uid
    }).then(() => {
      setTask("")
    }).catch((error) => {
      console.log({error: error})
    })
  }

  async function handleUpdateTask() {
    const docRef = doc(db, "tasks", edit?.id)
    await updateDoc(docRef, {
      task: task
    }).then(() => {
      setTask("")
      setEdit({})
    }).catch((error) => {
      console.log({error: error})
    })
  }

  async function handleLogout() {
    await signOut(auth)
  }

  async function deleteTask(id) {
    const docRef = doc(db, "tasks", id)
    await deleteDoc(docRef)
  }

  async function editTask(item) {
    setTask(item.task)
    setEdit(item)
  }

  return(
    <div className='admin-container'>
      <h1> My Tasks </h1>

      <form className="form" onSubmit={handleRegister}>
        <textarea 
          placeholder='Input your task...'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        {Object.keys(edit).length > 0 ? (
          <button className='btn-register' type='submit' style={{backgroundColor: '#6add39'}}> Update your task </button>
        ) : (
          <button className='btn-register' type='submit'> Register your task </button>
        )}
      </form>

      {tasks.map((item) => (
        <article key={item.id} className='list'>
          <p> {item.task} </p>

          <div>
            <button onClick={ () => editTask(item) } > Edit </button>
            <button onClick={ () => deleteTask(item.id) } className='btn-delete'> Complete </button>
          </div>
        </article>
      ))}

      <button className='btn-logout' onClick={handleLogout}> Logout </button>
    </div>
  )
}
