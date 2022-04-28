const Email = ({email, openDetailedModal}) => {
    return (
        <tr onClick={() => {openDetailedModal(email)}}>
            <td>{email.sender}</td>
            <td>{email.recipient}</td>
            <td>{email.subject}</td>
        </tr>
    );
}

export default Email;