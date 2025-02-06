import { useFormContext } from "react-hook-form";
import { Text, View } from "react-native";

export function Finish() {
  const { getValues } = useFormContext<AccountProps>();
  const { name, email, birth, phone, password, passwordConfirmation } =
    getValues();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18 }}>Name: {name}</Text>
      <Text style={{ fontSize: 18 }}>E-mail: {email}</Text>
      <Text style={{ fontSize: 18 }}>Data de nascimento: {birth}</Text>
      <Text style={{ fontSize: 18 }}>Telefone: {phone}</Text>
      <Text style={{ fontSize: 18 }}>
        Senha: {password} / {passwordConfirmation}
      </Text>
    </View>
  );
}
