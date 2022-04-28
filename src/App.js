import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Inbox from "./components/Inbox";
import DetailedEmailModal from "./components/DetailedEmailModal";
import SendEmailModal from "./components/SendEmailModal";

function App() {

  const [emails, setEmails] = useState([]);
  const [currentEmail, setCurrentEmail] = useState(null);
  const [isComposingEmail, setIsComposingEmail] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getEmails();
  }, [])

  const getEmails = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API}/emails`)
    setEmails(data);
  }

  const toggleDetailedModal = (email) => {
    setCurrentEmail(email);
  }

  const toggleSendEmailModal = () => {
    setIsComposingEmail(!isComposingEmail);
  }

  return (
    <div>
      <h1 className={"title"}>gMail</h1>
      <label htmlFor={"search"}>Search: </label>
      <input name={"search"}
             value={searchValue}
             onChange={(e) => setSearchValue(e.target.value)}/>
      <Inbox emails={emails.filter((email) => {
          return JSON.stringify(email).includes(searchValue)
      })}
             openDetailedModal={toggleDetailedModal}/>
        {currentEmail && <DetailedEmailModal email={currentEmail} closeDetailedModal={toggleDetailedModal}/>}
        {isComposingEmail && <SendEmailModal closeEmailModal={toggleSendEmailModal} updateEmails={getEmails}/>}
      <button className={"btn-ctr"} onClick={toggleSendEmailModal}>Send Email</button>
    </div>
  );
}

export default App;
