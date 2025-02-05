import { useRef } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { useForm } from "react-hook-form";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { styles } from "./styles";

export function FormStepOne() {
  const { control, handleSubmit } = useForm();

  const emailRef = useRef<TextInput>(null);

  function handleNextStep(data: any) {
    console.log(data);
  }

  const onSubmitEditing = () => {
    handleSubmit(handleNextStep)();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar sua conta</Text>
      <Input
        icon="user"
        formProps={{ name: "name", control }}
        inputProps={{
          placeholder: "Nome",
          onSubmitEditing: () => emailRef.current?.focus(),
          returnKeyType: "next",
        }}
      />
      <Input
        ref={emailRef}
        icon="mail"
        formProps={{ name: "email", control }}
        inputProps={{
          placeholder: "E-mail",
          onSubmitEditing: onSubmitEditing,
        }}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  );
}
