import { education } from "../main/education"
import { experience } from '../main/experience'
import { portfolio } from '../main/portfolio'
import { allTags } from './function'

const list = [education, experience, portfolio]
export const uniqueFields = allTags(list, "fields")

console.log(uniqueFields)