import { Sbtnedit } from "./style";

interface BtneditProps {
    onClick?: () => void; 
}

const Btnedit = ({ onClick }: BtneditProps) => {
    return (
        <Sbtnedit onClick={onClick} />
    )
};

export default Btnedit