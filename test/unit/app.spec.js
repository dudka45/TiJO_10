describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 21, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: '123', age: 14, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
            expect(app.assignToSwimmingCourse('Paweł', '10/06/2009')).toEqual({
                name: 'Paweł', age: 6, course: 'kids'
            });
            expect(app.assignToSwimmingCourse('Aneta', '10/06/2008')).toEqual({
                name: 'Aneta', age: 7, course: 'kids'
            });
        });
    });

    describe('calculateArea', function () {
        it('should return 7 and Success', function () {
            expect(app.calculateArea(9, 2, 1, "Success", "Error")).toEqual({
                area: 7, message: 'Success'
            });
            expect(app.calculateArea(2, 7, 0, "Success", "Error")).toEqual({
                area: 7, message: 'Success'
            });
        });
        it('should return false when one of the argument is wrong', function () {
            expect(app.calculateArea("123", 2, 1, "123", "123")).toEqual(false);
            expect(app.calculateArea(2, "123", 1, "123", "123")).toEqual(false);
        });

    });
});


});


