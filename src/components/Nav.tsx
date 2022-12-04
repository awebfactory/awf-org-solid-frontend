import { A } from "solid-start"

function Nav() {
  return (
    <nav class="m-1 p-1 flex space-x-4">
      <A href="/">Home</A>
      <A href="/about">About</A>
    </nav>
  )
}

export default Nav
