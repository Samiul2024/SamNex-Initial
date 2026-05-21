import MainRoutes from "./routes/MainRoutes"

import ChatWidget from "./components/chat/ChatWidget"
import ScrollButtons from "./components/ui/ScrollButtons"

function App() {
  return (
    <>
      <MainRoutes />
      <ScrollButtons />
      <ChatWidget />
    </>
  )
}

export default App