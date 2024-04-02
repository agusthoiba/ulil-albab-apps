import { createContext } from 'react';
import { logger } from "react-native-logs";
const log = logger.createLogger();

export const LogContext = createContext(log);
// export const AuthContext = createContext(null);