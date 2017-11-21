'use strict';

class Observable {
  constructor(
    ...observers // Observer instances
  ) {
    this.observers = observers || [];
  }

  notifyObservers() {
    if (this.info)
      this.observers.forEach(observer => observer.update(this.info));
  }

  set data(
    value // any type, data to inform about
  ) {
    this.info = value;
    this.notifyObservers();
  }

  get data() {
    return this.info;
  }

  /**
   * Returns an index of the pushed element
   */
  addObserver(obs) {
    this.observers.push(obs);
    return this.observers.length - 1;
  }

  /**
   * Returns removed observer
   */
  removeObserver(index) {
    return this.observers.splice(index, 1)[0];
  }
}


class Observer {
  constructor(
    listener // function, will be called by observer
  ) {
    this.listener = listener;
  }

  update(data) {
    if (this.listener) this.listener(data);
  }
}

module.exports = { Observable, Observer };
