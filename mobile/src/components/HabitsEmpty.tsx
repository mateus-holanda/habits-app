import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function HabitsEmpty() {
  const { navigate } = useNavigation();

  return (
    <>
      <Text className="text-zinc-400 text-base">
        There are no habits to display.
      </Text>
      <Text
        className="mt-4 text-violet-400 text-base underline active:text-violet-500"
        onPress={() => navigate("new")}
      >
        Create a new one.
      </Text>
    </>
  )
}