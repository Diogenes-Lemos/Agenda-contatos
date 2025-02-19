import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'

import * as S from './style'
import Contact from '../Contacts'
import Btntop from '../buttons/btntop'
import { deleteContacts } from '../../Reducers/contactSlice'
import { RootState } from '../../redux/store/store'
import { setSelecionado } from '../../Reducers/sidebarSlice'

interface ClistProps {
    filterLetter: string | null;
    setFilterLetter: (letter: string | null) => void;
}

const Clist = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const contacts = useSelector((state: RootState) => state.contacts.contacts);

    const [selectedContacts, setSelectedContacts] = useState<number[]>([]);

    const handleDelete = () => {
        if (!selectedContacts || selectedContacts.length === 0) {
            alert("nenhum item selecionado");
            return;
        }
        dispatch(deleteContacts(selectedContacts));
        setSelectedContacts([]);
    };

    return (
        <S.Carea>
            <S.Btnbar>
                <Btntop text="Novo" onClick={() => navigate("/novo")} />
                <Btntop text="Exibir todos" bgColor="#ffda79"  onClick={() => dispatch(setSelecionado(0))}/>
                <Btntop text="Excluir" bgColor='#e84118' onClick={ handleDelete } />
            </S.Btnbar>
            <S.Clist>
                <Contact selectedContacts={selectedContacts} setSelectedContacts={setSelectedContacts} />
            </S.Clist>
        </S.Carea>
    )
}

export default Clist