import logo from "../../../../common/logo/logoAdvance.svg";
import picture from "../../assets/images/picturePicture.png";

export const Header = () => {
    return (
        <div className="md:h-[91px] xl:h-[91px] ls:h-[91px] bg-[#fff] flex justify-between items-center px-[.5em]">
            <div>
                <img src={logo} alt="logo picture" />
            </div>

            <div className="border rounded-[20px] md:w-[12em] h-[4em] flex gap-[.2em] justify-between px-[.5em] items-center">
                <img src={picture} alt="profile picture" className="w-[3em] h-[3em] rounded-[50em]"/>
                <p className="font-semibold text-[10pt]">Anania Augusto</p>
            </div>
        </div>
    )
}