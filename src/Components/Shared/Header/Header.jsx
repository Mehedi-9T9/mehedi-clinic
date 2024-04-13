import { FiPhoneCall } from "react-icons/fi";
import { FaAmbulance } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import moment from 'moment';
const Header = () => {
    const photo = '../../../../public/img/mhmeded1i.png'
    const currentTime = moment().format('LT');
    return (
        <div className=" bg-red-700 md:flex md:px-[100px] md:py-6 md:gap-x-[300px] justify-between items-center p-5 ">
            <div className="flex items-center gap-x-6">
                <img className=" h-[100px] w-[100px]" src={photo} alt="" />
                <div>
                    <h2 className="text-4xl font-roboto text-white font-medium">Mehedi Clinic <sup className="text-black font-bold">+</sup></h2>
                    <div className="flex items-center">
                        <FaLocationDot className="text-2xl" />
                        <p className="font-poppins text-xl">Manda Naogaon</p>

                    </div>
                    <div className="text-xl text-back font-medium">{currentTime}</div>

                </div>
            </div>
            <div className=" space-y-4 border-t-2 md:border-none p-5 md:p-0">
                <div className="flex items-center gap-x-4 text-white">
                    <FiPhoneCall className="text-3xl " />
                    <p className="text-2xl ">01792322620</p>
                </div>
                <div className="flex items-center gap-x-4 text-white">
                    <FaAmbulance className="text-3xl" />
                    <p className="text-2xl">01909054226</p>
                </div>

            </div>
        </div>
    );
};

export default Header;