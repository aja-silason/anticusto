import logo from "../../../../common/logo/logoAdvance.svg";
import picture from "../../assets/images/picturePicture.png";
import logoAnticusto from "../../../../assets/anticost-logo.jpg";

export const Header = () => {
    return (
        <div className="md:h-[91px] xl:h-[91px] ls:h-[91px] bg-[#fff] flex justify-between items-center px-[1em]">
            <div>
                <img src={logoAnticusto} alt="logo picture" className="w-[100px]" />
            </div>

            <div className="border rounded-[20px] md:w-[12em] h-[4em] flex gap-[.2em] justify-between px-[.5em] items-center">
                <img src={picture} alt="profile picture" className="w-[3em] h-[3em] rounded-[50em]"/>
                <p className="font-semibold text-[10pt]">Anania Augusto</p>
            </div>
        </div>
    )
}