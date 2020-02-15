function autopilotDecorator(target, key, descriptor) {
    console.log(target, key, descriptor)
    const method = descriptor.value;

    descriptor.value = () => {
        method.apply(target);
        console.log('start auto drive');
    }

    return descriptor;
}

class Car {
    @autopilotDecorator
    drive() {
        console.log('normal drive');
    }
}

let car = new Car();
// normal drive
// start auto drive
car.drive();