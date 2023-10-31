import { Color } from "@/app/constants/color";

export interface ToDoButtonProps {
  title: string;
  onPress: () => void;
  colorVariant: Color;
  hasBorder: boolean;
}
