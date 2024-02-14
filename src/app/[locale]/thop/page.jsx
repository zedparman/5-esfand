import axios from "axios";

export default function SiaPage(){
  const res = axios.get("/api/auth/yago" , {})
  console.log(res.data)

  return (<h1>test</h1>)
}