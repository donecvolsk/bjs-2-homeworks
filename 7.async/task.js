class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    //Добавляет новый звонок в коллекцию существующих
    addClock(timeStart, callback) {

        if(!timeStart || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');  
         } 

        if(this.alarmCollection.some(item => item.time === timeStart)) {
            console.warn('Уже присутствует звонок на это же время');
          }

            this.alarmCollection.push({
            callback: callback,
            time: timeStart,
            canCall: true,
        });
           
    }
    // удаляет звонки по определённому времени
    removeClock (timeDelete, ) {

        this.alarmCollection = this.alarmCollection.filter(comparisonTime => comparisonTime.time !== timeDelete);
    }

    //возвращает текущее время в строковом формате HH:MM.
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0,-3);
    }

    //запускает будильник
    start() {

        if(this.intervalId !== null) {
         return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(callElement => {
              if(callElement.time === this.getCurrentFormattedTime() && callElement.canCall === true) {
                callElement.canCall = false;
                callElement.callback();
              }
            });
        }, 1000);
    }

    //останавливает выполнение интервала будильника.
    stop() {

        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    //сбрасывает возможность запуска всех звонков
    resetAllCalls() {

        this.alarmCollection.forEach(canCallElement => {
            canCallElement.canCall = true;
        });
    }

    //удаляет все звонки
    clearAlarms() {

        this.stop();
        this.alarmCollection = [];
    }
}


/*let clock = new AlarmClock();
const callback = f => f;
clock.addClock("16:45", callback);*/

