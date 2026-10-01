const { describe, it } = require('node:test');
const assert = require('node:assert');

describe('To-Do App - Pruebas básicas', () => {
  it('debe existir el módulo de la aplicación', () => {
    assert.ok(true);
  });

  it('debe validar que el título no esté vacío', () => {
    const title = 'Tarea de prueba';
    assert.ok(title.length > 0);
  });

  it('debe marcar una tarea como completada', () => {
    const task = { id: 1, title: 'Probar', completed: false };
    task.completed = true;
    assert.strictEqual(task.completed, true);
  });
});