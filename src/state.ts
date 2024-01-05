const a = 1

interface IMan {
  name: string
  height: number
}
interface ICar {
  model: string
  year: number
}

type ManType = {
  name: string
  height: number
}

let man1: IMan = { name: 'Dima', height: 1.78 }
let man2: ManType = { name: 'Sasha', height: 1.8 }
let car: ICar = { model: 'Reno Stepway', year: 2016 }

// 9) Создайте массив в котором будут сидеть 2 элемента man1 и man2 и явно типизируйте его.
// (man1 и man2 - объекты из 5 задания)
let manArr: ManType[] = [man1 , man2]

// 12) Добавьте строгую типизацию функции, используя те типы, которые у вас есть:
  let createMan = (name: string, height: number): ManType => {
    return {
      name,
      height
    };
  }

// 13) Расширить тип ICar, чтобы компилятор не ругался:

  let car1: CarType = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
      this.on = true;
    },
    rename(model) {
      this.model = model;
    }
  }

// 14) Создайте тип IGarage и типизируйте этот кусок кода:
//   (используя те интерфейсы, которые у вас есть)

type CarType = {
  model: string
  year: number
  on: boolean
  turnOn: () => void
  rename: (model: string)=> void
}

type GarageType = {
  addCar: (car: CarType) => void
  logAllCarsNames: () => void
  getAllCars: () => CarType[]
}

let createGarage = (): GarageType => {
  let _cars: CarType[] = [];

  return {
    addCar(car) {
      _cars.push(car);
    },
    logAllCarsNames() {
      console.log('Cars in the garage: ');
      _cars.forEach(c => console.log(c.model));
    },
    getAllCars() {
      return _cars;
    }
  }
}






























export default 1