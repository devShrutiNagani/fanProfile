// DataContext.tsx
export interface DataContextType {
  userData: {
    name: string;
    email: string;
  };
  setUserData: (userData: {name: string; email: string}) => void;
  handleLinkPress: (url: string) => void;
}
