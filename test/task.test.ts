import { assert, describe, expect, it } from 'vitest'
import { Status, Task } from '../src/domain/task.js';

describe('task suite', () => {
  const task = new Task('1', 'Task 1', 'Description of Task 1');

    it('初期値が設定されていること', () => {
    assert.equal(task.getTitle(), "Task 1")
    assert.equal(task.getDescription(), "Description of Task 1")
    assert.equal(task.getDeadline(), undefined)
    assert.equal(task.getStatus(), Status.NOT_STARTED)
  })
    it('タイトルが更新されること', () => {
        task.updateTitle('Task 1 updated')
        assert.equal(task.getTitle(), "Task 1 updated")
    })
    it('説明が更新されること', () => {
        task.updateDescription('Description of Task 1 updated')
        assert.equal(task.getDescription(), "Description of Task 1 updated")
    })
    it('ステータスが更新されること', () => {
        task.updateStatus(Status.IN_PROGRESS)
        assert.equal(task.getStatus(), Status.IN_PROGRESS)
    })
    const selectedDate = new Date("2024-12-31"); 
    it('期日が設定されること', () => {  
        task.setDeadline(selectedDate)
        assert.equal(task.getDeadline(), selectedDate)
    })
    it('期日を3回延長できること', () => {
        task.postpone();
        task.postpone();
        task.postpone();
        assert.equal(task.getDeadline()!.toISOString(), new Date("2025-01-03").toISOString())
    })
    it('期日を4回延長できないこと', () => {
        assert.throws(() => {
            task.postpone();
        })
    })
    it('完了タスクのステータスは更新できないこと', () => {
        task.updateStatus(Status.COMPLETED)
        assert.throws(() => {
            task.updateStatus(Status.IN_PROGRESS)
        })
    })
})
