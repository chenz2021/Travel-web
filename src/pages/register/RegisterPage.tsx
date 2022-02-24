import React from "react";
import { UserLayout } from "../../layouts/userLayout";
import { RegisterForm } from ".";

export const RegisterPage : React.FC = () => {
    return <UserLayout><RegisterForm/></UserLayout>;
}