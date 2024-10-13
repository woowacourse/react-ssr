class URLObserver {
  constructor() {
    this.path = window.location.pathname;
    this.listeners = new Set();

    //pushState 오버라이드
    const originalPushState = window.history.pushState;
    window.history.pushState = (...args) => {
      originalPushState.apply(window.history, args);
      this.update();
    };
    //뒤로가기 앞으로가기 이벤트 발생시에도 감지
    window.addEventListener("popstate", () => this.update());
  }

  update() {
    const newPath = window.location.pathname;
    if (this.path !== newPath) {
      this.path = newPath;
      this.notifyListeners();
    }
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.path));
  }

  addListener(listener) {
    this.listeners.add(listener);
  }

  removeListener(listener) {
    this.listeners.delete(listener);
  }
}

export default URLObserver;
