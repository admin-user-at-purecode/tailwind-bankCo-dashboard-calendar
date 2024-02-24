import Wallet from "../../component/wallet";
import CalenderFull from "../../component/calender/CalenderFull";

function Calender() {
  return (
    <>
      <main className="w-full xl:px-[48px] px-6 pb-6 xl:pb-[48px]pb-6 xl:pb-[48px] sm:pt-[156px] pt-[100px]">
        <CalenderFull />

        <div className="2xl:flex 2xl:space-x-[48px] mb-5"></div>
        <Wallet />
      </main>
    </>
  );
}

export default Calender;
