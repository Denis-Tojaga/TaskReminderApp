export interface Task {
    //reason why we put this "?" is that we won't need the ID field when we initialize an object of Task type, it is optional
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}