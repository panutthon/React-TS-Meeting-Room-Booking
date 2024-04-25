import { Link } from "react-router-dom";

import {
  selectAuthState,
  updateProfileAction,
} from "../redux-toolkit/auth/auth-slice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux-toolkit/hooks";

import { Button } from '@chakra-ui/react'

function AboutPage() {
  const { profile, email } = useSelector(selectAuthState);

  const dispatch = useAppDispatch();
  const updateProfile = () => {
    dispatch(updateProfileAction());
  };

  return (
    <>
      <h1>About Page</h1>
      <p>
        {profile} {email}{" "}
      </p>
      <Button colorScheme='teal' size='xs' onClick={updateProfile}>Update profile</Button>
      <Link to="/" replace={true}>
        Go to Home Page{" "}
      </Link>
    </>
  );
}

export default AboutPage;
