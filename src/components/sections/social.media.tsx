import { FaFacebook } from "react-icons/fa6";
import { SiYoutubeshorts } from "react-icons/si";

interface IProps {
    youtube: string;
    facebook: string;
}

const SocialMedia = (props: IProps) => {
    const { youtube, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={youtube} target='_blank' className="highlight" title="Youtube Nghĩa Kaedehara">
                <SiYoutubeshorts size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Quang Nghĩa">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;