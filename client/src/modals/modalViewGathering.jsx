import React, { useState } from "react";
import axios from "axios";
import ReactDom from "react-dom";
import Button from "../components/button";
import { XIcon } from "@heroicons/react/solid";
import profileImg from "../img/profile.png";
<<<<<<< HEAD
import Participant from "../components/participant";

const ModalViewGathering = ({ modalOpen, closeModal, selectedGathering }) => {
  const { title, town, place, date, time, location, author, participants } =
    selectedGathering;

  const [isCreator, SetIsCreator] = useState(false);

  //! redux로 로그인한 유저 id를 관리하고 creator.nickname? id? 와 redux의 정보가 같다면 삭제버튼 활성화 기능 추가 필요

=======

const ModalViewGathering = ({ modalOpen, closeModal, selectdGathering }) => {
  console.log(selectdGathering);
>>>>>>> Merge 를 위한 Commit
  if (!modalOpen) return null;
  return ReactDom.createPortal(
    <div className="container-modal">
      <div className="modal-large gap-1">
        <div className="relative w-full">
          <button
            className="absolute left-[93.5%] bottom-[4.5rem]"
            onClick={closeModal}
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-ro items-start gap-4 w-[669px] h-[379px]">
          <div className="flex flex-col items-center gap-4 w-[313px] h-[353px]">
            <div className="w-[313px] h-[313px] border-2">
              지도 API 추가 필요
            </div>
            <div className="flex flex-row items-center gap-1">
              <img src={profileImg} alt="err" className="w-5 h-5" />
<<<<<<< HEAD
              <div className="text-[16px]">{author.nickname}</div>
=======
              <div className="text-[16px]">USER_ID로 교체</div>
>>>>>>> Merge 를 위한 Commit
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 w-[340px] h-[379px]">
            <div className="w-[340px] h-[46px] flex border-2 rounded-2xl justify-center items-center">
<<<<<<< HEAD
              <div className="flex text-xl text-center">{title}</div>
            </div>
            <div className="w-[340px] h-[46px] flex border-2 rounded-2xl justify-center items-center">
              <div className="flex text-xl text-center">
                {town} {place}
              </div>
            </div>
            <div className="w-[340px] h-[46px] flex border-2 rounded-2xl justify-center items-center">
              <div className="flex text-xl text-center">{date}</div>
            </div>
            <div className="w-[340px] h-[46px] flex border-2 rounded-2xl justify-center items-center">
              <div className="flex text-xl text-center">{time}</div>
=======
              <div className="flex text-xl text-center">모임 제목 교체</div>
            </div>
            <div className="w-[340px] h-[46px] flex border-2 rounded-2xl justify-center items-center">
              <div className="flex text-xl text-center">모임 장소 교체</div>
            </div>
            <div className="w-[340px] h-[46px] flex border-2 rounded-2xl justify-center items-center">
              <div className="flex text-xl text-center">모임 날짜 교체</div>
            </div>
            <div className="w-[340px] h-[46px] flex border-2 rounded-2xl justify-center items-center">
              <div className="flex text-xl text-center">모임 시간 교체</div>
>>>>>>> Merge 를 위한 Commit
            </div>
            <div className="text-xs flex items-center text-center text-grey-80">
              참여자 목록
            </div>
            <div className="flex flex-col items-start gap-2">
<<<<<<< HEAD
              <div className="grid grid-cols-3 gap-1">
                {participants.map((participant, idx) => (
                  <Participant key={idx} participant={participant} />
                ))}
=======
              <div className="flex flex-row items-start gap-2">
                <div>참여자 교체</div>
                <div>참여자 교체</div>
                <div>참여자 교체</div>
              </div>
              <div className="flex flex-row items-start gap-2">
                <div>참여자 교체</div>
                <div>참여자 교체</div>
                <div>참여자 교체</div>
>>>>>>> Merge 를 위한 Commit
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <Button
                className={"btn btn-green"}
                children={"참여하기"}
              ></Button>
              참여한 모임이면 채팅, 모임 나가기 버튼 표시 필요
            </div>
          </div>
        </div>
      </div>
    </div>,

    document.getElementById("modal"),
  );
};

export default ModalViewGathering;
