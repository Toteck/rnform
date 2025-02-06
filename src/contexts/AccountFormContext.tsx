import { createContext, ReactNode, useState } from "react";

export type AccountProps = {
  name?: string;
  email?: string;
  phone?: string;
  birth?: string;
  password?: string;
  passwordConfirmation?: string;
};

type AccountFormContextDataProps = {
  accountFormData: AccountProps;
  updateFormData: (value: AccountProps) => void;
};

const AccountFormContext = createContext<AccountFormContextDataProps>(
  {} as AccountFormContextDataProps
);

type AccountFormContextProviderProps = {
  children: ReactNode;
};

function AccountProvider({ children }: AccountFormContextProviderProps) {
  const [accountFormData, setAccountFormData] = useState<AccountProps>(
    {} as AccountProps
  );

  function updateFormData(data: AccountProps) {
    setAccountFormData((prevState) => ({ ...prevState, ...data }));
  }
  return (
    <AccountFormContext.Provider
      value={{
        accountFormData,
        updateFormData,
      }}
    >
      {children}
    </AccountFormContext.Provider>
  );
}

export { AccountProvider, AccountFormContext };
