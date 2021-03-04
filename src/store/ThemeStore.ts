import { action, computed, makeObservable, observable, reaction } from "mobx";

class ThemeStore {
  @observable
  color = "black";

  @action
  toggleColor = () => {
    this.color = this.color === "black" ? "green" : "black";
  };
  @computed get isDark() {
    return this.color === "black";
  }

  constructor() {
    makeObservable(this);

    reaction(
      () => this.color,
      () => alert("IS DARK " + this.isDark)
    );
  }
}

export default new ThemeStore();
