import { v4 as uuidv4 } from "uuid";

export const generateState = (): string => {
    return uuidv4();
}
