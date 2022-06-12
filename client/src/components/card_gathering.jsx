import React from "react";
import defaultImg from "../img/profile.png";

const card_gathering = ({ props, onClick }) => {
<<<<<<< HEAD
  const { date, time, town, place, title, author, location } = props;
=======
  const { date, time, town, place, title, creator, location } = props;
>>>>>>> Merge 를 위한 Commit
  return (
    <>
      <div
        className="w-80 h-60 m-2 rounded-2xl border-2 border-grey-50 bg-white shadow-lg flex flex-col"
        onClick={onClick}
      >
        <div className="pt-3 pl-5 flex flex-row">
          <div className="h-full w-full flex flex-row items-center gap-2 text-sm text-grey-80">
            <div>{date}</div>
            <div>|</div>
            <div>{time}</div>
          </div>
        </div>
        <div className="h-full w-full flex flex-col items-center mt-7">
          <div className="text-xl font-medium">{town}</div>
          <div className="text-lg">{place}</div>
          <div className="text-sm">{title}</div>
        </div>
        <div className="flex flex-row place-content-center gap-4 items-center m-2">
<<<<<<< HEAD
          <img className="h-8 w-8" src={author.profileImg} alt="err" />
          <div className=" text-lg">{author.nickname}</div>
=======
          <img className="h-8 w-8" src={creator.profileImg} alt="err" />
          <div className=" text-lg">{creator.nickname}</div>
>>>>>>> Merge 를 위한 Commit
        </div>
      </div>
    </>
  );
};

card_gathering.defaultProps = {
  date: "7월 13일",
  time: "7:00 PM",
  town: "강남구",
  place: "학동공원",
  title: "가볍게 줍깅하실 분 구해요!",
  profileImg: defaultImg,
  nickname: "hound_bae",
};

export default card_gathering;
