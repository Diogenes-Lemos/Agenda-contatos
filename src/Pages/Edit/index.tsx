import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { updateContact, cancelEditing } from "../../Reducers/contactSlice";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/styles";
import Btntop from "../../Components/buttons/btntop";
import { Btnbar } from "../../Components/Clist/style";
import { useState } from "react";

const Editing = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedContact = useSelector((state: RootState) => state.contacts.selectedContact);

    const [formData, setFormData] = useState({
    nomeCompleto: selectedContact?.nomeCompleto || "",
    email: selectedContact?.email || "",
    telefone: selectedContact?.telefone || "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSave = () => {
        if (selectedContact) {
            dispatch(updateContact({ ...selectedContact, ...formData }));
            navigate("/");
        }
    };

    const handleCancel = () => {
        dispatch(cancelEditing());
        navigate("/");
    };

    return (
        <S.EditArea>
            <Btnbar>
                <Btntop text="Salvar" onClick={handleSave} />
                <Btntop text="Cancelar" bgColor="#e84118" onClick={handleCancel} />
            </Btnbar>
            <S.EditTitle>Editando o contato</S.EditTitle>
            <S.EditForm>
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" id="nome" value={formData.nomeCompleto} onChange={handleChange} />

                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" value={formData.email} onChange={handleChange} />

                <label htmlFor="telefone">Telefone</label>
                <input type="text" id="telefone" value={formData.telefone} onChange={handleChange} />
            </S.EditForm>
    </S.EditArea>
  );
};

export default Editing;
