import Email from "./Email";

const Inbox = ({emails, openDetailedModal}) => {
    return (
        <table className={"inbox"}>
            <thead>
            <tr>
                <th>Sender</th>
                <th>Recipient</th>
                <th>Subject</th>
            </tr>
            </thead>
            <tbody>
            {emails.map((email) => {
                return (
                    <Email email={email}
                           key={email.id}
                           openDetailedModal={openDetailedModal}/>
                )
            })}
            </tbody>
        </table>
    );
}

export default Inbox;