import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";
import { selectContact } from "../../Reducers/contactSlice";
import Btnedit from "../buttons/btnedit";
import { Cdata } from "./style";

interface ContactProps {
    selectedContacts: number[];
    setSelectedContacts: Dispatch<SetStateAction<number[]>>;
}

const Contact = ({ selectedContacts, setSelectedContacts, }: ContactProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const contacts = useSelector((state: RootState) => state.contacts.contacts);

    const handleChkBox = (id: number) => {
        setSelectedContacts((prevSelected) =>
        prevSelected.includes(id)
            ? prevSelected.filter((selectedId) => selectedId !== id)
            : [...prevSelected, id]
        );
    }; 

    const handleEdit = (id: number) => {
        dispatch(selectContact(id));
        navigate("/editing");
    };

    return (
        <>
            {contacts.map((contact) => (
                <Cdata key={contact.id}> 
                    <input type="checkbox" onChange={() => handleChkBox(contact.id)} checked={selectedContacts.includes(contact.id)} />
                    <div>
                        <p><strong>Nome Completo:</strong> {contact.nomeCompleto}</p>
                        <p><strong>Email:</strong> {contact.email}</p>
                        <p><strong>Telefone:</strong> {contact.telefone}</p>
                    </div>
                    <Btnedit onClick={() => handleEdit(contact.id)} />
                </Cdata>
            ))}
        </>
    );
};

export default Contact;
