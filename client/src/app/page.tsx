import s from './home.module.css'
import { Task } from './components/task/Task'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={s.taskContainer}>

      <div className={s.taskSettings}>

        <div className={s.topBar}>
          <button className={s.button_today} role="button">
            <Image src='celendar.svg' alt='celendar Icon' width={30} height={20} />
            Today
          </button>
          <button className={s.button_today} role="button">
            <Image src='done.svg' alt='done Icon' width={30} height={20} />
            All
          </button>
          <button className={s.button_today} role="button">
            <Image src='filter.svg' alt='filter Icon' width={30} height={20} />
            Date
          </button>
        </div>

        <div className={s.bottomBar}>
          <button className={s.button_today} role="button">
            <Image src='addTask.svg' alt='addTask Icon' width={30} height={20} />
            Add task
          </button>
        </div>

      </div>

      <div className={s.taskBoard}>
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )
}
