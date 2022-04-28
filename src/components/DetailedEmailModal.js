const DetailedEmailModal = ({email, closeDetailedModal}) => {
    return (
        <div className={"modal"}>
            <div>From: {email.sender}</div>
            <div>To: {email.recipient}</div>
            <div>Subject: {email.subject}</div>
            <div>Message: </div>
            <div>{email.message}</div>
            <button className={"btn-bot"} onClick={() => {closeDetailedModal(null)}}>close</button>
        </div>
    )
}

export default DetailedEmailModal;