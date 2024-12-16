export interface Task {
    id?: number;
    title: string;
    prevision: string;
    isChecked: boolean;
    isEdit?: boolean;
}