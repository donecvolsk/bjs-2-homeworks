
//Задача 1. Форматтер чисел 
function parseCount(value) {
    let parseNumber = Number.parseFloat(value);

    if(parseNumber !== parseNumber) {
        throw new Error("Невалидное значение");
    }
    return parseNumber;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error) {
        return error;
    }
}

//Задача 2. Треугольник

class Triangle {

    constructor(sideTriangle1, sideTriangle2, sideTriangle3) {

        this.sideTriangle1 = sideTriangle1;
        this.sideTriangle2 = sideTriangle2;
        this.sideTriangle3 = sideTriangle3;

        if(sideTriangle1 + sideTriangle2 <= sideTriangle3 ||
            sideTriangle1 + sideTriangle3 <= sideTriangle2 ||
            sideTriangle2 + sideTriangle2 <= sideTriangle1
            ) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
        get perimeter() {
            return this.sideTriangle1 + this.sideTriangle2 + this.sideTriangle3;
        }


        get area() {

            let halfPerimeterTriangle = (this.sideTriangle1 + this.sideTriangle2 + this.sideTriangle3) / 2;

            return Math.round(
                Math.sqrt(halfPerimeterTriangle * 
                    (halfPerimeterTriangle - this.sideTriangle1) * 
                    (halfPerimeterTriangle - this.sideTriangle2) * 
                    (halfPerimeterTriangle - this.sideTriangle3)) * 1000) / 1000;
            }                  
}

function getTriangle(sideTriangle1, sideTriangle2, sideTriangle3) {

    try {
            return new Triangle(sideTriangle1, sideTriangle2, sideTriangle3);
        } catch (error) {
            return {
                get area() {
                    return "Ошибка! Треугольник не существует";
                    },

                get perimeter() {
                    return "Ошибка! Треугольник не существует";
                    } 
                };          
        }
     
}
