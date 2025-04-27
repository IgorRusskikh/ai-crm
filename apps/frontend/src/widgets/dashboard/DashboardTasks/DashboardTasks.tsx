'use client';

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  closestCenter,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';
import Container from 'apps/frontend/src/shared/components/common/Container';
import { FaCheck } from 'react-icons/fa6';
import { RxDragHandleDots2 } from 'react-icons/rx';
import styles from './DashboardTasks.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  selected: boolean;
}

const DashboardTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: uuidv4(), title: 'Задача 1', completed: false, selected: false },
    { id: uuidv4(), title: 'Задача 2', completed: false, selected: false },
    { id: uuidv4(), title: 'Задача 3', completed: false, selected: false },
    { id: uuidv4(), title: 'Задача 4', completed: false, selected: false },
    { id: uuidv4(), title: 'Задача 5', completed: false, selected: false },
  ]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setTasks((tasks) => {
        const oldIndex = tasks.findIndex((task) => task.id === active.id);
        const newIndex = tasks.findIndex((task) => task.id === over.id);

        return arrayMove(tasks, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  };

  const toggleTaskSelection = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, selected: !task.selected } : task
      )
    );
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const activeTask = tasks.find((task) => task.id === activeId);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Container>
        <Container.Header StartContent={StartContent} />

        <div className={styles.tasksContainer}>
          <SortableContext
            items={tasks.map((task) => task.id)}
            strategy={verticalListSortingStrategy}
          >
            {tasks.map((task) => (
              <SortableTaskItem
                key={task.id}
                task={task}
                onSelect={toggleTaskSelection}
                onComplete={toggleTaskCompletion}
              />
            ))}
          </SortableContext>
        </div>
      </Container>

      <DragOverlay>
        {activeId ? (
          <div className={styles.taskItem}>
            <h4 className={styles.taskTitle}>{activeTask?.title}</h4>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DashboardTasks;

function StartContent() {
  return (
    <div className={`${styles.startContent}`}>
      <div className={`${styles.iconContainer}`}>
        <FaCheck className={`${styles.icon}`} />
      </div>

      <h3 className={`${styles.title}`}>Задачи</h3>
    </div>
  );
}

interface SortableTaskItemProps {
  task: Task;
  onSelect: (id: string) => void;
  onComplete: (id: string) => void;
}

function SortableTaskItem({
  task,
  onSelect,
  onComplete,
}: SortableTaskItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className={styles.taskItemContainer}>
      <div className={`${styles.taskItem}`}>
        <div className={styles.taskCheckboxes}>
          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              className={`${styles.checkbox} ${styles.completionCheckbox}`}
              checked={task.completed}
              onChange={() => onComplete(task.id)}
            />
            <span
              className={`${styles.checkmark} ${styles.completionCheckmark}`}
            ></span>
          </label>
        </div>

        <h4
          className={`${styles.taskTitle} ${
            task.completed ? styles.completedTask : ''
          }`}
        >
          {task.title}
        </h4>
      </div>

      <div className={`${styles.taskItemActions}`}>
        <button
          className={`${styles.taskItemAction}`}
          {...attributes}
          {...listeners}
        >
          <RxDragHandleDots2 className={`${styles.taskItemActionIcon}`} />
        </button>
      </div>
    </div>
  );
}
