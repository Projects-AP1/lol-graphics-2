import { ChangeEventHandler } from "react";

export default interface BasicInputProps {
    label?: string;
    variant?: "standard" | "filled" | "outlined" | undefined;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    id?: string;
    name: string;
    type?: string;
};