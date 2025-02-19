import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setSelecionado } from "../../Reducers/sidebarSlice";
import * as S from './style'

type sBarProps = {
    sItem: number;
    setsItem: (value: number) => void;
}

const SideBar = ({ sItem, setsItem, }: sBarProps) => {
    const dispatch = useDispatch();
    const selecionado = useSelector((state: RootState) => state.sidebar.selecionado);

    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); 

    return (
        <S.Bar>
            {letras.map((letra, index) => (
                <S.Link 
                    key={index} 
                    id={`link-${index}`} 
                    onClick={() => {
                        dispatch(setSelecionado(index + 1));
                        setsItem(index + 1);
                    }}
                    selecionado={selecionado === index + 1} 
                >
                    <p>{letra}</p>
                </S.Link>
            ))}
        </S.Bar>
    );
};

export default SideBar;
