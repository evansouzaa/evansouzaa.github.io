import { Box } from "./style";

type Props = { children: React.ReactNode };

export const MainPage: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      { children }
    </Box>
  );
}