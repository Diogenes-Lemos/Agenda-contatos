import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import * as S from "../styles/styles"
import Btntop from "../../Components/buttons/btntop"
import { Btnbar } from "../../Components/Clist/style"
import { addContact } from "../../Reducers/contactSlice"

const New = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nomeCompleto: "",
        email: "",
        telefone: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    };

    const handleSave = () => {
        if (formData.nomeCompleto && formData.email && formData.telefone) {
            dispatch(addContact(formData));
            navigate("/");
        } else {
            alert("Todos os campos devem ser preenchidos")
        }
    };

    return (
        <S.EditArea>
            <Btnbar>
                <Btntop text="Salvar" onClick={handleSave}/>
                <Btntop text="Cancelar" bgColor='#e84118' onClick={() => navigate(-1)} />
            </Btnbar>
            <S.EditTitle>
                Criando um novo contato
            </S.EditTitle>
            <S.EditForm>
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" id="nomeCompleto" value={formData.nomeCompleto} onChange={handleChange} />

                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" value={formData.email} onChange={handleChange} />

                <label htmlFor="telefone">Telefone</label>
                <input type="text" id="telefone" value={formData.telefone} onChange={handleChange} />
            </S.EditForm>
        </S.EditArea>
    )
}

export default New