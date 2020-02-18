class CountdownTimer {
  constructor(item) {
    this.selector = item.selector;
    this.targetDate = Date.parse(item.targetDate);
    this.clock = document.querySelector(this.selector);
    this.daysSpan = this.clock.querySelector('span[data-value="days"]');
    this.hoursSpan = this.clock.querySelector('span[data-value="hours"]');
    this.minutesSpan = this.clock.querySelector('span[data-value="mins"]');
    this.secondsSpan = this.clock.querySelector('span[data-value="secs"]');
    this.time = 0;
    this.timeiInt = 0;
  }
  getTimeRemaining() {
    const dateNow = Date.parse(new Date());
    this.time = this.targetDate - dateNow;
    const days = Math.floor(this.time / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((this.time % (1000 * 60)) / 1000);
    if (this.time <= 0) {
      clearInterval(this.timeiInt);
    }
    this.daysSpan.textContent = days;
    this.hoursSpan.textContent = String(hours).padStart(2, "0");
    this.minutesSpan.textContent = String(mins).padStart(2, "0");
    this.secondsSpan.textContent = String(secs).padStart(2, "0");
  }
  startClock() {
    this.timeiInt = setTimeout(this.getTimeRemaining.bind(this), 0);
    this.timeiInt = setInterval(this.getTimeRemaining.bind(this), 1000);
  }
}
const countdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("May 17, 2020")
});

countdownTimer.startClock();