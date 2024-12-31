export enum Status {
    NOT_STARTED,
    IN_PROGRESS,
    COMPLETED
}

export class Task {
    private id: string;
    private title: string;
    private description: string;    
    private deadline?: Date;
    private postponedCount: number = 0;
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

    public getDeadline(): Date | undefined {
        return this.deadline;;
    }

    public getStatus(): Status {
        return this.status;;
    }

    public updateTitle(title: string): void {
        this.title = title;
    }

    public setDeadline(deadline: Date): void {
        if(this.deadline !== undefined) {
            throw new Error('Cannot set deadline for a task that already has a deadline');
        }
        this.deadline = deadline;
    }

    public postpone(): void {
        if(this.deadline === undefined) {
            throw new Error('Cannot postpone a task without a deadline');
        }
        if(this.postponedCount >= 3) {
            throw new Error('Cannot postpone a task more than 3 times');
        }
        this.deadline.setDate(this.deadline.getDate() + 1);
        this.postponedCount++;
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