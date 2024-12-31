export enum Status {
    NOT_STARTED,
    IN_PROGRESS,
    COMPLETED
}

export class Task {
    private id: string;
    private title: string;
    private description: string;    
    private status: Status;

    constructor(id: string, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = Status.NOT_STARTED;
    }

    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getStatus(): Status {
        return this.status;;
    }

    public updateTitle(title: string): void {
        this.title = title;
    }

    public updateDescription(description: string): void {
        this.description = description;
    }

    public updateStatus(nextStatus: Status): void {
        if(this.status === Status.COMPLETED) {
            throw new Error('Cannot update status of a completed task');
        }
        this.status = nextStatus;
    }
}