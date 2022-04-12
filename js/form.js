!function () {
    'use strict';
    angular.module('FormCheck', [])
        .controller('FormCheckController', FormCheckController);
    FormCheckController.$inject = ['$scope'];
    function FormCheckController(s) {
        s.info = {};
        s.formValid = false;
        
        s.switch = function () {
            s.formValid = false;
            s.blurClass = false;
        }

        s.formCheck = function ($event) {
            $event.preventDefault();
            let stdCode = s.info.mssv;
            let stdName = s.info.name;
            let stdEmail = s.info.email;
            let checkEmail = !stdEmail ? null : stdEmail.match(/\w+@\w+(\.\w+){1,2}/g);
            let stdGender = s.info.gender;
            let stdHobbies = s.info.hobby;
            let stdNation = s.info.nationality;
            if (!stdCode || !stdName || !stdGender || !stdHobbies || !stdNation || +stdNation === 0 || !stdEmail) {
                alert('Nhập thông tin chưa đúng. Mời nhập lại');
                s.formValid = false;
                return false;
            }
            if (stdEmail) {
                if (checkEmail === null || checkEmail?.length !== 1 || checkEmail[0] !== stdEmail) {
                    alert('Nhập thông tin chưa đúng. Mời nhập lại');
                    s.formValid = false;
                    return false;
                }
            }
            if (stdHobbies) {
                let hobbyArr = Object.values(stdHobbies);
                if (hobbyArr === null || !hobbyArr.includes(true)) {
                    alert('Nhập thông tin chưa đúng. Mời nhập lại');
                    s.formValid = false;
                    return false;
                }
            }
            for (let info in s.info) {
                delete s.info[info];
            }
            s.formValid = true;
            s.blurClass = "blur";
            return true;
        }
    }
}();