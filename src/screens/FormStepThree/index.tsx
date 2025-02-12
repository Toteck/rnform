import { Text, TextInput, View } from "react-native";

import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Progress } from "../../components/Progress";

import { styles } from "./styles";

export function FormStepThree() {
  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useFormContext<AccountProps>();

  const passwordConfirmationRef = useRef<TextInput>(null);

  function handleNextStep(data: AccountProps) {
    console.log(data);
    navigate("finish");
  }

  const onSubmitEditing = () => {
    handleSubmit(handleNextStep)();
  };

  function validationPasswordConfirmation(passwordConfirmation: string) {
    const { password } = getValues();

    return password === passwordConfirmation || "As senhas devem ser iguais.";
  }

  return (
    <View style={styles.container}>
      <Progress progress={100} />
      <Text style={styles.title}>Escolha sua senha</Text>
      <Input
        icon="key"
        error={errors.password?.message}
        formProps={{
          name: "password",
          control,
          rules: {
            required: "Senha é obrigatório",
            minLength: {
              value: 6,
              message: "A senha deve ter pelo menos 6 dígitos.",
            },
          },
        }}
        inputProps={{
          placeholder: "Senha",
          onSubmitEditing: () => passwordConfirmationRef.current?.focus(),
          returnKeyType: "next",
          secureTextEntry: true,
        }}
      />
      <Input
        ref={passwordConfirmationRef}
        icon="key"
        error={errors.passwordConfirmation?.message}
        formProps={{
          name: "passwordConfirmation",
          control,
          rules: {
            required: "Confirme a senha.",
            validate: validationPasswordConfirmation,
          },
        }}
        inputProps={{
          placeholder: "Confirme a senha.",
          onSubmitEditing: onSubmitEditing,
          secureTextEntry: true,
        }}
      />

      <Button
        title="Finalizar"
        icon="check"
        onPress={handleSubmit(handleNextStep)}
      />
    </View>
  );
}
