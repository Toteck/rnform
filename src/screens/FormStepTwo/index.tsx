import { useRef } from "react";
import { Text, TextInput, View } from "react-native";

import { useForm } from "react-hook-form";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";

export function FormStepTwo() {
  const { navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const phoneRef = useRef<TextInput>(null);

  function handleNextStep(data: any) {
    navigate("formStepThree");
  }

  const onSubmitEditing = () => {
    handleSubmit(handleNextStep)();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas informações</Text>
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

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  );
}
