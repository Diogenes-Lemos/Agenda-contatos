import { Sbtntop } from "./style";

interface BtntopProps {
    text: string;
    bgColor?: string;
    onClick?: () => void;
}

const Btntop = ({ text, bgColor, onClick }: BtntopProps) => {
    return (
        <Sbtntop style={{ backgroundColor: bgColor }} onClick={onClick}>
            {text}
        </Sbtntop>
    );
};

export default Btntop;