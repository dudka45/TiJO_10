describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                nam: 'Zack', age: 5, course: 'kids'
            });

            expect(app.assignToSwimmingCourse('Max', '12/07/2008')).toEqual({
                name: 'Max', age: 7, course: 'kids'
            });
        });
    });

    describe('calculationArea', function(){
        it('should return false if params is incorrect', function(){
            expect(app.calculateArea('-1', 42, 0, 'Success', 'Error')).toEqual(false);
            expect(app.calculateArea(-1, "-3", 5, 'Success', 'Error')).toEqual(false);
            expect(app.calculateArea(4, 23, '-5', 'Success', 'Error')).toEqual(false);
            expect(app.calculateArea('45', '22', -5, 'Success', 'Error')).toEqual(false);
            expect(app.calculateArea('4', 4, '4', 'Success', 'Error')).toEqual(false);
            expect(app.calculateArea(34, '2', '5', 'Success', 'Error')).toEqual(false);
            expect(app.calculateArea('7', '2', '5', 'Success', 'Error')).toEqual(false);
            expect(app.calculateArea('34', '43', '12', 'Error')).toEqual(false);
            expect(app.calculateArea('3', '4', '5', 'Success')).toEqual(false);
            expect(app.calculateArea('3', '4', '5')).toEqual(false);
        });

        it('should return number and Success', function () {
            expect(app.calculateArea(32, 1, 3, 'Success', 'Error')).toEqual({area: 29, message: 'Success'});
            expect(app.calculateArea(-3, 8, 1, 'Success', 'Error')).toEqual({area: 11, message: 'Success'});
        });

        it('should return 0 and Big null', function(){
            expect(app.calculateArea(-3, 3, -1, 'Success', 'Error')).toEqual({area: 0, message: 'Big null'});
            expect(app.calculateArea(-4, 4, -1, 'Success', 'Error')).toEqual({area: 0, message: 'Big null'});
        });

        it('should return negative number and Error', function(){
            expect(app.calculateArea(3, 3, 3, 'Success', 'Error')).toEqual({area: -6, message: "Error"});
            expect(app.calculateArea(4, 4, 4, 'Success', 'Error')).toEqual({area: -12, message: "Error"});
        });
    });
});