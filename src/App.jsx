import "./App.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
function App() {
  return (
    <>
      <MessengerCustomerChat
        pageId="<PAGE_ID>"
        appId="<APP_ID>"
        htmlRef="<REF_STRING>"
      />
    </>
  );
}

export default App;
