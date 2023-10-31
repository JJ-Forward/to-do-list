export interface ToDoItemProps {
    index: number;
    title: string;
    isCompleted: boolean;
    isHidden: boolean;
    onHide: (index: number) => void;
    onRemove: (index: number) => void;
    onDone: (index: number) => void;
}