const wakeUp = () => 'Acordando!!';

const drinkCoffee = () => 'Bora tomar café!!';

const goSleep = () => 'Partiu dormir!!';

const doingThings = (func) => func('');

const doingThings = (callback) => {
    const result = callback();
    console.log(result);
}
