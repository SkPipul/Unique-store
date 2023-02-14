import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <div>
        
      <MessengerCustomerChat
        pageId="100083158557902"
        appId="914690736626725"
      />
      </div>
    </div>
  );
}

export default App;
