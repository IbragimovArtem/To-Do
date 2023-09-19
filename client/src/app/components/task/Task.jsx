import Image from 'next/image'
import s from './Task.module.css'


const Task = () => (
    <div className={s.task}>
        <Image src='completed.svg' alt='Completed Icon' width={30} height={30} />
        <div className={s.task_name}>
            Task name
        </div>
        <div className={s.task_date}>
            Today at 15:19
            <Image src='settings.svg' alt='Settings Icon' width={30} height={20} />
        </div>
    </div>
)

export { Task }