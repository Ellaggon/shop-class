import { useState, useContext, useRef } from "react"
import { ShopingCardContext } from "../../Context/Context"

function MyAccount () {
  const context = useContext(ShopingCardContext)
  const [view, setView] = useState("user-info")

  const account = localStorage.getItem("account")
  ? JSON.parse(localStorage.getItem("account")): null;
  const form = useRef(null)
  
  const editAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name : formData.get("name"),
      email : formData.get("email"),
      password : formData.get("password"),
    }
    // Update account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account',stringifiedAccount);
    context.setAccount(data)
  }

  const renderUserInfo = () => {
    return (
      <div className="w-80">
      <p>
        <span className="font-light text-sm">Name:</span>
        <span>{account?.name}</span>
      </p>
      <p>
        <span className="font-light text-sm">Email: </span>
        <span>{account?.email}</span>
      </p>
      <button
        className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
        onClick={() => setView("edit-user-info")}>
        Edit
      </button>
    </div>
    )
  }

  const renderEditUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col w-80 gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-light text-sm">Your Name:</label>
        <input 
          type="text"
          id="name"
          name="name"
          defaultValue={account?.name}
          placeholder="Peter"
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-light text-sm">Your Email:</label>
        <input 
          type="email"
          id="email"
          name="email"
          defaultValue={account?.email}
          placeholder="hi@helloWorld.com"
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-light text-sm">Your password:</label>
        <input 
          type="text"
          id="password"
          name="password"
          defaultValue={account?.password}
          placeholder="********"
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4" />
      </div>
      <button
        className="bg-black text-white w-full rounded-lg py-3"
        onClick={() => {setView("user-info"), editAccount()}}>
        Edit
      </button>
    </form>
    )
  }

  const renderView = () => view === "edit-user-info"? renderEditUserInfo(): renderUserInfo()

  return (
    <div>
      <h1 className="text-center">My Account</h1>
      { renderView() }
    </div>
  )
}

export default MyAccount