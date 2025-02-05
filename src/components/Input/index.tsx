import { forwardRef } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { Controller, UseControllerProps } from "react-hook-form";
type Props = {
  icon: keyof typeof Feather.glyphMap;
  errorMessage?: string;
  formProps: UseControllerProps;
  inputProps: TextInputProps;
};

const Input = forwardRef<TextInput, Props>(
  ({ icon, formProps, inputProps }, ref) => {
    return (
      <Controller
        render={({ field }) => (
          <View style={styles.group}>
            <View style={styles.icon}>
              <Feather name={icon} size={24} color={"red"} />
            </View>
            <TextInput
              ref={ref}
              value={field.value}
              onChangeText={field.onChange}
              style={styles.control}
              {...inputProps}
            />
          </View>
        )}
        {...formProps}
      />
    );
  }
);
export { Input };
