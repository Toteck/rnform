import { Text, TextInput, View } from "react-native";

import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Progress } from "../../components/Progress";

import { styles } from "./styles";

export function FormStepTwo() {
  const { navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext<AccountProps>();

  const phoneRef = useRef<TextInput>(null);

  function handleNextStep() {
    navigate("formStepThree");
  }

  const onSubmitEditing = () => {
    handleSubmit(handleNextStep)();
  };

  return (
    <View style={styles.container}>
      <Progress progress={60} />
      <Text style={styles.title}>Sobre você</Text>
      <Input
        icon="calendar"
        error={errors.birth?.message}
        formProps={{
          name: "birth",
          control,
          rules: {
            required: "Data de nascimento é obrigatório",
            pattern: {
              value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/,
              message: "Data de nascimento inválida",
            },
          },
        }}
        inputProps={{
          placeholder: "Data de nascimento",
          onSubmitEditing: () => phoneRef.current?.focus(),
          returnKeyType: "next",
        }}
      />
      <Input
        ref={phoneRef}
        icon="phone"
        error={errors.phone?.message}
        formProps={{
          name: "phone",
          control,
          rules: {
            required: "Telefone é obrigatório",
            pattern: {
              value: /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/,
              message: "Telefone inválido",
            },
          },
        }}
        inputProps={{
          placeholder: "Telefone",
          onSubmitEditing: onSubmitEditing,
        }}
      />

      <Button
        title="Continuar"
        icon="arrow-right"
        onPress={handleSubmit(handleNextStep)}
      />
    </View>
  );
}
