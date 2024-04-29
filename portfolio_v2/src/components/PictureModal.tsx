import { PictureModalInterface } from "../interfaces"

interface PictureModalProps {
    pictureURL: string
    setModal: React.Dispatch<React.SetStateAction<PictureModalInterface>>
}

export default function PictureModal({pictureURL, setModal}: PictureModalProps) {
    return (
        <div className="modal" onClick={() => setModal({
            pictureURL: '',
            isShowing: false,
        })}>
            <img className="modalPicture" src={pictureURL}/>
        </div>
    )
}