"use client";

import React, { FC, useState } from "react";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Profile from "../components/Profile/Profile";
import { useSelector } from "react-redux";
import avatar from "../../public/next.svg";

type Props = {};

const page: FC<Props> = (props) => {
  const { user } = useSelector((state: any) => state.auth);
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");
  return (
    <div>
      <Protected>
        <Heading
          title={`${user?.name} profile - Elearning`}
          description="ELearning is a platform for students to learn and get help from teachers"
          keywords="Prograaming, MERN, Redux, Machine Learning"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={user} avatar={avatar} />
      </Protected>
    </div>
  );
};
export default page;
