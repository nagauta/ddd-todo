import { assert, describe, expect, it } from 'vitest'
import { Status, Task } from '../src/domain/task.js';

describe('task suite', () => {
  const task = new Task('1', 'Task 1', 'Description of Task 1');
    it('初期値が設定されていること', () => {
    assert.equal(task.getTitle(), "Task 1")
    assert.equal(task.getDescription(), "Description of Task 1")
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
    it('完了タスクのステータスは更新できないこと', () => {
        task.updateStatus(Status.COMPLETED)
        assert.throws(() => {
            task.updateStatus(Status.IN_PROGRESS)
        })
    })
})
