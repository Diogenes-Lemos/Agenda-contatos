import * as S from './style'
import { useState } from 'react'

const SideBar = () => {
    const [selecionado, setSelecionado] = useState<number | null>(null);

    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); 

    return (
        <S.Bar>
            {letras.map((letra, index) => (
                <S.Link 
                    key={index} 
                    id={`link-${index}`} 
                    onClick={() => setSelecionado(index)} 
                    selecionado={selecionado === index}
                >
                    <p>{letra}</p>
                </S.Link>
            ))}
        </S.Bar>
    );
};

export default SideBar;
