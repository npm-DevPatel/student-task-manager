// Drag and drop reordering for task items

const ddTaskList = document.getElementById("taskList");
let dragSrcEl = null;

function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  this.classList.add('dragging');
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');
}

function handleDrop(e) {
  e.stopPropagation();

  if (dragSrcEl && dragSrcEl !== this) {
    const children = Array.from(ddTaskList.children);
    const srcIndex = children.indexOf(dragSrcEl);
    const targetIndex = children.indexOf(this);

    if (srcIndex < 0 || targetIndex < 0) return;

    if (srcIndex < targetIndex) {
      ddTaskList.insertBefore(dragSrcEl, this.nextSibling);
    } else {
      ddTaskList.insertBefore(dragSrcEl, this);
    }

    // Persist new order and reapply filters
    if (typeof saveTasks === 'function') saveTasks();
    if (typeof applyFilter === 'function') applyFilter();
  }

  return false;
}

function handleDragEnd(e) {
  this.classList.remove('dragging');
  ddTaskList.querySelectorAll('.task-item').forEach(item => item.classList.remove('over'));
}

function addDragHandlers(item) {
  if (!item) return;
  item.setAttribute('draggable', true);
  item.removeEventListener('dragstart', handleDragStart);
  item.removeEventListener('dragenter', handleDragEnter);
  item.removeEventListener('dragover', handleDragOver);
  item.removeEventListener('dragleave', handleDragLeave);
  item.removeEventListener('drop', handleDrop);
  item.removeEventListener('dragend', handleDragEnd);

  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragenter', handleDragEnter);
  item.addEventListener('dragover', handleDragOver);
  item.addEventListener('dragleave', handleDragLeave);
  item.addEventListener('drop', handleDrop);
  item.addEventListener('dragend', handleDragEnd);
}

function enableDragAndDrop() {
  const items = ddTaskList.querySelectorAll('.task-item');
  items.forEach(addDragHandlers);
}

// Watch for dynamically added tasks and attach handlers
const observer = new MutationObserver(mutations => {
  let added = false;
  mutations.forEach(m => {
    if (m.addedNodes && m.addedNodes.length) added = true;
  });
  if (added) enableDragAndDrop();
});

observer.observe(ddTaskList, { childList: true });

// Initial enable
enableDragAndDrop();
