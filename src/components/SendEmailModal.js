import {useState} from "react";
import axios from "axios";

const SendEmailModal = ({closeEmailModal, updateEmails}) => {

    const sender = "anthony.casper@galvanize.com"
    const [recipient, setRecipient] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')


    const sendEmail = async () => {
        //send the email
        const data = {
            sender,
            recipient,
            subject,
            message
        }
        console.log(data)
        await axios.post(`${process.env.REACT_APP_API}/send`, data)

        await updateEmails();

        closeEmailModal();
    }

    return (
        <div className={"modal"}>
            <form>
                <label htmlFor={"to"}>To: </label>
                <input name={"to"}
                       value={recipient}
                       onChange={(e) => {setRecipient(e.target.value)}}/>
                <br/>
                <label htmlFor={"subject"}>Subject: </label>
                <input name={"subject"}
                       value={subject}
                       onChange={(e) => {setSubject(e.target.value)}}/>
                <br/>
                <label htmlFor={"message"}>Message: </label>
                <br/>
                <textarea name={"message"}
                          rows={20}
                          value={message}
                          onChange={(e) => {setMessage(e.target.value)}}/>
            </form>
            <button className={"btn-bot"} id={"send"} onClick={sendEmail}>Send</button>
            <button className={"btn-bot"} onClick={closeEmailModal}>Close</button>
        </div>
    )
}

export default SendEmailModal