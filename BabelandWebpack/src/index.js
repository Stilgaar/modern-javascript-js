import { addTitle, styleBody, contact } from './dom'
import users, { getPremUsers } from './data'

addTitle("yespapa")
styleBody()
console.log(users)
const premUsers = getPremUsers(users)
