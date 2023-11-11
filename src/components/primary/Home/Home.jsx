/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Home/Home.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Wednesday, October 4th 2023, 1:49:02 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setActivePath} from "../../../features/slice/activePathSlice";
import CongratulationComponents from "../Dashboard/CongratulationDashBoard/CongratulationComponents";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePath("Home"));
    return () => {};
  }, []);

  return <CongratulationComponents />;
};

export default Home;
