import { useRef } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { useForm } from "react-hook-form";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { styles } from "./styles";

export function FormStepTwo() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const phoneRef = useRef<TextInput>(null);

  function handleNextStep(data: any) {
    console.log(data);
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
