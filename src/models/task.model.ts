export class Task {
    id: number = 0; // Initialize with a default value
    title: string = '';
    description: string = '';
    completed: boolean = false;  // default is false
    editing: boolean = false;   // default is false

    constructor(id: number, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
}
